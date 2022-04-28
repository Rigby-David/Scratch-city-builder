// import functions and grab DOM elements
const stateDropdown = document.getElementById('state-dropdown');
const cityDropdown = document.getElementById('city-dropdown');
const houseDropdown = document.getElementById('house-dropdown');


// let state
let stateCount = 0;
let cityCount = 0;
let houseCount = 0;

// set event listeners
stateDropdown.addEventListener('change', () => {
// console.log('showing', stateDropdown.value);
stateCount++;

});

cityDropdown.addEventListener('change', () => {
// console.log('showing', cityDropdown.value);
cityCount++;

});

houseDropdown.addEventListener('change', () => {
// console.log('showing', houseDropdown.value);
houseCount++;

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
