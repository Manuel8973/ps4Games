// Sample game data with API integration for images - Updated with user's collection
const games = [
    {
        id: 1,
        title: "Stray",
        genre: "adventure",
        description: "Una aventura cyberpunk protagonizada por un gato callejero en una ciudad futurista llena de robots.",
        rating: 5,
        price: "$29.99",
        gameId: "stray"
    },
    {
        id: 2,
        title: "Hollow Knight Silksong",
        genre: "action",
        description: "La esperada secuela del aclamado metroidvania, protagonizada por Hornet en un nuevo reino.",
        rating: 5,
        price: "$39.99",
        gameId: "hollow-knight-silksong"
    },
    {
        id: 3,
        title: "Dead Cells",
        genre: "action",
        description: "Un roguelike metroidvania con combate fluido y una progresión adictiva que te mantendrá enganchado.",
        rating: 5,
        price: "$24.99",
        gameId: "dead-cells"
    },
    {
        id: 4,
        title: "Tekken 7",
        genre: "sports",
        description: "El juego de lucha definitivo con gráficos espectaculares y mecánicas de combate profundas.",
        rating: 4,
        price: "$19.99",
        gameId: "tekken7"
    },
    {
        id: 5,
        title: "Minecraft",
        genre: "adventure",
        description: "El juego sandbox más popular del mundo donde la creatividad no tiene límites.",
        rating: 5,
        price: "$26.99",
        gameId: "minecraft"
    },
    {
        id: 6,
        title: "Marvel's Spider-Man",
        genre: "action",
        description: "Vive la experiencia definitiva de ser Spider-Man en una Nueva York increíblemente detallada.",
        rating: 5,
        price: "$34.99",
        gameId: "spiderman-ps4"
    },
    {
        id: 7,
        title: "Ghost of Tsushima",
        genre: "action",
        description: "Una épica aventura samurái en el Japón feudal con paisajes impresionantes y combate cinematográfico.",
        rating: 5,
        price: "$39.99",
        gameId: "ghost-tsushima"
    },
    {
        id: 8,
        title: "God of War",
        genre: "action",
        description: "El épico clásico que inició la saga. Kratos busca venganza contra los dioses del Olimpo.",
        rating: 5,
        price: "$19.99",
        gameId: "god-of-war-1"
    },
    {
        id: 9,
        title: "Tetris Ultimate",
        genre: "adventure",
        description: "El clásico Tetris de toda la vida con nuevos modos de juego y mecánicas mejoradas.",
        rating: 4,
        price: "$14.99",
        gameId: "tetris-ultimate"
    },
    {
        id: 10,
        title: "The Cult of the Lamb",
        genre: "adventure",
        description: "Un adorable pero siniestro juego sobre liderar un culto de seguidores en un mundo de falsos profetas.",
        rating: 4,
        price: "$24.99",
        gameId: "cult-lamb"
    },
    {
        id: 11,
        title: "Stardew Valley",
        genre: "adventure",
        description: "Un relajante juego de simulación de granja donde puedes crear tu propia vida rural perfecta.",
        rating: 5,
        price: "$14.99",
        gameId: "stardew-valley"
    },
    {
        id: 12,
        title: "Dragon Ball Z: Kakarot",
        genre: "rpg",
        description: "Revive la épica saga de Dragon Ball Z en esta aventura RPG llena de acción y nostalgia.",
        rating: 4,
        price: "$32.99",
        gameId: "dbz-kakarot"
    },
    {
        id: 13,
        title: "Balatro",
        genre: "adventure",
        description: "Un adictivo roguelike de cartas de póker con mecánicas innovadoras y estrategia profunda.",
        rating: 5,
        price: "$14.99",
        gameId: "balatro"
    },
    {
        id: 14,
        title: "Dragon Ball Z: Budokai Tenkaichi 4",
        genre: "sports",
        description: "El regreso de la legendaria serie de lucha 3D con más de 180 personajes jugables.",
        rating: 5,
        price: "$59.99",
        gameId: "dbz-budokai-tenkaichi-4"
    },
    {
        id: 15,
        title: "Red Dead Redemption 2",
        genre: "action",
        description: "Una épica aventura del salvaje oeste con gráficos impresionantes y narrativa cinematográfica.",
        rating: 5,
        price: "$39.99",
        gameId: "red-dead-redemption-2"
    },
    {
        id: 16,
        title: "FIFA 25",
        genre: "sports",
        description: "La experiencia de fútbol más auténtica con nuevas mecánicas de juego y gráficos mejorados.",
        rating: 4,
        price: "$69.99",
        gameId: "fifa25"
    },
    {
        id: 17,
        title: "Prototype",
        genre: "action",
        description: "Un sandbox de acción brutal donde controlas a Alex Mercer con poderes sobrenaturales para vengarse.",
        rating: 4,
        price: "$19.99",
        gameId: "prototype"
    },
    {
        id: 18,
        title: "Prototype 2",
        genre: "action",
        description: "La secuela mejorada con James Heller buscando venganza contra Alex Mercer en una Nueva York infectada.",
        rating: 4,
        price: "$24.99",
        gameId: "prototype2"
    }
];

