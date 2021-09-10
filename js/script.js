const gallery = document.getElementById('gallery');

/* Get and display 12 random users */
fetch('https://randomuser.me/api/?results=12')
    /* data from Fetch API */
    .then((response) => response.json())
    /* pass data to function */
    .then(data => {
        generateProfile(data.results);
        modalTemplate();
    })

function generateProfile(data) {
    /* create new array populated by calling provided function */
    const profile = data.map(profile => { 
        /* template literal plus index.html file */
        `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${profile.picture.large}" alt="profile picture">
            </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${profile.name.first} ${profile.name.last}</h3>
            <p class="card-text">${profile.email}</p>
            <p class="card-text cap">${profile.location.city}, ${profile.location.state}</p>
            </div>
        </div>`;
    
    /* parse text as HTML and specifies position */
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