import './styles/style.scss'


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
/* Function to GET Web API Data */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=de81d521f112510def4e1ed18f97247c&units=metric';

/* Function called by event listener */
const performAction = async (e) => {
    const newZip = document.getElementById('zip').value;
    const data = await getWeatherDataFromAPI(baseURL, newZip, apiKey);
    postDataToServer(data.main.temp);
    getRecentEntryData();
}

const getWeatherDataFromAPI = async (baseURL, zip, key) => {

    const res = await fetch(baseURL + zip + key)
    try {

        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

const postDataToServer = async (temp) => {

    const res = await fetch('http://localhost:8000/addData',

        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: newDate,
                temp: temp,
                feeling: document.getElementById('feelings').value
            })
        });
    try {

        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

const getRecentEntryData = async () => {

    const request = await fetch('http://localhost:8000/all');
    try {
        const allData = await request.json();
        console.log('All data is :');
        console.log(allData);
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.feel;
    } catch (error) {
        console.log('Error', error);
    }
}

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);