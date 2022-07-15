import mainHeader from './helper_functions/header.js';
import { photo, photoCredit } from './helper_functions/photo.js';
import homePhoto from './images/coffee-with-joshua-mrZS86BKk0E-unsplash.jpg';
import './styles/styles.css';


function mainHome() {
    const container = document.createElement('div');
    container.classList.add('home-content');

    container.appendChild(photo(homePhoto));
    container.appendChild(photoCredit(
        'Coffee with Joshua',
        'https://unsplash.com/@coffeewithjoshua?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'Unsplash', 
        'https://unsplash.com/s/photos/doughnut-shop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    ));

    return container;
}


export default mainHome;