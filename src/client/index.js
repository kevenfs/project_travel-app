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
        console.log(data) // weather + image

        // 9. UPDATE THE WEATHER AND PHOTO ON THE CLIENT

        document.querySelector('#dates').innerHTML = JSON.stringify(data.date);
        document.querySelector('#forecast').innerHTML = JSON.stringify(data.weather);
        document.getElementById('image').innerHTML = `<img src=${data.image.image} />`;

        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}



// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);