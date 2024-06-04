import './styles.css';
import Logo from '../assets/logo.png'

export function loadHome() {
    const navBar = document.querySelector('nav');
    const divContent = document.querySelector('div#content');

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

    const logoWrapper = document.createElement('div');
    const welcome = document.createElement('div');

    logoWrapper.classList.add('logo-wrapper');
    welcome.classList.add('welcome');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');

    const logo = new Image();
    logo.src = Logo;
    const resto = document.createElement('h1');
    resto.textContent = 'Resto';

    logoContainer.appendChild(logo);
    logoContainer.appendChild(resto);

    logoWrapper.appendChild(logoContainer);

    const welcomeMsg = document.createElement('p');
    welcomeMsg.classList.add('welcome-message');
    welcomeMsg.textContent = 'Welcome to the restaurant full of luxurious food!';

    welcome.appendChild(welcomeMsg);

    divContent.appendChild(logoWrapper);
    divContent.appendChild(welcome);
}