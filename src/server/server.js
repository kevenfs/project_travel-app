const {
    getDataFromGeoNames
} = require('./js/getCoordinates.js')

const {
    getForecastFromWeatherBit
} = require('./js/getWeather.js')

const {
    getImageFromPixaBay
} = require('./js/getImage.js')

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

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
app.listen(8080, function () {
    console.log('Travel app on server is listening on port 8080')
})



// Post Function

const getTravelInfo = async (request, response) => {

    let city = request.body;
    let date = request.body;

    // 1. GET CITY + DATE FROM CLIENT

    console.log('Server: ', city, date)

    // 2. CALL TO GEONAMES

    const coordinates = await getDataFromGeoNames(city);

    // 3. RECEIVE FROM GEONAMES

    console.log('Server: ', coordinates, "GeoNames API works");

    // 4. CALL TO WEATHERBIT

    let startDate = request.body.Arriving;
    let endDate = request.body.Leaving;
    const weather = await getForecastFromWeatherBit(coordinates.lat, coordinates.lng, startDate, endDate);

    // 5. RECEIVE FROM WEATHERBIT

    console.log('Server: ', weather, "WeatherBit API works");

    // 6. CALL TO PIXABAY

    const image = await getImageFromPixaBay(city);

    // 7. RECEIVE FROM PIXABAY

    console.log('Server: ', image, "PixaBay API works");

    // 8. PREPARE DATA FOR CLIENT

    let data = {}
    data["date"] = {
        startDate: startDate,
        endDate: endDate
    };
    data["weather"] = weather;
    data["image"] = image;

    response.send(data);
}

app.post('/travel', getTravelInfo);