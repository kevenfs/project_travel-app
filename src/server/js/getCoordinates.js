require('dotenv').config()

// GEONAMES
/* Function to GET GeoNames API Data */

/*  Fetch coordinates from the geonames API using the destination name */

const getDataFromGeoNames = async (city) => {

    const geoURL = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${process.env.GEONAMES_USERNAME}`;

    const res = await fetch(geoURL)

    try {

        const coordinates = await res.json();

        return {
            lat: coordinates.data.geonames[0].lat,
            lng: coordinates.data.geonames[0].lng
        }

    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}


module.exports = {
    getDataFromGeoNames
}