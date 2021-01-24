/*  Fetch coordinates from the geonames API using the destination name */

const getDataFromGeoNames = async (baseURL) => {

    const res = await fetch(baseURL)
    try {

        const coordinates = await res.json();
        console.log(coordinates)
        res => {
            return {
                lat: res.data.geonames[0].lat,
                lng: res.data.geonames[0].lng
            }
        };
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}


export {
    getDataFromGeoNames
}