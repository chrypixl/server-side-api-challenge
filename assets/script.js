const apiKey = "4487b9303d1ed3329bcd012966489cc8";
const newCity = document.getElementById("cityInput");


function getInfo() {
    const queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${newCity.value}&appid=${apiKey}&units=imperial`;
    const localHeader = document.getElementById("localHeader");

    localHeader.innerHTML = newCity.value;
    
    function currentWeather(data) {
        document.getElementById("headerImg".src ="https://openweathermap.org/img/wn/" +data.list[0].weather[0].icon+".png");
        document.getElementById("headerTemp").innerHTML ="Temp: " +Number(data.list[0].main.temp).toFixed(1)+"°";
        document.getElementById("headerWind").innerHTML ="Wind: " +Number(data.list[0].wind.speed).toFixed(0)+"mph";
        document.getElementById("headerHumidity").innerHTML ="Humidity: " +Number(data.list[0].main.humidity).toFixed(0)+"%";
    };

    fetch (queryURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    
    .then(data => {
        for(let i = 0; i < 5; i++){
            document.getElementById("img" + (i + 1)).src ="https://openweathermap.org/img/wn/" +data.list[i].weather[0].icon+".png";
        }
        for(let i = 0; i < 5; i++){
            document.getElementById("day" + (i + 1) + "Temp").innerHTML ="Temp: " +Number(data.list[i].main.temp).toFixed(1)+"°";
        }
        for(let i = 0; i < 5; i++){
            document.getElementById("day" + (i + 1) + "Wind").innerHTML ="Wind: " +Number(data.list[i].wind.speed).toFixed(0)+"mph";
        }
        for(let i = 0; i < 5; i++){
            document.getElementById("day" + (i + 1) + "Humidity").innerHTML ="Humidity: " +Number(data.list[i].main.humidity).toFixed(0)+"%";
        }
        currentWeather(data);
    })
    .catch(error => {
        console.error('There was a problem with fetch:', error);
    });
};

function storeSearch(newCity) {
    const cityHistory = JSON.parse(localStorage.getItem('cities')) || [];
    if (cityHistory.includes(newCity)) {
        return;
    } else {
        cityHistory.push(newCity);
        localStorage.setItem('cities', JSON.stringify(cityHistory));
        displayCities();
    }
};

function restoreDefault() {
    document.getElementById("cityInput").defaultValue = "Houston";
    getInfo();
};

//ToDo: Make sure search history is saved to local storage.
//ToDo: Add displayCities function to display search history in sidebar.
//ToDo: Items in search history must be clickable and return new search on click.
//ToDo: You forgot to add dates to the API results in forecast cards.
//ToDo: Consolidate for loops, lines 27-38.
//!Bug fix: Weather icon does not appear on current weather card.
//!Bug fix: New issue discovered - Application will not work if using the deployed link, but works fine when opening index.html in the browser. 