import { photo, photoCredit } from './helper_functions/photo.js';
import menuPhoto from './images/lore-schodts-8BNGxSAQd6M-unsplash.jpg';
import './styles/styles.css';


function menuInfoRow(title, description) {
    const rowTitle = document.createElement('p');
    rowTitle.textContent = title;

    const rowDescription = document.createElement('p');
    rowDescription.textContent = description;

    const row = document.createElement('div');
    row.classList.add('menu-info-row');
    row.appendChild(rowTitle);
    row.appendChild(rowDescription);

    return row;
}


function menuInfo() {
    const menuInfoContainer = document.createElement('div');
    menuInfoContainer.appendChild(menuInfoRow('Doughnut:', 'Chocolate Frosted ($3)'));
    menuInfoContainer.appendChild(menuInfoRow('Doughnut:', 'Strawberry Frosted ($3)'));
    menuInfoContainer.appendChild(menuInfoRow('Doughnut:', 'Jelly ($4)'));
    menuInfoContainer.appendChild(menuInfoRow('Doughnut:', 'Glazed ($3)'));
    menuInfoContainer.appendChild(menuInfoRow('Doughnut:', 'Cream-Filled ($4)'));
    menuInfoContainer.appendChild(menuInfoRow('Drink:', 'Coffee ($3)'));
    menuInfoContainer.appendChild(menuInfoRow('Drink:', 'Tea ($3)'));
 
    return menuInfoContainer;
}


function menu() {
    const menuContainer = document.createElement('div');
    menuContainer.appendChild(photo(menuPhoto));
    menuContainer.appendChild(menuInfo());

    menuContainer.classList.add('menu');

    return menuContainer;
}


function mainMenu() {
    const container = document.createElement('div');

    container.appendChild(menu());
    container.appendChild(photoCredit(
        'Lore Schodts',
        'https://unsplash.com/@lore_schodts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'Unsplash',
        'https://unsplash.com/s/photos/pastry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    ));

    return container;
}
  

export default mainMenu;