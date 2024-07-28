const city = "cityInput";
const apiKey = "4487b9303d1ed3329bcd012966489cc8";
const queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${newCity.value}&appid=${apiKey}`;

function getInfo() {
    const newCity = document.getElementById("cityInput");
    const localHeader = document.getElementById("localHeader");
    localHeader.innerHTML = newCity.value;
}

fetch (queryURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })

    .then(data => {
        for(i = 0; i < 5; i++){
            document.getElementById("day" + (i + 1) + "temp").innerHTML ="temp"
        }
    })
    .catch(error => {
        console.error('There was a problem with fetch:', error);
    });

//api.openweathermap.org/data/2.5/forecast?q=houston&appid=4487b9303d1ed3329bcd012966489cc8;
//API Key: 4487b9303d1ed3329bcd012966489cc8