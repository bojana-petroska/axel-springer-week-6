const fruitsList = ['pear', 'grapes', 'apple', 'banana', 'orange'];
const fruitsListDisplayed = document.getElementById('fruit-list');

function listTheFruits() {
    fruitsList.forEach(fruit => {
        const listAFruit = document.createElement('li');
        listAFruit.textContent = fruit;
        fruitsListDisplayed.appendChild(listAFruit)
    })
}

listTheFruits();

// 2: Add Elements to an Array
// Objective: Create an array and add a new element to it using an input field and a
// button.
// Instructions:
// 1. Create an array with the names of three colors.
const colorNames = ['blue', 'hotpink', 'yellow'];
// 2. Add an input field and a button to the HTML.
// 3. Use JavaScript to add the value from the input field to the array and display the
// updated array in a list.

const addColors = document.getElementById('color-input');
const addColorsButton = document.getElementById('add-color-button');
const colorList = document.getElementById('color-list');

function updateColorList() {
    colorList.innerHTML = "";
    colorNames.forEach(color => {
        const listAColor = document.createElement('li'); 
        listAColor.textContent = color;
        colorList.appendChild(listAColor);
    })
}

updateColorList();

function addColorsList() {
    const newColor = addColors.value;
    colorNames.push(newColor);
    updateColorList();
    console.log(colorNames)
    //addColors.value = "";
}

addColorsButton.addEventListener('click', addColorsList)

// 3: Display Array Length
// Objective: Display the number of elements in an array.
// Instructions:
// 1. Create an array with the names of five countries.
const countries = ['Macedonia', 'Germany', 'Argentina', 'Spain', 'Russia'];
// 2. Display the names of the countries in an unordered list.
const countryList = document.getElementById('country-list');
const countCountries = document.getElementById('country-count');

function updateCountryList() {
    //countryList.innerHTML = "";
    countries.forEach(country => {
        const listACountry = document.createElement('li'); 
        listACountry.textContent = country;
        countryList.appendChild(listACountry);
    })
}

updateCountryList();
// 3. Display the number of countries in a paragraph.
function countTheCountries() {
    countCountries.innerHTML = `Number of countries: ${countries.length}`;
}

countTheCountries();
// Extra: create an input field and button to add countries to the list

// 4: Remove Elements from an Array
// Objective: Remove the last element from an array and update the displayed list.

// Instructions:
// 1. Create an array with the names of four animals.
const animals = ['dog', 'elephant', 'tiger', 'seal'];
// 2. Add a button to remove the last animal from the array.
// 3. Use JavaScript to remove the last animal and update the list.

const animalsList = document.getElementById('animal-list');
const removeAnimalButton = document.getElementById('remove-animal-button');

function updateAnimalList() {
    animalsList.innerHTML = "";
    animals.forEach(animal => {
        const listAnAnimal = document.createElement('li'); 
        listAnAnimal.textContent = animal;
        animalsList.appendChild(listAnAnimal);
    })
}

updateAnimalList();

removeAnimalButton.addEventListener('click', () => {
    animals.pop();
    updateAnimalList();
    console.log(animals);
});

// 5. Remove Specific Element from an Array
// Objective: Remove a specific element from an array using an input field and a button.
// Instructions:
// 1. Create an array with the names of four cities.
// 2. Add an input field and a button to the HTML.
// 3. Use JavaScript to remove the specified city from the array and update the list.