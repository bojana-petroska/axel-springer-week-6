let cityPopulations = new Map();

cityPopulations.set('New York', 841990)
cityPopulations.set('Barcelona', 841990)
cityPopulations.set('Chicago', 841990)
cityPopulations.set('Phoenix', 841990)
cityPopulations.set('London', 841990)

let cityDataDiv = document.getElementById('city-data');

let cityInput = document.getElementById('city-input');
let populationInput = document.getElementById('population-input');

function addCity() {
    const city = cityInput.value.trim();
    const population = parseInt(populationInput.value);

    if (city && !isNaN(population)) {
        cityPopulations.set(city, population);
        updateCityData();
        cityInput.value = '';
        populationInput.value = '';
    } else {
        alert('please enter valid infos')
    } 
    console.log(city);
    console.log(population);
}

function updateCityData() {
    cityDataDiv.innerHTML = '';
    
    cityPopulations.forEach((population, city) => {
        cityDataDiv.innerHTML += `<p>${city}: ${population} people.</p>`
    });
}


