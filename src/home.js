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

function anchor(text, link) {
    const container = document.createElement('a');
    container.setAttribute('href', link);
    container.textContent = text;
    return container;
} 

function photoCredit() {
    const container = document.createElement('p');
    const text1 = document.createTextNode('Photo by ');
    const text2 = document.createTextNode(' on ');
    container.appendChild(text1);
    container.appendChild(anchor('Coffee with Joshua', 'https://unsplash.com/@coffeewithjoshua?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'));
    container.appendChild(text2);
    container.appendChild(anchor('Unsplash', 'https://unsplash.com/s/photos/doughnut-shop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'));
    return container;
}
  

function mainHomepage() {
    const page = document.querySelector('div#content');

    page.appendChild(title());
    page.appendChild(navBar());
    page.appendChild(photo());
    page.appendChild(photoCredit());
}

export default mainHomepage;