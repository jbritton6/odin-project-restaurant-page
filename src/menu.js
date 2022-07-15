import mainHeader from './helper_functions/header.js';
import { photo, photoCredit } from './helper_functions/photo.js';
import menuPhoto from './images/lore-schodts-8BNGxSAQd6M-unsplash.jpg';
import './styles/styles.css';


function doughnutInfoRow(title, description) {
    const rowTitle = document.createElement('p');
    rowTitle.textContent = title;

    const rowDescription = document.createElement('p');
    rowDescription.textContent = description;

    const row = document.createElement('div');
    row.classList.add('doughnut-info-row');
    row.appendChild(rowTitle);
    row.appendChild(rowDescription);

    return row;
}


function doughnutInfo() {
    // const container = document.createElement('div');

    /*
    const itemTitle = document.createElement('p');
    itemTitle.textContent = 'Item:';
    const itemDescription = document.createElement('p');
    itemDescription.textContent = 'Lorem ipsum dolor';
    const itemContainer = document.createElement('div');
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemDescription);
    */
    const doughnutInfoContainer = document.createElement('div');
    doughnutInfoContainer.appendChild(doughnutInfoRow('Item:', 'Lorem ipsum dolor'));

    // const priceContainer = document.createElement('div');
    return doughnutInfoContainer;
}


function mainMenu() {
    const page = document.querySelector('div#content');

    mainHeader();
    page.appendChild(photo(menuPhoto));
    page.appendChild(doughnutInfo());
    page.appendChild(photoCredit(
        'Lore Schodts',
        'https://unsplash.com/@lore_schodts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'Unsplash',
        'https://unsplash.com/s/photos/pastry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    ));
}
  

export default mainMenu;