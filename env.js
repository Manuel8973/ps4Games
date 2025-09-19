// Environment variables handler for Vercel
// This script will be injected during build time by Vercel

// Check if we're in development or production
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// Environment variables (will be replaced by Vercel during build)
window.ENV = {
    RAWG_API_KEY: 'VERCEL_RAWG_API_KEY_PLACEHOLDER',
    IS_PRODUCTION: !isDevelopment
};

// For local development, use the config from config.js
if (isDevelopment && typeof CONFIG !== 'undefined') {
    window.ENV.RAWG_API_KEY = CONFIG.RAWG_API_KEY;
}