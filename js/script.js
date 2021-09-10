const gallery = document.getElementById('gallery');
let directoryList = [];

/* Get and display 12 random users */
fetch('https://randomuser.me/api/?results=12')
    /* data from Fetch API */
    .then((response) => response.json())
    /* organize data */
    .then(information => directoryList = information)
    /* pass data to function */
    .then(data => {
        generateProfile(data.results);
        modalTemplate();
    })

function generateProfile(data) {
    /* create new array populated by calling provided function */
    const html = data.map(profile => 
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
        </div>`).join(' ');
    
    /* parse text as HTML and specifies position */
    gallery.insertAdjacentHTML('beforeend', html);
 
        
}

/* Create a modal window */
function modalTemplate(data) {
    let birthday = data.dob.date;
    let name = data.name.first;
    let email = data.email;
    let year = birthday.slice(0, 4);
    let month = birthday.slice(5, 7);
    let day = birthday.slice(9, 10);

    const modal = `
    <div class="modal-container">
      <div class="modal" style="padding-bottom: 0px">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container" style="background: rgba(143, 119, 191, .8); height: 430px">
          <img class="modal-img" src="${data.picture.large}" alt="profile picture">
          <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
          <p class="modal-text">${data.email}</p>
          <p class="modal-text cap">${data.location.city}</p>
          <hr>
          <p class="modal-text">${data.cell}</p>
          <p class="modal-text">${data.location.street.number} ${directory.location.street.name}, ${directory.location.city}, ${directory.location.state} ${directory.location.postcode}</p>
          <p class="modal-text">Birthday: ${month} / ${day} / ${year}</p>
        </div>
      </div>
    </div>
    `;

    
}