import mainHome from './home.js';
import mainMenu from './menu.js';
import mainContact from './contact.js';
import mainHeader from './helper_functions/header.js';


document.querySelector('div#content').appendChild(mainHeader());
document.querySelector('div#content').appendChild(mainHome());


const loadPage = (pageLoadingFunction) => {
    const container = document.querySelector('div.home-content');
    container.textContent = '';

    alert('hi')

    container.appendChild(pageLoadingFunction());
};


const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => loadPage(mainHome));

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', () => loadPage(mainMenu));

const contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', () => loadPage(mainContact));