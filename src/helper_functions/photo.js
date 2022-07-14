import '../styles/styles.css';


function photo(photoSource) {
    const container = document.createElement('div');
    container.classList.add('homepage-image');

    const photo = new Image();
    photo.src = photoSource;
    container.appendChild(photo);

    return container;
}


function anchor(text, link) {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', link);
    anchor.textContent = text;

    return anchor;
} 


function photoCredit(
    photoAuthor,
    firstLink,
    websiteName,
    secondLink
) {
    const container = document.createElement('p');
    const text1 = document.createTextNode('Photo by ');
    const text2 = document.createTextNode(' on ');

    container.appendChild(text1);
    container.appendChild(anchor(photoAuthor, firstLink));
    container.appendChild(text2);
    container.appendChild(anchor(websiteName, secondLink));
    
    return container;
}


export {
    photo,
    photoCredit,
};