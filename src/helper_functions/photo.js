import '../styles/styles.css';


function photo(photoSource) {
    const photo = new Image();
    photo.src = photoSource;

    return photo;
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