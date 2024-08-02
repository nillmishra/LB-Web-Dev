const API_key = "d880cac49462a2640dcd15f3eef72fd1"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weathercheck(){
    let city_name ="goa"
    const response = await fetch(apiUrl + city_name + `&appid=${API_key}`)
    const data = await response.json();
    console.log(data)

    let newpara = document.createElement('p')
    newpara.textContent = `${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newpara)
}