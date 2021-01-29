require('dotenv').config();
const fetch = require("node-fetch");

//PIXABAY
/* Function to GET Pixabay API Data */

const getImageFromPixaBay = async (city) => {

    const pixaURL = `https://pixabay.com/api/?key=${process.env.PIXABAY_APIKEY}&q=${city}&image_type=photo`;

    const res = await fetch(pixaURL)

    try {

        const image = await res.json();

        return {
            image: image.hits[0].webformatURL
        }

    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}


module.exports = {
    getImageFromPixaBay
}