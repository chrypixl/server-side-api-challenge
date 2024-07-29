const apiKey = "4487b9303d1ed3329bcd012966489cc8";
const newCity = document.getElementById("cityInput");
const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getInfo() {
    const queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${newCity.value}&appid=${apiKey}&units=imperial`;
    const localHeader = document.getElementById("localHeader");

    localHeader.innerHTML = newCity.value;
    
    fetch (queryURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    
    .then(data => {
        for(let i = 0; i < 5; i++){
            document.getElementById("img" + (i + 1)).src ="https://openweathermap.org/img/wn/" +data.list[i].weather0.icon+".png";
        }
        for(let i = 0; i < 5; i++){
            document.getElementById("day" + (i + 1) + "Temp").innerHTML ="Temp:" +Number(data.list[i].main.temp).toFixed(1)+"°";
        }
        for(let i = 0; i < 5; i++){
            document.getElementById("day" + (i + 1) + "Wind").innerHTML ="Wind:" +Number(data.list[i].wind.speed).toFixed(0)+"mph";
        }
        for(let i = 0; i < 5; i++){
            document.getElementById("day" + (i + 1) + "Humidity").innerHTML ="Humidity:" +Number(data.list[i].main.humidity).toFixed(0)+"%";
        }
    })
    .catch(error => {
        console.error('There was a problem with fetch:', error);
    });
    
};

function restoreDefault() {
    document.getElementById("cityInput").defaultValue = "Houston";
    getInfo();
}

//! Correct syntax of line 22. Figure out how to correctly fetch day of week. Continue to struggle with appending elements.

/*function checkDay(day) {
    if (day +d.getDay() > 6) {
        return day +d.getDay() - 7;
    } else {
        return day +d.getDay();
    }
};

for(i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = weekday[checkDay(i)];
};*/
