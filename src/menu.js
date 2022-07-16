import { photo, photoCredit } from './helper_functions/photo.js';
import menuPhoto from './images/lore-schodts-8BNGxSAQd6M-unsplash.jpg';
import './styles/styles.css';


function menuInfoRow(title, description) {
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


function menuInfo() {
    const menuInfoContainer = document.createElement('div');
    menuInfoContainer.appendChild(menuInfoRow('Item:', 'Chocolate with Sprinkles'));
    menuInfoContainer.appendChild(menuInfoRow('Description:', 'Cholocate glazed with assorted sprinkles.'));
    menuInfoContainer.appendChild(menuInfoRow('Price:', '$10.00'));

    return menuInfoContainer;
}


function mainMenu() {
    const container = document.createElement('div');

    container.appendChild(photo(menuPhoto));
    container.appendChild(menuInfo());
    container.appendChild(photoCredit(
        'Lore Schodts',
        'https://unsplash.com/@lore_schodts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'Unsplash',
        'https://unsplash.com/s/photos/pastry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    ));

    return container;
}
  

export default mainMenu;