const gallery = document.getElementById('gallery');
const body = document.querySelector('body');


/* Fetch and display 12 random users */
fetch('https://randomuser.me/api/?results=12')
    /* data from Fetch API */
    .then(response => response.json())
    .then(data => { 
      generateProfile(data.results);
      modalDisplay(data.results);
    })

 

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
        </div>`
     
        gallery.insertAdjacentHTML('beforeend', profile);
      });
}



/* Create a modal for selected employee */
function modalDisplay(data) {
   
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
    </div>`;

    gallery.insertAdjacentHTML('beforeend', modal);
}

const buttonClose = document.getElementById('modal-close-btn');
const containerModal = doucment.querySelector('.modal-container');

buttonClose.addEventListener('click', e => {
  containerModal.style.modalDisplay = 'none';
  containerModal.remove();
  });


function modalClick(modalData) {
  const card = document.querySelector('.card');
  for (let i = 0; i < card.clientHeight; i++) {
    card[i].addEventListener('click', e => {
      htmlModal(modalData[i]);
    })
  }
}
