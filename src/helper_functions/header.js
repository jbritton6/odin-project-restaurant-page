import '../styles/styles.css';


function title() {
    const title = document.createElement('h1');
    title.textContent = 'My Restaurant';

    return title;
}


function navBarButton(text) {
    const button = document.createElement('li');
    button.classList.add('nav-bar-button');

    const buttonText = document.createTextNode(text);
    button.appendChild(buttonText);

    return button;
}


function navBar() {
    const navBar = document.createElement('ul');
    navBar.classList.add('nav-bar');
    navBar.appendChild(navBarButton('Home'));
    navBar.appendChild(navBarButton('Menu'));
    navBar.appendChild(navBarButton('Contact'));

    return navBar;
}


function mainHeader() {
    const page = document.querySelector('div#content');

    page.appendChild(title());
    page.appendChild(navBar());
}


export default mainHeader;