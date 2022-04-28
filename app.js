// import functions and grab DOM elements
const TreeDropdown = document.getElementById('state-dropdown');
const groundDropdown = document.getElementById('city-dropdown');
const animalDropdown = document.getElementById('house-dropdown');



const treeEl = document.getElementById('tree');

// let state
let treeCount = 0;
let groundCount = 0;
let animalCount = 0;

// set event listeners
TreeDropdown.addEventListener('change', () => {
// console.log('showing', stateDropdown.value);
    treeCount++;
    treeDiv.style.backgroundImage = `url('./assets/${state-dropdown}')`;
});

groundDropdown.addEventListener('change', () => {
// console.log('showing', cityDropdown.value);
groundCount++;

});

animalDropdown.addEventListener('change', () => {
// console.log('showing', houseDropdown.value);
animalCount++;

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
