// Changer de thème
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Afficher la description des centres d'intérêt
function toggleInterest(id) {
    const element = document.getElementById(id);
    element.style.display = (element.style.display === 'none') ? 'block' : 'none';
}