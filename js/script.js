const gallery = document.getElementById('gallery');
const body = document.querySelector('body');


/* Get and display 12 random users */
fetch('https://randomuser.me/api/?results=12')
    /* data from Fetch API */
    .then((response) => response.json())
    /* pass data to function */
    .then(data => {
        generateProfile(data.results);

        modalTemplate();
        modalOverlay(data.results);
        closeModal();
    });

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
        </div>`).join('');
    
    /* parse text as HTML and specifies position */
    gallery.insertAdjacentHTML('beforeend', html);
 
        
}

/* Template of Modal */
function modalTemplate() {
    const modal = `<div class="modal-container">
    <div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    </div>
    </div>`;
  
    gallery.insertAdjacentHTML('afterend', modal);
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'none';

/* Create a modal window */
function directoryModal(data) {
   

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
          <p class="modal-text">(${data.cell.slice(0, 3)}) ${data.cell.slice(4, 7)}-${data.cell.slice(8, 12)}</p>
          <p class="modal-text">${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.state} ${data.location.postcode}</p>
          <p class="modal-text">Birthday: ${data.dob.date.slice(5, 7)}/${data.dob.date.slice(8, 10)}/${data.dob.date.slice(0, 4)}</p>
        </div>
      </div>
    </div>
    `;

    body.insertAdjacentHTML('beforeend', modal);

    
}

function modalOverlay(data) {
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', (e) => {
        const modalContainer = document.querySelector('.modal-container');
        directoryModal(data[i]);
  
        modalContainer.style.display = 'block';
      });
    }
  }
} 

function closeModal() {
    const modalClose = document.querySelector('#modal-close-btn');
    modalClose.addEventListener('click', (e) => {
      const modalContainer = document.querySelector('.modal-container');
      modalContainer.style.display = 'none';
      const modalInfoContainer = document.querySelector('.modal-info-container');
      modalInfoContainer.remove();
      console.log(modalInfoContainer);
    });
  }