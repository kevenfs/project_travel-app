/*  Fetch coordinates from the geonames API using the destination name */

const getDataFromGeoNames = async (geoURL) => {

    const res = await fetch(geoURL)
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