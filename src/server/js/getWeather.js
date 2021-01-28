require('dotenv').config();
const fetch = require("node-fetch");


// WEATHERBIT
/* Function to GET WeatherBit API Data */

/*  Fetch weather from the weatherbit API using coordinates from geonames API & date from client */


const getForecastFromWeatherBit = async (lat, lng, startDate, endDate) => {

    const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&start_date=${startDate}&end_date=${endDate}&key=${process.env.WEATHERBIT_APIKEY}`;

    console.log(weatherURL)

    const res = await fetch(weatherURL)

    try {

        const weather = await res.json();

        console.log(weather.data[0].max_temp);

        return {
            max: weather.data[0].max_temp,
            min: weather.data[0].min_temp,
            precipitation: weather.data[0].precip
        }

    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}


module.exports = {
    getForecastFromWeatherBit
}