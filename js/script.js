const gallery = document.getElementById('gallery');



/* Fetch and display 12 random users */
fetch('https://randomuser.me/api/?results=12')
    /* data from Fetch API */
    .then(response => response.json())
    .then(data => { 
      generateProfile(data.results);
      modalClick(data.results);
    });

 

/* Takes data from fetch request and appends to gallery */
function generateProfile(data) {
    /* create new array populated by calling provided function */
    data.map(profile => {

      profile = 
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
     
        gallery.insertAdjacentHTML('beforeend', profile);
      });
}

/* Create a modal for selected employee */
function modalDisplay(individualData) {
   
    const modal = `
    <div class="modal-container">
      <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container" style="background: rgba(143, 119, 191, .8); height: 430px">
          <img class="modal-img" src="${individualData.picture.large}" alt="profile picture">
          <h3 id="name" class="modal-name cap">${individualData.name.first} ${individualData.name.last}</h3>
          <p class="modal-text">${individualData.email}</p>
          <p class="modal-text cap">${individualData.location.city}</p>
          <hr>
          <p class="modal-text">${individualData.phone}</p>
          <p class="modal-text">${individualData.location.street.number} ${individualData.location.street.name}, ${individualData.location.city}, ${individualData.location.state} ${individualData.location.postcode}</p>
          <p class="modal-text">Birthday: ${individualData.dob.date.slice(5, 7)}/${individualData.dob.date.slice(8, 10)}/${individualData.dob.date.slice(0, 4)}</p>
        </div>
      </div>
    </div>`;

    gallery.insertAdjacentHTML('beforeend', modal);
}

function modalClick(modalData) {
  const card = document.querySelectorAll('.card');
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', e => {
      modalDisplay(modalData[i]);
    });
  }
}

const modalClose = document.getElementById('modal-close-btn');
const modalContainer = document.querySelector('.modal-container');


modalClose.addEventListener('click', e => {
  modalContainer.style.display = 'none';
  modalContainer.remove();
  });


