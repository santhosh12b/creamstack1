export const CURRENCY_STORAGE_KEY = 'creamstack_preferred_currency';

/**
 * Clean up any legacy manual currency locks from localStorage
 * so that auto-detection runs fresh on every page refresh.
 */
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem(CURRENCY_STORAGE_KEY);
  } catch {
    // Ignore storage errors
  }
}

/**
 * Checks if the visitor's device/browser timezone is in India.
 */
export const isIndianTimezone = () => {
  if (typeof window === 'undefined') return false;
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    return (
      timeZone.includes('Kolkata') ||
      timeZone.includes('Calcutta') ||
      timeZone.includes('India')
    );
  } catch {
    return false;
  }
};

/**
 * Instant 0ms currency on initial frame render.
 * - Visitors in India -> 'inr'
 * - International visitors -> 'usd'
 */
export const getInitialCurrency = () => {
  return isIndianTimezone() ? 'inr' : 'usd';
};

/**
 * Asynchronously detects visitor's country by IP (Edge header or Geo IP).
 * Always returns 'inr' for India and 'usd' for any other country.
 */
export const detectVisitorCurrency = async () => {
  if (typeof window === 'undefined') return 'usd';

  // 1. Try internal edge endpoint /api/geo
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);

    const res = await fetch('/api/geo', { signal: controller.signal });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (data && data.country) {
        return data.country.toUpperCase() === 'IN' ? 'inr' : 'usd';
      }
    }
  } catch {
    // Proceed to fallback
  }

  // 2. Fallback to public geo IP lookup
  try {
    const controller2 = new AbortController();
    const timeout2 = setTimeout(() => controller2.abort(), 2000);

    const res2 = await fetch('https://api.country.is', { signal: controller2.signal });
    clearTimeout(timeout2);

    if (res2.ok) {
      const data2 = await res2.json();
      if (data2 && data2.country) {
        return data2.country.toUpperCase() === 'IN' ? 'inr' : 'usd';
      }
    }
  } catch {
    // Fallback to timezone
  }

  return getInitialCurrency();
};
