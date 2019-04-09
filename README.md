# General Assembly Project 3: Full-Stack React App

### Project Brief
A group project to design a full-stack React app with a NoSQL database.

### Timeframe
7 days

## Technologies used

* React
* JavaScript (ES6)
* Node.js
* Webpack
* MongoDB/Mongoose
* Chai/Mocha
* Supertest/NYC
* Bulma
* Nodemailer
* React Filestack
* HTML 5
* SASS/SCSS/CSS Animation
* Git/GitHub

## Deployed version
- https://created-wdi.herokuapp.com/

## Code Installation

- https://github.com/benleolander/wdi-project-3

1. Clone or download the repo
2. Install ```yarn``` in Terminal
3. Start the database by running ```mongodb```
4. Start the server by running ```nodemon```
5. Start Webpack with ```yarn run serve```
6. To see test coverage use ```yarn run test```


## App Overview
Created joins creators with collectors. It is a space for independent carpenters, inventors and domestic creatives to showcase their creations. Appreciators and potential collectors can view and comment on items, and even contact the creators if they'd like to buy or learn more about a particular item. The app is fully responsive, displaying correctly on desktop, tablet & mobile.

## User Journey
Land on the homepage
![screenshot - Homepage](https://user-images.githubusercontent.com/44749113/52853728-5cf24900-3114-11e9-9eba-a4882e38fd43.png)

Users can register as a creator if they want to upload listings
![screenshot - Register](https://user-images.githubusercontent.com/44749113/52858337-bad95d80-3121-11e9-884a-b86caf639cc1.png)

Creators can upload files in the forms as well as use React Selects to add categories
![screenshot - Creator Profile](https://user-images.githubusercontent.com/44749113/52858169-51594f00-3121-11e9-8796-9d855cba8e24.png)

View and comment on other user's items
![screenshot - Item Profile](https://user-images.githubusercontent.com/44749113/52858076-122afe00-3121-11e9-817a-52785a566d8c.png)

Search for items using either a search bar or pre-selected categories
![screenshot - Search on mobile](https://user-images.githubusercontent.com/44749113/52854336-01c15600-3116-11e9-9b4f-f22e1e83a925.png)



## Process

First we agreed clear endpoints and routes together on a whiteboard.

To allow front-end and back-end processes to run simultaneously we created a set of 'dummy data' that both front-end and back-end development groups used as a central source of truth. By effectively planning out with wireframes each API end point and what data it should return, we were able to begin working on the front & back ends simultaneously, using Trello to collaborate.

### Back End
- We started back end development by creating the Mongoose models for Creators and Items. Based on our planning sessions, we had a clear idea of what these should contain. We then created a small batch of seed data to begin the database.

With the seed data in place, we created Index & Show routes for the Items. This allowed us to quickly get up and running with a homepage to display the items. As Items could not be added without a Creator model to be attached to, we then moved to the Registration & Login routes for the Creator.

Once all of these were in place, I added the comment & ratings system. The average rating is a virtual on the itemSchema, calculated when the item is retrieved from the database.

![ItemSchema AverageRating virtual](https://user-images.githubusercontent.com/44977343/55808820-beafad80-5adc-11e9-9ced-82e773ebf3af.png)

### Front End
Using the dummy data we created a React front end starting with the Items Index and navbar, which we agreed would form the homepage.
Aimed first for MVP:
- Display home Homepage
- Create a user Profile
- Login/Logout
- Add an item

The first round of features we added:
- Dynamic navbar with different content depending on whether a user is logged in or not.
- Replaced alerts with Flash Messages to notify users of form submission, login, log out, and successfully/unsuccessfully adding an item.
- Specific user feedback on form submission errors.

Once we felt we were feature complete for the app, we moved on to adding a mobile responsive design.

![screenshot - Search on mobile](https://user-images.githubusercontent.com/44749113/52858219-72ba3b00-3121-11e9-8099-42d9232b4a50.png)


### Testing
We used Mocha, Chai, Supertest and NYC and aimed to write tests to cover at least 80% of our code. We decided to use Error Driven Development for this project, so the test suite was written after the majority of the app. The tests highlighted a few issues with our code which we were then able to fix. This included a Create route returning a status code of 200, rather than 201.

### Challenges

- This was our groups' first use of using GitHub to collaborate on code. This was largely successful, but there were a few challenges with merge conflicts as we were starting out.


### Wins

- Mobile friendliness: Bulma's in-built styles combined with selected use of media queries allowed us to create a fully mobile friendly web app.

![screenshot - Item Profile](https://user-images.githubusercontent.com/44749113/52854796-92e4fc80-3117-11e9-86ab-d8e9e798c07d.png)

![screenshot - Item Profile](https://user-images.githubusercontent.com/44749113/52854944-fd963800-3117-11e9-8dbf-ffa2fd604a1f.png)

![screenshot - Add a comment on mobile](https://user-images.githubusercontent.com/44749113/52854728-48638000-3117-11e9-9723-7b862f19a642.png)

- Contact: We successfully used Nodemailer to send emails to creators from forms

- Achieved test coverage of 83% lines of our code.

## Future Features

Things we'd like to add:

- AI image recognition API for automatically populating relevant categories when a user uploads a photo of their item
- SMS/Email Verification for the Register route
- Two tiers of account holder - creators and ordinary users.
