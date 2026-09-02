import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables so that process.env has them for the API route
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    base: './',
    plugins: [
      react(),
      {
        name: 'api-middleware',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => body += chunk.toString());
              req.on('end', async () => {
                try {
                  req.body = JSON.parse(body || '{}');
                  const handler = (await import('./api/contact.js')).default;
                  // Mock Express-like res object methods used in contact.js
                  res.status = (code) => { res.statusCode = code; return res; };
                  res.json = (data) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                  };
                  await handler(req, res);
                } catch (error) {
                  console.error("API Middleware Error:", error);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: error.message }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
  };
})
