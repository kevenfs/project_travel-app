# TRAVEL APP PROJECT

## PROJECT SUMMARY
This project aims to give you the opportunity to put all of the skills you have learned into one project to build your own custom travel app. Due to the nature of this course, it is very JavaScript heavy, but it is still expected you create clean and appealing HTML/CSS. You will also be targeting the DOM, working with objects, and retrieving data from 3 APIs in which one of those is reliant on another to work. Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers.

For this project, refactor and test as much as possible while you are building. You should figure for every piece of functionality you add, you will likely spend just as much time testing and refactoring your code. If it takes you 5 hours to figure out the logic, it should likely take you another 5 hours determining that you wrote the best code possible. As your skills improve, this process will feel more natural. Make sure to remove any debugging code from your final submission.

The minimum requirements ask a fair amount from you, but the final app is quite simple. A roadmap to expand on the application and make it uniquely your own is provided.

## WORKFLOW
1. User enters name of the destination, date of departure, [date of return]
2. The client makes a POST request to the server sending the above details.
3. Now you'll make request to external APIs (geonames, weatherbit and pixabay APIs) from the express server itself.
    a. Fetch coordinates from the geonames API using the destination name.
    b. Fetch weather data from weatherBit API from the coordinates you get from the previous API. Here is the documentation.
    c. Fetch the image URL from the Pixabay API.
4. After you get all the above data, you'll save this in a global object on the express server (Just as you did in your previous project)
5. Send success response to the client.
6. After receiving the success response, you'll make another GET request to fetch the trip data saved in the global object on express server.
7. After you get the weather data on the client, you update the UI.
