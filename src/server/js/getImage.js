require('dotenv').config();
const fetch = require("node-fetch");

//PIXABAY
/* Function to GET Pixabay API Data */

const getImageFromPixaBay = (city) => {

    const location = {
        city: city
    };

    const pixaURL = `https://pixabay.com/api/?key=${process.env.PIXABAY_APIKEY}&q=${city}&image_type=photo`;

    fetch("http://localhost:8000/image", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
        .then(res => res.json())
        .then(function (res) {
            let imageArray = res.hits;
            console.log(imageArray);
        })
}


module.exports = {
    getImageFromPixaBay
}