# TRAVEL APP PROJECT
This project helps people plan their next trip. It uses 3 differents APIs to get the client the information needed for a good planning. By entering the city in which they plan to go and the dates wanted, the app pulls up a photo of the location, the number of days planned for the stay and the expected forecast for that time.

## APIs
Geonames: https://www.geonames.org/
Weatherbit: https://www.weatherbit.io/
Pixabay: https://pixabay.com/

## LIST OF DEPENDENCIES
"@webpack-cli/init": "^1.1.2",
"babel-loader": "^8.2.2",
"body-parser": "^1.19.0",
"core-js": "^3.8.3",
"cors": "^2.8.5",
"dotenv": "^8.2.0",
"express": "^4.17.1",
"node-fetch": "^2.6.1",
"webpack": "^5.16.0",
"webpack-cli": "^4.4.0"

### WORKFLOW
1. GET CITY + DATE FROM CLIENT
2. CALL TO GEONAMES
3. RECEIVE FROM GEONAMES
4. CALL TO WEATHERBIT
5. RECEIVE FROM WEATHERBIT
6. CALL TO PIXABAY
7. RECEIVE FROM PIXABAY
8. PREPARE DATA FOR CLIENT
9. COUNT TRIP DURATION
10. UPDATE THE WEATHER AND PHOTO ON THE CLIENT
