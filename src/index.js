import { loadHome } from './homePageLoader.js';
import { loadMenu } from './menuPageLoader.js';
import { loadAbout } from './aboutPageLoader.js';
import { loadButtons } from './buttonLoader.js';

loadButtons();
loadHome();

const navBarButtons = Array.from(document.getElementsByClassName('navbar-button'));

navBarButtons[0].addEventListener("click", loadHome);
navBarButtons[1].addEventListener("click", loadMenu);
navBarButtons[2].addEventListener("click", loadAbout);