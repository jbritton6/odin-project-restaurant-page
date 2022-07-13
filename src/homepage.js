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



function mainHomepage() {
    const page = document.querySelector('div#content');

    page.appendChild(title());
    page.appendChild(navBar());
}

export default mainHomepage;