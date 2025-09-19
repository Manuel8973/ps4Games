// Game covers API integration
// Using RAWG API (rawg.io) - Free tier available with registration

// Instructions to get your API key:
// 1. Go to https://rawg.io/apidocs
// 2. Register for a free account
// 3. Get your API key from the dashboard
// 4. Replace 'your-api-key-here' in script.js with your actual key

// Alternative: Using The Game Database (TheGameDB) API
// 1. Go to https://thegamesdb.net/
// 2. Register and get API key
// 3. Documentation: https://thegamesdb.net/api/

// For now, the project uses placeholder images with game names
// When you get an API key, uncomment the API section in script.js

// Static game covers mapping (fallback option)
const GAME_COVERS = {
    'tlou2': 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1308/UgNFGIaKYHoAk8lTBZVQGCZz.jpg',
    'gow2018': 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.jpg',
    'spiderman': 'https://image.api.playstation.com/vulcan/img/rnd/202011/1717/GemRaOZaCMhGxQ9dRhnQQyT5.jpg',
    'horizon': 'https://image.api.playstation.com/vulcan/img/rnd/202101/2921/DdJ5YguZPR5JuaFf9LJNH1fX.jpg',
    'witcher3': 'https://images.gog-statics.com/8fb971e8c0cbf87c9f434def1c0a0d20e67e8bb5dbe3c34bea0c9abc53f04ca7_product_card_v2_mobile_slider_639.jpg',
    'fifa24': 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-24/images/2023/07/fifa24-announce-hero-logo-no-keyart-16x9-xl.jpg.adapt.crop191x100.1200w.jpg',
    'uncharted4': 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y0bNhGBSN3IyYs1nRrqWZiFM.jpg',
    'bloodborne': 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/pdkPXmGr3FgZQE3CgCykkm3M.jpg',
    'ff7remake': 'https://image.api.playstation.com/vulcan/ap/rnd/202002/2118/4XVjjJqPR9Gep6SSIlHNvSCe.jpg',
    'gtsport': 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/EQnTlNjVXJlCNRJcOhsYqJ2P.jpg',
    'detroit': 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/d4HSc7mOd5JC9lLc8SPlKGvj.jpg',
    'persona5r': 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1010/T45iRN40SDL6UIBMNb5szKfT.jpg'
};

// Function to get game cover with fallback
function getGameCoverUrl(gameId, title) {
    // First try static mapping
    if (GAME_COVERS[gameId]) {
        return GAME_COVERS[gameId];
    }
    
    // Fallback to placeholder
    return `https://via.placeholder.com/400x200/0070f3/ffffff?text=${encodeURIComponent(title)}`;
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GAME_COVERS, getGameCoverUrl };
}