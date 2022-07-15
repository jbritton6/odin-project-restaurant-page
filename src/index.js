import mainHome from './home.js';
import mainMenu from './menu.js';
import mainContact from './contact.js';


// mainHome();
// mainMenu();
mainContact();


const loadPage = (pageLoadingFunction) => {
    const container = document.querySelector('div#content');
    container.textContent = '';

    pageLoadingFunction();
};


const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => loadPage(mainHome));