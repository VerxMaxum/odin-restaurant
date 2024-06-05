export function loadButtons() {
    const navBar = document.querySelector('nav');
    
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const aboutButton = document.createElement('button');

    homeButton.classList.add('navbar-button');
    menuButton.classList.add('navbar-button');
    aboutButton.classList.add('navbar-button');

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    aboutButton.textContent = 'About';

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(aboutButton);
}