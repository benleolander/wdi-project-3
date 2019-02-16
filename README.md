# General Assembly Project 3 : Full-Stack React App

Ben Lander | Beth Swingler | Dexter De Leon | Tom Abbott

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


## Created App: An Overview
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



# Process

First we agreed clear endpoints and routes together on a whiteboard.

To allow front-end and back-end processes to run simultaneously we created a set of 'dummy data' that both front-end and back-end development groups used as a central source of truth. By effectively planning out with wireframes each API end point and what data it should return, we were able to begin working on the front & back ends simultaneously, using Trello to collaborate.

### Back End
- We started back end development by creating the Mongoose models for Creators and Items. Based on our planning sessions, we had a clear idea of what these should contain. We then created a small batch of seed data to begin the database.

With the seed data in place, we created Index & Show routes for the Items. This allowed us to quickly get up and running with a homepage to display the items. As Items could not be added without a Creator model to be attached to, we then moved to the Registration & Login routes for the Creator.  

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

![screenshot - Search on mobile](https://user-images.githubusercontent.com/44749113/52858219-72ba3b00-3121-11e9-8099-42d9232b4a50.png)


### Testing
We used Mocha, Chai, Supertest and NYC and aimed to write tests to cover at least 80% of our code. We decided to use Error Driven Development for this project, so the test suite was written after the majority of the app. The tests highlighted a few issues with our code which we were then able to fix. This included a Create route returning a status code of 200, rather than 201.

### Challenges

- One of the hardest features to implement in our app was the ability to filter the item index on the homepage by both category selection and search terms.
![screenshot Homepage Search Bar and Select Filter](https://user-images.githubusercontent.com/44480965/52899219-8c21bc80-31df-11e9-9fe9-216710afb121.png)
We managed to accomplish this by utilising two functions in the Items Index component, one to compare the array of category filters with each item's own category array, and another to filter the items by matching terms in item name, creator username and categories.
```
  compareCategories(){
    if(this.state.categories.length === 0) return this.state.data
    return this.state.data.filter(item => {
      return this.state.categories.every(category => {
        return item.categories.includes(category)
      })
    })
  }
```
This `compareCategories` function will either return all of the items if there have been no category filters selected, or it filters the items array, returning only the items whose categories array includes every category currently in the filter selection input.  
The array returned from `compareCategories` is then passed on to the main `filterResults` function:
```
  filterResults(){
    if(this.state.search === '') return this.compareCategories()
    const search = this.uniformString(this.state.search)
    return this.compareCategories().filter(item =>
      this.uniformString(item.name).includes(search) ||
      this.uniformString(item.creator.username).includes(search) ||
      this.uniformString(item.categories.join(',')).includes(search)
    )
  }
```
The `filterResults` function will return the items array filtered by `compareCategories` if there is no search term present. Therefore, if there aren't any search terms or category filters applied, the entire Items Index is returned. Should a search term be present, the `filterResults` function will further filter the array returned by `compareCategories` and return only items whose name, creator or categories includes the string in the search input.  
Since the inputs' values are stored in state and the `filterResults` function is called in the `render` function of the component. These functions will run on every change in either input and will reactively render the index displayed with only the items meeting the conditions of both filter functions.

### Wins

- Mobile friendliness: Bulma's in-built styles combined with selected use of media queries allowed us to create a fully mobile friendly web app.


![screenshot - Item Profile](https://user-images.githubusercontent.com/44749113/52854796-92e4fc80-3117-11e9-86ab-d8e9e798c07d.png)

![screenshot - Item Profile](https://user-images.githubusercontent.com/44749113/52854944-fd963800-3117-11e9-8dbf-ffa2fd604a1f.png)

![screenshot - Add a comment on mobile](https://user-images.githubusercontent.com/44749113/52854728-48638000-3117-11e9-9723-7b862f19a642.png)

- Contact: We successfully used Nodemailer to send emails to creators from forms

- Achieved test coverage of 83% lines of our code

## Future Features

Things we'd like to add:

- AI image recognition for automatically populating relevant categories when a user uploads a photo of their item
- SMS/Email Verification for the Register route
- Two tiers of account holder - creators and ordinary users.
