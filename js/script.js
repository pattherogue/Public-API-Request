/* Get and display 12 random users */
fetch('https://randomuser.me/api/?results=12')
    /* data from Fetch API */
    .then((response) => response.json())
    /* pass data to function */
    .then(data => {
        generateProfile(data.results);
        modalTemplate(data.results);
    })

function generateProfile(data) {
    /* create new array populated by calling provided function */
    const profile = data.map(user => { 
        /* template literal plus index.html file */
        `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${user.picture.large}" alt="profile picture">
            </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
            <p class="card-text">${user.email}</p>
            <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
            </div>
        </div>`; 
    
    /* parses text as HTML and specifies position */
    gallery.insertAdjacentHTML('beforeend', profile);
    });
        
}

/* Create a modal window */
function modalTemplate() {
    const modal = 
    `<div class="modal-container">
    <div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    </div>
    </div>`;

    gallery.insertAdjacentHTML('afterend', modal);
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'none';
}