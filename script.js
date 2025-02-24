// Modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
const icon = darkModeToggle.querySelector('i');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    }
});

// Cargar el estado inicial del modo oscuro desde localStorage (opcional)
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
}

// Guardar preferencia en localStorage (opcional)
document.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});