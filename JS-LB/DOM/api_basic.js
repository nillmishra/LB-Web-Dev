const API_key = "d880cac49462a2640dcd15f3eef72fd1"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function renderWeatherInfo(data){
    let newpara = document.createElement('p')
    newpara.textContent = `${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newpara)
}

async function weathercheck(){
    let city_name ="goa"
    const response = await fetch(apiUrl + city_name + `&appid=${API_key}`)
    const data = await response.json();
    console.log(data)

    renderWeatherInfo(data)
}


async function getWeather(){
    try {
        const lat = 23.7214909
        const lon = 86.9523857
        
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
        let output = await result.json();
        
        console.log(output);
    } catch (err) {
        console.log("Error Found bada wala", err);
    }
}


function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        console.log("No geoLocation Support")
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
}