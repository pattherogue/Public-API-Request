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
function modalTemplate(index) {
    let directory = directoryList.results[index];
    const regexCell = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/
    let formatCell = (directory.cell).replace(regexCell, '($1) $2-$3');
    const regexDate = /(\d{4})-(\d{2})-(\d{2}).*/
    let dateStructure = (directory.dob.date).replaced(regexDate, '$2/$3/$1')

    const modal = `
    <div class="modal-container" data-index="${index}">
      <div class="modal" style="padding-bottom: 0px">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container" style="background: rgba(143, 119, 191, .8); height: 430px">
          <img class="modal-img" src="${directory.picture.large}" alt="profile picture">
          <h3 id="name" class="modal-name cap">${directory.name.first} ${directory.name.last}</h3>
          <p class="modal-text">${directory.email}</p>
          <p class="modal-text cap">${directory.location.city}</p>
          <hr>
          <p class="modal-text">${formatCell}</p>
          <p class="modal-text">${direco.location.street.number} ${directory.location.street.name}, ${directory.location.city}, ${directory.location.state} ${directory.location.postcode}</p>
          <p class="modal-text">Birthday: ${dateStructure}</p>
        </div>
      </div>
    </div>
    `;
}