// API configuration for game covers
const API_CONFIG = {
    // Using RAWG API for game covers (free tier available)
    BASE_URL: 'https://api.rawg.io/api/games',
    API_KEY: '0a90effd2add482d94120dab4ac4e4f3', // Your RAWG API key
    // Alternative: Using placeholder service for demo
    PLACEHOLDER_URL: 'https://via.placeholder.com/400x200/0070f3/ffffff?text='
};

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const gamesGrid = document.getElementById('games-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const ctaButton = document.querySelector('.cta-button');
const navLinks = document.querySelectorAll('.nav-link');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const viewToggleBtns = document.querySelectorAll('.view-btn');

let currentView = 'grid'; // 'grid' or 'list'

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for CTA button
ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('catalog').scrollIntoView({
        behavior: 'smooth'
    });
});

// Create star rating HTML
function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Get game cover image
async function getGameCover(game) {
    // Static game covers for immediate fallback - Updated with user's collection
    const gameCoverMap = {
        'stray': 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png',
        'hollow-knight-silksong': 'https://steamcdn-a.akamaihd.net/steam/apps/1030300/header.jpg',
        'dead-cells': 'https://image.api.playstation.com/vulcan/img/rnd/202010/0714/LdVS9GiPRuO1LQGqEaFokVtS.png',
        'tekken7': 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/H9v5o8UdwstbhJOiEwE5DWDQ.jpg',
        'minecraft': 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/wrKDKmVgKelOOqJiFi7VHlCT.png',
        'spiderman-ps4': 'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoIqbNEOhVJNFpE.png',
        'ghost-tsushima': 'https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niKEkikqK3lrHdW7csaLCMeG.png',
        'god-of-war-1': 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/SkvzZVrUr5OSkGpF4Lc5rAl4.jpg',
        'tetris-ultimate': 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/8K4ggqr96V7Oo1HwqQ9dqQ2n.jpg',
        'cult-lamb': 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1119/5U4rYAwmtLuEGZD9Iob2YjEp.png',
        'stardew-valley': 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/VKOmtMYgD4pL5d0Jvs8rSf2I.jpg',
        'dbz-kakarot': 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/PdmcE4kKO4YlB3TqXY2jOJxC.jpg',
        'balatro': 'https://cdn.akamai.steamstatic.com/steam/apps/2379780/header.jpg',
        'dbz-budokai-tenkaichi-4': 'https://image.api.playstation.com/vulcan/ap/rnd/202406/0408/a3c1a0bd2ae7b68f3e9c0bf73b5e7df5c2f7f8a0.jpg',
        'red-dead-redemption-2': 'https://image.api.playstation.com/vulcan/ap/rnd/202010/2618/Y0bNhGBSN3IyYs1nRrqWZiFM.jpg',
        'fifa25': 'https://image.api.playstation.com/vulcan/ap/rnd/202409/0611/9a8b9c7d6e5f4g3h2i1j0k9l.jpg'
    };
    
    // Try API first for dynamic loading of new games
    try {
        const searchQuery = game.title.replace(/[^\w\s]/g, '').trim(); // Clean title for search
        const response = await fetch(
            `${API_CONFIG.BASE_URL}?key=${API_CONFIG.API_KEY}&search=${encodeURIComponent(searchQuery)}&page_size=1&platforms=18` // Platform 18 = PlayStation 4
        );
        
        if (response.ok) {
            const data = await response.json();
            if (data.results && data.results.length > 0 && data.results[0].background_image) {
                console.log(`✅ API cover found for: ${game.title}`);
                return data.results[0].background_image;
            }
        }
    } catch (error) {
        console.log(`⚠️ API fetch failed for ${game.title}, using fallback:`, error.message);
    }
    
    // Return static cover if available, otherwise use gradient placeholder
    if (gameCoverMap[game.gameId]) {
        console.log(`📦 Using static cover for: ${game.title}`);
        return gameCoverMap[game.gameId];
    }
    
    console.log(`🎨 Using gradient placeholder for: ${game.title}`);
    return null; // Will trigger gradient background with emoji
}

