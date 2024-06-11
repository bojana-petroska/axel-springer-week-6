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
    addColors.value = "";
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
const cities = ['Skopje', 'Berlin', 'Istanbul', 'Belgrade'];
// 2. Add an input field and a button to the HTML.
// 3. Use JavaScript to remove the specified city from the array and update the list.

const cityList = document.getElementById('city-list');
const cityInput = document.getElementById('city-input');
const removeACity = document.getElementById('city-button');
const positionInput = document.getElementById('position-input');
const addACityButton = document.getElementById('city-button-add');

function updateCityList() {
    cityList.innerHTML = "";
    cities.forEach(city => {
        const listACity = document.createElement('li'); 
        listACity.textContent = city;
        cityList.appendChild(listACity);
    })
}

updateCityList();

removeACity.addEventListener('click', () => {
    const cityToDelete = cityInput.value;
    const indexOfACity = cities.indexOf(cityToDelete);

    if (indexOfACity !== -1) {
        cities.splice(indexOfACity, 1);
        console.log(cities);
        updateCityList();
    }

    cityInput.value = "";

})

addACityButton.addEventListener('click', () => {
    const newCityAdded = positionInput.value;
    cities.splice(2, 0, newCityAdded);

    console.log(newCityAdded);
    updateCityList();
    positionInput.value = '';
})


//Task 7: Filter Array Elements by Genre

const movies = [
    {
        title: "The Shawshank Redemption",
        genre: "Drama"
    },
    {
        title: "The Godfather",
        genre: "Crime"
    },
    {
        title: "The Dark Knight",
        genre: "Action"
    },
    {
        title: "Pulp Fiction",
        genre: "Crime"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        genre: "Fantasy"
    },
    {
        title: "Forrest Gump",
        genre: "Drama"
    },
    {
        title: "Fight Club",
        genre: "Drama"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction"
    },
    {
        title: "Jurassic Park",
        genre: "Adventure"
    },
    {
        title: "Titanic",
        genre: "Romance"
    }
];

const moviesList = document.getElementById('movies-list');
const dropdownMenu = document.getElementById('select-movie');

function listTheMovies(filteredMovies) {
    moviesList.innerHTML = '';

    filteredMovies.forEach(movie => {
        const listAMovie = document.createElement('li');
        listAMovie.textContent = `${movie.title} --- ${movie.genre}`;
        moviesList.appendChild(listAMovie);
    });
}

listTheMovies(movies);

function filterMoviesByGenre(selectedGenre) {
    const filteredMovies = movies.filter(movie => movie.genre === selectedGenre);
    return filteredMovies;
}

dropdownMenu.addEventListener('change', () => {
    const selectedGenre = dropdownMenu.value;
    const filteredMovies = filterMoviesByGenre(selectedGenre);
    listTheMovies(filteredMovies);
    console.log('bo');
})


//Task 8: Sort Array Elements

const sports = ['Handball', 'Running', 'Yoga', 'Swimming', 'Gymnastics', 'Bouldering', 'Skiing', 'Surfing', 'Cycling'];

const sportsDisplayed = document.getElementById('sport-list');
const ascendingSports = document.getElementById('sort-ascending');
const descendingSports = document.getElementById('sort-descending');

function listTheSports() {
    sportsDisplayed.innerHTML = "";
    
    sports.forEach(sport => {
        const listASport = document.createElement('li');
        listASport.textContent = sport;
        sportsDisplayed.appendChild(listASport);
    })
}

listTheSports();

ascendingSports.addEventListener('click', () => {
    const sortedAscending = sports.sort();
    listTheSports(sortedAscending);
    console.log(sortedAscending)
});

descendingSports.addEventListener('click', () => {
    const sortedAscending = sports.sort();
    const sortedDescending = sortedAscending.reverse();
    listTheSports(sortedDescending);

})


