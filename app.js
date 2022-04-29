// import functions and grab DOM elements
// We use document.getElementById('') to grab our HTML elements and give them a variable to use in app.js
const treeEl = document.getElementById('trees');
const groundEl = document.getElementById('ground');
const animalEl = document.getElementById('animal');

// let state
// state is everything on the page that will change based off user input
// we use let to name a variable
// if a number data type, let variable = 0;
// if an array data type, let variable = [];
let count = 0;

// set event listeners
// we use variableName.addEventListener('click/change', () => {})
// this allows our buttons/selects to listen to our code and allows user to change state
// in here we need to call our state variables, and any display functions that take action when the event listener is called
// if we want an image to pull display on event listener
// we use variable.style.backgroundImage = `url('./assets/${}.jpg/png')`; to call our image from assets
treeEl.addEventListener('change', () => {

});

groundEl.addEventListener('change', () => {

});

animalEl.addEventListener('change', () => {

});
// use user input to update state
// we use template literals `${}`
