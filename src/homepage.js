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
    const image = document.createElement('img');
    image.src = './src/images/coffee-with-joshua-mrZS86BKk0E-unsplash.jpg'
    container.appendChild(image);
    container.classList.add('homepage-image')
    return container
}


function mainHomepage() {
    const page = document.querySelector('div#content');

    page.appendChild(title());
    page.appendChild(navBar());
    page.appendChild(photo());
}

export default mainHomepage;