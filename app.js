let input = document.getElementById("input").value;

const apiKey = "88daa433ef2720828eadc893be740ea4";


document.getElementById("button").addEventListener("click", async ()=>{
    console.dir(document.getElementById("input"))
    try{ const api = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${apiKey}`;
 
     const response = await fetch(api);
 
     if(response.status === 200){
         const cities = await response.json();
         const city = cities.filter((city) => city.name === "Serbia")
        //  console.log(input)
     }}catch(err){
         console.log(err)
     }
 
 } )