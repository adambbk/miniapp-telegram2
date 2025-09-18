// Incluez ce script dans votre fichier HTML pour que l'application fonctionne.
// Il doit être placé juste avant la balise </body>.

// 1. Gère le bouton "Fermer"
document.querySelector('.header-btn').addEventListener('click', () => {
    // Cette fonction de l'API de Telegram WebApp ferme la mini-app.
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.close();
    }
});

// 2. Exemple de données de plugs (ces données viendraient d'une API en réalité)
const plugsData = [
    { name: 'LACENTRALEFR', hearts: 283, verified: true, imageUrl: 'https://via.placeholder.com/300x400/0000FF/FFFFFF?text=Plug1', flags: ['🇫🇷', '🇨🇭', '🇧🇪'], details: ['📍 Livraision : 74 - Haute-Savoie', '📦 Envoi : 🇫🇷, 🇧🇪, 🇨🇭, 🇨🇦', '🤝 Meetup : 74 - Haute-Savoie'] },
    { name: 'OG LEGACY', hearts: 57, verified: true, imageUrl: 'https://via.placeholder.com/300x400/FF0000/FFFFFF?text=Plug2', flags: ['🇫🇷', '🇧🇪'], details: ['📍 Livraision : 95 - Val-d\'Oise...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug3', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug4', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug5', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug6', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug7', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug8', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug9', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug10', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug11', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug12', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug13', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug14', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug15', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug16', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug17', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug18', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug19', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    { name: 'CALIRABBIT 🐰', hearts: 39, verified: true, imageUrl: 'https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Plug20', flags: ['🇫🇷'], details: ['📍 Livraision : 75 - Paris, 91...', '📦 Liv.', '🤝 Meetup : 92 - Hauts-de-Seine'] },
    // Ajoutez d'autres objets pour avoir plus de cartes
];

// 3. Fonction pour générer une carte de plug à partir des données
function createPlugCard(plug) {
    const card = document.createElement('div');
    card.classList.add('plug-card');
    card.innerHTML = `
        <div class="card-image-container">
            <img src="${plug.imageUrl}" alt="${plug.name}" class="card-image">
            <span class="card-heart">❤️ ${plug.hearts}</span>
            ${plug.verified ? '<span class="card-verified">V</span>' : ''}
        </div>
        <div class="card-info">
            <h3 class="card-name">${plug.name}</h3>
            <div class="card-flags">
                ${plug.flags.map(flag => `<span class="flag">${flag}</span>`).join('')}
            </div>
            <div class="card-details">
                ${plug.details.map(detail => `<p class="detail-item">${detail}</p>`).join('')}
            </div>
        </div>
    `;
    return card;
}

// 4. Affiche les plugs sur la page
const plugsGrid = document.querySelector('.plugs-grid');
plugsData.forEach(plug => {
    const cardElement = createPlugCard(plug);
    plugsGrid.appendChild(cardElement);
});

// Pour la recherche, il faudrait ajouter une fonction qui filtre plugsData en fonction de la saisie de l'utilisateur.
