/* Get and display 12 random users */
fetch('https://randomuser.me/api/?results=12')
    /* data from Fetch API */
    .then((response) => response.json())
    /* pass data to function */
    .then(data => {
        profileHTML(data.results);
        clickModal(data.results);
    })