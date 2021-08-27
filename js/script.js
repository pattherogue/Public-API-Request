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
    for (let i = 0; i < data.length; i++) {
       const user = 
        `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${user[i].picture.large}" alt="profile picture">
            </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${user[i].name.first} ${user[i].name.last}</h3>
            <p class="card-text">${user[i].email}</p>
            <p class="card-text cap">${user[i].location.city}, ${user[i].location.state}</p>
            </div>
            </div>`; 

    
        




    }
        
    }
}