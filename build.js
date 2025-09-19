// Build script for Vercel deployment
// This script replaces environment variable placeholders with actual values

const fs = require('fs');
const path = require('path');

// Get the API key from environment variables
const RAWG_API_KEY = process.env.RAWG_API_KEY || '';

console.log('🚀 Building for Vercel...');
console.log('📝 Injecting environment variables...');

// Read the env.js file
const envPath = path.join(__dirname, 'env.js');
let envContent = fs.readFileSync(envPath, 'utf8');

// Replace the placeholder with the actual API key
envContent = envContent.replace('VERCEL_RAWG_API_KEY_PLACEHOLDER', RAWG_API_KEY);

// Write the updated file
fs.writeFileSync(envPath, envContent);

console.log('✅ Environment variables injected successfully!');
console.log(`🔑 API Key: ${RAWG_API_KEY ? '***' + RAWG_API_KEY.slice(-4) : 'Not set'}`);
console.log('🎉 Build complete!');