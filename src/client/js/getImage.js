const getImage = (city) => {

    let location = {
        city: city
    };

    fetch("http://localhost:8000/image", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
        .then(res => res.json())
        .then(function (res) {
            let imageArray = res.hits;
            console.log(imageArray);
        })
}


export {
    getImage
}