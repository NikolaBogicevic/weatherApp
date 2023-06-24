

const apiKey = "88daa433ef2720828eadc893be740ea4";
const temp = document.querySelector(".temperature");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const description = document.querySelector(".description");
const mainContent = document.querySelector(".main-content");
const notFound = document.querySelector(".not-found");
const card = document.querySelector(".card");

document.getElementById("button").addEventListener("click", async ()=>{
    let input = document.querySelector("input").value; 
    const weatherPicture = document.querySelector(".weather-picture");

    try{  
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`;// getting data
 
        const response = await fetch(api);

        if (!response.ok) {
            throw new Error(response.statusText);
        }
 
        if(response.status === 200){
            mainContent.style.display = "flex";
            card.style.height = "550px";
        notFound.style.display = "none";
         const city = await response.json(); 

         const temperature = city.main.temp;
         temp.innerHTML = temperature + "&#8451";

         const speed = city.wind.speed;
         windSpeed.innerHTML = speed + "Km/h <br>Wind Speed";

         const humidityValue = city.main.humidity;
        humidity.innerHTML = humidityValue + "% <br>Humidity";

        const descriptionValue = city.weather[0].description;
        description.innerHTML = descriptionValue;

        const weatherPictureValue = city.weather[0].main;

        if (weatherPictureValue === "Clear") {
            weatherPicture.src = "images/clear.png";
        } 
        else if (weatherPictureValue === "Clouds") {
            weatherPicture.src = "images/cloud.png";
        } 
        else if (weatherPictureValue === "Mist") {
            weatherPicture.src = "images/mist.png";
        } 
        else if (weatherPictureValue === "Rain") {
            weatherPicture.src = "images/rain.png";
        } 
        else if (weatherPictureValue === "Snow") {
            weatherPicture.src = "images/snow.png";
        } 

     }}catch(err){  
        if(input === "") return alert("Please enter a valid city!"); 

        card.style.height = "550px";
        mainContent.style.display = "none";
        notFound.style.display = "flex";
     }
 
 } )