// Create game card HTML
async function createGameCard(game, index) {
    const imageUrl = await getGameCover(game);
    
    let imageStyle = '';
    let imageContent = '';
    
    if (imageUrl) {
        imageStyle = `background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${imageUrl}'); background-size: cover; background-position: center;`;
        imageContent = '';
    } else {
        imageStyle = 'background: linear-gradient(45deg, #0070f3, #00d4ff);';
        imageContent = '<span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 3rem; opacity: 0.7;">🎮</span>';
    }
    
    return `
        <div class="game-card loading" data-genre="${game.genre}" style="animation-delay: ${index * 0.1}s">
            <div class="game-image" style="${imageStyle}">
                ${imageContent}
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <div class="game-genre">${game.genre.toUpperCase()}</div>
                <p class="game-description">${game.description}</p>
                <div class="game-rating">
                    <div class="stars">${createStarRating(game.rating)}</div>
                    <span class="rating-text">(${game.rating}/5)</span>
                </div>
                <div class="game-price">${game.price}</div>
            </div>
        </div>
    `;
}

// Render games
async function renderGames(gamesToRender = games) {
    // Create all game cards
    const gameCardsHTML = await Promise.all(
        gamesToRender.map((game, index) => createGameCard(game, index))
    );
    
    gamesGrid.innerHTML = gameCardsHTML.join('');
    
    // Apply current view mode
    if (currentView === 'list') {
        gamesGrid.classList.add('list-view');
    } else {
        gamesGrid.classList.remove('list-view');
    }
    
    // Trigger loading animation
    setTimeout(() => {
        const gameCards = document.querySelectorAll('.game-card');
        gameCards.forEach(card => {
            card.classList.add('loaded');
        });
    }, 100);
}

// View toggle functionality
viewToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        viewToggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update view mode
        if (btn.id === 'list-view') {
            currentView = 'list';
            gamesGrid.classList.add('list-view');
        } else {
            currentView = 'grid';
            gamesGrid.classList.remove('list-view');
        }
        
        // Add smooth transition effect
        gamesGrid.style.opacity = '0.7';
        setTimeout(() => {
            gamesGrid.style.opacity = '1';
        }, 150);
    });
});

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        // Filter games
        let filteredGames;
        if (filter === 'all') {
            filteredGames = games;
        } else {
            filteredGames = games.filter(game => game.genre === filter);
        }
        
        // Add fade out animation
        const currentCards = document.querySelectorAll('.game-card');
        currentCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        });
        
        // Render filtered games after animation
        setTimeout(() => {
            renderGames(filteredGames);
        }, 300);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
            
            if (entry.target.classList.contains('section-header')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const particles = document.querySelector('.particles');
    
    if (hero && particles) {
        particles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Update navbar background
    const navbar = document.querySelector('.navbar');
    if (scrolled > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Render initial games
    renderGames();
    
    // Set up intersection observer for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
    
    // Set up intersection observer for section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(30px)';
        header.style.transition = 'all 0.6s ease';
        observer.observe(header);
    });
    
    // Add loading animation to hero content
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    }, 500);
});

// Add some interactive particles on mouse move
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(0,212,255,0.6) 0%, rgba(0,212,255,0) 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.cursor');
    if (cursorElement) {
        cursorElement.style.left = e.clientX - 10 + 'px';
        cursorElement.style.top = e.clientY - 10 + 'px';
    }
});

// Add hover effects for interactive elements
document.addEventListener('mouseover', (e) => {
    if (e.target.matches('button, .nav-link, .game-card, .social-link')) {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'radial-gradient(circle, rgba(0,112,243,0.8) 0%, rgba(0,112,243,0) 70%)';
        }
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.matches('button, .nav-link, .game-card, .social-link')) {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(0,212,255,0.6) 0%, rgba(0,212,255,0) 70%)';
        }
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(() => {
    const scrolled = window.pageYOffset;
    const particles = document.querySelector('.particles');
    const navbar = document.querySelector('.navbar');
    
    if (particles) {
        particles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (navbar) {
        if (scrolled > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);