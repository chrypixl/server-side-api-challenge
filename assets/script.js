function getInfo() {
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("localHeader");
    cityName.innerHTML = `${newName}`;
};

//fetch (api.openweathermap.org/data/2.5/forecast?q=`${cityName}`&appid=4487b9303d1ed3329bcd012966489cc8);


document.getElementById(cityName).addEventListener("submit", getInfo);


//api.openweathermap.org/data/2.5/forecast?lat=31.556770&lon=-97.129990&appid=4487b9303d1ed3329bcd012966489cc8;
//API Key: 4487b9303d1ed3329bcd012966489cc8