import './styles.css';
import Plate from '../assets/plate.jpg'

export function loadAbout() {
    const divContent = document.getElementById('content');
    divContent.replaceChildren();

    const about = document.createElement('h1');
    about.id = 'about';
    const aboutContainer = document.createElement('div');
    aboutContainer.id = 'about-container';

    const aboutContent = document.createElement('div');
    aboutContent.id = 'about-content';

    const quote = document.createElement('p');
    quote.textContent = `" We serve our customers with the best quality of food and ingredients.
    Our chefs are world-class quality, and we ensure that they make the one
    of the best food in the world. Come and dine in with us! "`;
    const author = document.createElement('p');
    author.textContent = "- Head Chef";

    aboutContent.appendChild(quote);
    aboutContent.appendChild(author);

    const plate = new Image();
    plate.src = Plate;
    plate.alt = "plate";

    aboutContainer.appendChild(aboutContent);
    aboutContainer.appendChild(plate);

    divContent.appendChild(about);
    divContent.appendChild(aboutContainer);
}