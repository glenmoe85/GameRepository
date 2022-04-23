1. In your terminal, go to the games-backend folder.
2. Run `npm start`.
3. In another terminal window, go to the client folder.
4. Run `npm start`.

Current functionality:
On the "Add Games" page:
Can search games on an online database, and use those results to add games to the database, or enter a game manually.
Can also edit a chosen game from search before adding.
On the "My Games: page:
Can view added games.

Outstanding tasks:
• Make the buttons on the games in the "My Games" functional. The db is already set up to receive the relevant PATCH and DELETE requests.
• Edit the CSS so the "My Games" page displays all cards at equal height, have already given them the className "gameLibrary" to assist this.
• Implement the login, the db already contains a users table that can contain a username and password, but the HTTP commands haven't been created for it.

Stretch goals:
• Add a filter or search to the "My Games" page.