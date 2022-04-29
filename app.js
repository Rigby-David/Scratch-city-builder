// import functions and grab DOM elements
// We use document.getElementById('') to grab our HTML elements and give them a variable to use in app.js
const treeSection = document.getElementById('tree-section');
const groundSection = document.getElementById('ground-section');
const animalSection = document.getElementById('animal-section');

const treeSelect = document.getElementById('tree-select');
const groundSelect = document.getElementById('ground-select');
const animalSelect = document.getElementById('animal-select');

const treeDiv = document.getElementById('tree');
const groundDiv = document.getElementById('ground');
const animalDiv = document.getElementById('ground');

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
treeSelect.addEventListener('change', () => {
console.log('hi', treeSelect);
});

groundSelect.addEventListener('change', () => {
console.log('hi', groundSelect);

});

animalSelect.addEventListener('change', () => {
console.log('hi', animalSelect);

});
// use user input to update state
// we use template literals `${}`
``