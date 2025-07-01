document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');      // Affiche ou cache le menu
        hamburger.classList.toggle('active');    // Anime le hamburger
    });

    // Fermer le menu quand on clique sur un lien du menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');      // Cache le menu
            hamburger.classList.remove('active');    // Désactive l'animation du hamburger
        });
    });
});