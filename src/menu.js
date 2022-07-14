import mainHeader from './helper_functions/header.js';
import { photo, photoCredit } from './helper_functions/photo.js';
import menuPhoto from './images/lore-schodts-8BNGxSAQd6M-unsplash.jpg';
import './styles/styles.css';


function mainMenu() {
    const page = document.querySelector('div#content');

    mainHeader();
    page.appendChild(photo(menuPhoto));
    page.appendChild(photoCredit(
        'Lore Schodts',
        'https://unsplash.com/@lore_schodts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'Unsplash',
        'https://unsplash.com/s/photos/pastry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    ));
}
  

export default mainMenu;