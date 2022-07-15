import '../styles/styles.css';


function title() {
    const title = document.createElement('h1');
    title.textContent = 'My Restaurant';

    return title;
}


function navBarButton(text, id) {
    const button = document.createElement('li');
    button.classList.add('nav-bar-button');
    button.id = id;

    const buttonText = document.createTextNode(text);
    button.appendChild(buttonText);

    return button;
}


function navBar() {
    const navBar = document.createElement('ul');
    navBar.classList.add('nav-bar');
    navBar.appendChild(navBarButton('Home', 'home'));
    navBar.appendChild(navBarButton('Menu', 'menu'));
    navBar.appendChild(navBarButton('Contact', 'contact'));

    return navBar;
}


function mainHeader() {
    // const page = document.querySelector('div#content');
    const page = document.createElement('div');

    page.appendChild(title());
    page.appendChild(navBar());

    return page;
}


export default mainHeader;