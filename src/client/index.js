import './styles/style.scss'


/* Function called by event listener */
const performAction = async (e) => {
    const city = document.getElementById('city').value;
    const startDate = document.getElementById('start').value;
    const endDate = document.getElementById('end').value;

    console.log('Client: ', city, startDate, endDate)

    const res = await fetch('http://localhost:8080/travel',

        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Where: city,
                Arriving: startDate,
                Leaving: endDate
            })
        });
    try {

        const data = await res.json();
        console.log(data) // weather + url

        // 9. UPDATE THE WEATHER AND PHOTO ON THE CLIENT

        document.getElementById('cityImg').src = allData.date;
        document.getElementById('weather').innerHTML = allData.temp;

        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}



// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);