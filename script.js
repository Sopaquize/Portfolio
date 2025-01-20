// Fonction pour changer de thème
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const themeIcon = document.getElementById('themeIcon');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.innerHTML = '&#9789;';  // Icône de soleil
    } else {
        themeIcon.innerHTML = '&#9733;';  // Icône de lune
    }
});

// Afficher la description des centres d'intérêt
function toggleInterest(id) {
    const element = document.getElementById(id);
    element.style.display = (element.style.display === 'none') ? 'block' : 'none';
}
