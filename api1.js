let xhr = new XMLHttpRequest();

function displayNicely(apiData) {
    apiData = JSON.parse(apiData);
    let htmlString = `<strong>Name:</strong> ${apiData.name}
    <br />`;
    htmlString += `<strong>Height:</strong> ${apiData.height}
    <br />`;
    htmlString += `<strong>Weight:</strong> ${apiData.mass}
    <br />`;
    htmlString += `<strong>Hair Colour:</strong> ${apiData.hair_color}
    <br />`;
    htmlString += `<strong>Skin Colour:</strong> ${apiData.skin_color}
    <br />`;
    htmlString += `<strong>Eye Colour:</strong> ${apiData.eye_color}
    <br />`;
    htmlString += `<strong>Gender:</strong> ${apiData.gender}`;
    
    document.getElementById("returnedData").innerHTML = htmlString;
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //Checking to see if the ready state is equal to 4 (Done - see 5 states of ready state - 0 to 4) and the information that comes back is equal to 200 (200 is a http status code - as is 404 error etc.).
        // document.getElementById("returnedData").innerHTML = this.responseText;
        displayNicely(this.responseText); //...above line now using the 'displayNicely' function.
    }
}

xhr.open("GET", "https://swapi.co/api/people/1"); 

xhr.send(); 