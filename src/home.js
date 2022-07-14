import homePhoto from './images/coffee-with-joshua-mrZS86BKk0E-unsplash.jpg';
import './styles/styles.css';

function title() {
    const title = document.createElement('h1');
    title.textContent = 'My Restaurant';
    return title;
}

function navBarButton(text) {
    const button = document.createElement('li');
    const buttonText = document.createTextNode(text);
    button.appendChild(buttonText);
    return button;
}

function navBar() {
    const navBar = document.createElement('ul');
    navBar.appendChild(navBarButton('Home'));
    navBar.appendChild(navBarButton('Menu'));
    navBar.appendChild(navBarButton('Contact'));
    return navBar;
}

function photo() {
    const container = document.createElement('div');
    container.classList.add('homepage-image');

    const photo = new Image();
    photo.src = homePhoto;
    container.appendChild(photo);
    return container;
}

function anchor(text, link) {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', link);
    anchor.textContent = text;
    return anchor;
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
  

function mainHome() {
    const page = document.querySelector('div#content');

    page.appendChild(title());
    page.appendChild(navBar());
    page.appendChild(photo());
    page.appendChild(photoCredit());
}

export default mainHome;