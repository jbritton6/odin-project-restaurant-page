import homepagePhoto from './images/coffee-with-joshua-mrZS86BKk0E-unsplash.jpg';
import './styles/styles.css';

function title() {
    const element = document.createElement('h1');
    element.textContent = 'My Restaurant';
    return element;
}

function navBarButton(text) {
    const element = document.createElement('li');
    const content = document.createTextNode(text);
    element.appendChild(content);
    return element;
}

function navBar() {
    const element = document.createElement('ul');
    element.appendChild(navBarButton('Home'));
    element.appendChild(navBarButton('Menu'));
    element.appendChild(navBarButton('Contact'));
    return element;
}

function photo() {
    const container = document.createElement('div');
    container.classList.add('homepage-image');
    const photo = new Image();
    photo.src = homepagePhoto;
    container.appendChild(photo);
    return container;
}


function mainHomepage() {
    const page = document.querySelector('div#content');

    page.appendChild(title());
    page.appendChild(navBar());
    page.appendChild(photo());
}

export default mainHomepage;