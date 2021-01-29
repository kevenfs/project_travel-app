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
                city: city,
                startDate: startDate,
                endDate: endDate
            })
        });
    try {

        const data = await res.json();


        //9. COUNT TRIP DURATION

        const date1 = new Date(data.date.startDate);
        const date2 = new Date(data.date.endDate);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const duration = diffDays + " days"

        // 10. UPDATE THE WEATHER AND PHOTO ON THE CLIENT

        document.querySelector('#cityResult').innerHTML = `
            <h2>
                ${city}
            </h2>
        `
        document.querySelector('#dates').innerHTML = `
            <p>
                From ${data.date.startDate} to ${data.date.endDate} (${duration})
            </p>
        `
        document.querySelector('#forecast').innerHTML = `
            <p>
                Weather forecast: High: ${data.weather.max}, Low: ${data.weather.min}, Precipitation: ${data.weather.precipitation}
            </p>
        `
        document.getElementById('image').innerHTML = `
            <img src=${data.image.image} />
        `;

        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}



// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);