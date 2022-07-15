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
    const doughnutInfoContainer = document.createElement('div');
    doughnutInfoContainer.appendChild(doughnutInfoRow('Item:', 'Chocolate with Sprinkles'));
    doughnutInfoContainer.appendChild(doughnutInfoRow('Description:', 'Cholocate glazed with assorted sprinkles.'));
    doughnutInfoContainer.appendChild(doughnutInfoRow('Price:', '$10.00'));

    return doughnutInfoContainer;
}


function mainMenu() {
    const container = document.createElement('div');

    container.appendChild(photo(menuPhoto));
    container.appendChild(doughnutInfo());
    container.appendChild(photoCredit(
        'Lore Schodts',
        'https://unsplash.com/@lore_schodts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'Unsplash',
        'https://unsplash.com/s/photos/pastry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    ));

    return container;
}
  

export default mainMenu;