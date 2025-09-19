// Configuration file example
// Copy this file to 'config.js' and add your own API key if you want to use real game covers

const CONFIG = {
    // RAWG API Configuration (optional)
    // Get your free API key at: https://rawg.io/apidocs
    RAWG_API_KEY: '', // Add your API key here
    
    // Set to true if you want to try fetching covers from API
    USE_API: false,
    
    // Fallback settings
    USE_PLACEHOLDER_IMAGES: true
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}