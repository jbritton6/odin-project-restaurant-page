import mainHeader from './header.js';
import menuPhoto from './images/lore-schodts-8BNGxSAQd6M-unsplash.jpg';
import './styles/styles.css';


function photo() {
    const container = document.createElement('div');
    container.classList.add('homepage-image');

    const photo = new Image();
    photo.src = menuPhoto;
    container.appendChild(photo);

    return container;
}


function mainMenu() {
    const page = document.querySelector('div#content');

    mainHeader();
    page.appendChild(photo());
}


export default mainMenu;