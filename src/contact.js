import './styles/styles.css';


function contactInfoRow(title, description) {
    const rowTitle = document.createElement('p');
    rowTitle.textContent = title;

    const rowDescription = document.createElement('p');
    rowDescription.textContent = description;

    const row = document.createElement('div');
    row.classList.add('contact-info-row');
    row.appendChild(rowTitle);
    row.appendChild(rowDescription);

    return row;
}


function contactInfo() {
    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.appendChild(contactInfoRow('Phone:', '000-000-0000'));
    contactInfoContainer.appendChild(contactInfoRow('Email:', 'example@email.com'));
    contactInfoContainer.appendChild(contactInfoRow('Location:', '1 Main Street, New York, New York 10000'));
    contactInfoContainer.classList.add('contact');

    return contactInfoContainer;
}


function mainContact() {
    const container = document.createElement('div');

    container.appendChild(contactInfo());

    return container;
}


export default mainContact;