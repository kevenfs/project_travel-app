require('dotenv').config()
'resolve.fallback: { "path": require.resolve("path-browserify") }'

import {
    getDataFromGeoNames
} from './js/getCoordinates'
import {
    getImage
} from './js/getImage';


import './styles/style.scss'


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// GEONAMES
/* Function to GET GeoNames API Data */
const geoURL = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=kevenfs`;

//PIXABAY
/* Function to GET Pixabay API Data */
const pixaURL = `https://pixabay.com/api/?key=${process.env.PIXABAY_APIKEY}&q=${city}&image_type=photo`;



/* Function called by event listener */
const performAction = async (e) => {
    const location = document.getElementById('city').value;

    const coordinates = await getDataFromGeoNames(geoURL, location);
    console.log(coordinates, "GeoNames API works");

    // postDataToServer(data.main.temp);

    const image = await getImage(pixaURL, location);
    // getRecentEntryData();
}


// const postDataToServer = async (temp) => {

//     const res = await fetch('http://localhost:8000/addData',

//         {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 date: newDate,
//                 temp: temp,
//                 feeling: document.getElementById('feelings').value
//             })
//         });
//     try {

//         const data = await res.json();
//         console.log(data)
//         return data;
//     } catch (error) {
//         console.log("error", error);
//         // appropriately handle the error
//     }
// }

// const getRecentEntryData = async () => {

//     const request = await fetch('http://localhost:8000/all');
//     try {
//         const allData = await request.json();
//         console.log('All data is :');
//         console.log(allData);
//         document.getElementById('date').innerHTML = allData.date;
//         document.getElementById('temp').innerHTML = allData.temp;
//         document.getElementById('content').innerHTML = allData.feel;
//     } catch (error) {
//         console.log('Error', error);
//     }
// }

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);