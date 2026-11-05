export const CONSENT_STORAGE_KEY = 'creamstack_cookie_consent';

export const DEFAULT_CONSENT = {
  necessary: true,
  preferences: false,
  statistics: false,
  marketing: false,
};

export const getStoredConsent = () => {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error('Error reading cookie consent:', error);
    return null;
  }
};

export const applyConsentToThirdParties = (consent) => {
  if (!consent) return;

  // 1. Meta (Facebook) Pixel Consent
  // When marketing consent is granted, enable tracking; if revoked/denied, revoke tracking.
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      if (consent.marketing) {
        window.fbq('consent', 'grant');
      } else {
        window.fbq('consent', 'revoke');
      }
    } catch (err) {
      console.warn('Meta Pixel consent update error:', err);
    }
  }

  // 2. Google Analytics & Google Ads Consent Mode v2 (gtag)
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('consent', 'update', {
        ad_storage: consent.marketing ? 'granted' : 'denied',
        ad_user_data: consent.marketing ? 'granted' : 'denied',
        ad_personalization: consent.marketing ? 'granted' : 'denied',
        analytics_storage: consent.statistics ? 'granted' : 'denied',
      });
    } catch (err) {
      console.warn('Google Tag consent update error:', err);
    }
  }

  // 3. Microsoft Clarity (Statistics & Analytics category)
  if (typeof window !== 'undefined' && window.clarity) {
    try {
      if (consent.statistics) {
        window.clarity('consent', true);
      } else {
        window.clarity('consent', false);
      }
    } catch (err) {
      console.warn('Clarity consent update error:', err);
    }
  }
};

export const saveCookieConsent = (categories) => {
  const payload = {
    necessary: true, // Always required
    preferences: Boolean(categories?.preferences),
    statistics: Boolean(categories?.statistics),
    marketing: Boolean(categories?.marketing),
    timestamp: new Date().toISOString(),
  };

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.error('Error saving cookie consent to localStorage:', error);
  }

  applyConsentToThirdParties(payload);
  return payload;
};

