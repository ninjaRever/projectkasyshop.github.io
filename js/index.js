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

document.getElementById('commandeForm').addEventListener('submit', function(e) {
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const adresse = document.getElementById('adresse').value.trim();
    const ville = document.getElementById('ville').value.trim();
    const telephone = document.getElementById('telephone').value.trim();

    let erreur = "";

    // Vérification du nom
    if (nom.length < 2) {
        erreur += "Le nom doit contenir au moins 2 caractères.\n";
    }

    // Vérification de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        erreur += "Adresse e-mail invalide.\n";
    }

    // Vérification du téléphone (10 chiffres)
    const telRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    if (!telRegex.test(telephone)) {
        erreur += "Numéro de téléphone invalide (10 chiffres requis).\n";
    }

    // Vérification de la ville
    if (ville.length < 2) {
        erreur += "La ville doit contenir au moins 2 caractères.\n";
    }

    // Vérification de l'adresse
    if (adresse.length < 5) {
        erreur += "L'adresse doit contenir au moins 5 caractères.\n";
    }

    if (erreur) {
        alert(erreur);
        e.preventDefault();
    }
});