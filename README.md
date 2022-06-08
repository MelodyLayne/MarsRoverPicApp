### Project build still in progress

# Mars Rover Image Search Site

## Project Origins

This project originated from a class project listed here - [BloomTech Nasa Photo of the Day Project](https://github.com/bloominstituteoftechnology/nasa-photo-of-the-day)

The original project requirements asked us to create an app that accessed the Nasa API to display the photo of the day. Upon researching the available API's at Nasa, I decided instead to access the Mars Rover Photo catalog.

Initially I only accessed the Mars Curiousity Rover and hard coded a specific date to get pictures from. My next step was building a randomizer to display a different picture every time the page reloaded or upon user request. Finally I added a relatively basic gradient background and the project was complete for the purposes of the class.

## Added Functionality

Since then I have gone back and added the following funcitonality.

1. Allowing the user to choose from the three available rovers in the Nasa API.
2. Giving the user a choice of cameras from each rover.
3. Having the user set the date they want to search for images.

### Challenges and Solutions

The primary challenges in this project were -
1. Not all rovers are equipped with the same cameras
2. They do not all have the same service dates.

My solution was to create an object containing the each rover as another object and storing the name, cameras, and service dates of each rover within the individual rover objects.

### Alternatives

While I could have fleshed out a full back end to handle the API calls and set up routing to a database for the rovers and cameras, however this seemed to be a more efficient and lightweight choice for the current endeavor. If I were to carry this project to it's logical conclusion and access all the API's that Nasa offers to make a full search site, that would call for more complex decisions and justify a full server and database setup. Perhaps version 2.0 will include that and if it does I would use a PostgreSQL database with Knex to create the server side.

### A note about testing

At the conception of this project I had not yet learned enough about Jest and the React Testing Library to create tests for this project in a meaningful way. With that said, I have found that applying the testing mindest has still been very beneficial to me in the building of this app.
