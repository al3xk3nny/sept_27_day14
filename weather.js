let request = new XMLHttpRequest();
let APIKEY = "e8c8c39006ba750362e339465c5fc687"; //API key given to us by OpenWeatherMap.org.

function displayNicely(apiData) {
    apiData = JSON.parse(apiData);
    
    console.log(apiData); //...so that we can see the information being called in the Google Developer console.
    
    let temp = (apiData.main.temp - 273.15).toFixed(0); //Conversion of Kelvin to Celcius
    
    document.getElementById("weatherError").innerHTML = "";
    
    // let htmlString = apiData.name + " " + apiData.weather[0].description; //Get the name of the city + a space and the apiData weather array - the 0 element in the array and the description.
    
    let htmlString1 = `<img src="https://openweathermap.org/img/w/${apiData.weather[0].icon}.png">`;
    
    document.getElementById("weatherData1").innerHTML = htmlString1;
    
    let htmlString2 = `<strong>Temperature:</strong> ${temp}°C
    <br />`; //Calls variable above (cf. Kelvin to Celcius)
    htmlString2 += `<strong>Air Pressure:</strong> ${apiData.main.pressure}
    <br />`;
    htmlString2 += `<strong>Wind Speed:</strong> ${apiData.wind.speed}
    <br />`;
    htmlString2 += `<strong>Weather Description:</strong> ${apiData.weather[0].description}
    <br />`;
    
    document.getElementById("weatherData2").innerHTML = htmlString2;
    
}

function submitCity() {
    let cityName = document.getElementById("cityForm")["city"].value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + APIKEY); //Taken from OpenWeatherMap.org API documentation page - By City Name - API call (all except detail in {}). +cityName is taken from the function name. +"&APPID=" + APIKEY is included as we are using a free API and the supplier wants to track our useage so we don't overload their system.
    request.send();
}

request.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            displayNicely(this.responseText);
        } else if (this.status == 404) {
            document.getElementById("weatherError").innerHTML = "<h4>City Not Found! Please try again.</h4>";
            document.getElementById("weatherData1").innerHTML = "";
            document.getElementById("weatherData2").innerHTML = "";
        }
    }
}

