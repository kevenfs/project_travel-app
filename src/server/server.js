import {
    getDataFromGeoNames
} from './js/getCoordinates'

import {
    getImageFromPixaBay
} from './js/getImage'

import {
    getDataFromGeoNames
} from './js/getCoordinates'

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Start up an instance of app
const app = express();

// Cors for cross origin allowance
app.use(cors());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('dist'));

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Travel app on server is listening on port 8000')
})

app.post('/travel', getTravelInfo);

// Post Function

function getTravelInfo(request, response) {

    let city = request.body;
    let date = request.body;

    // 1. GET CITY + DATE FROM CLIENT

    console.log('Server: ', city, date)

    // 2. CALL TO GEONAMES

    const coordinates = await getDataFromGeoNames(geoURL, location);

    // 3. RECEIVE FROM GEONAMES

    console.log('Server: ', coordinates, "GeoNames API works");

    // STEPS 4 to 7
    const image = await getImageFromPixaBay(pixaURL, location);

    // 8. PREPARE DATE FOR CLIENT

    let data = null
    data["url"] = data.date;
    data["weather"] = data.temp;

    response.send(data);
}