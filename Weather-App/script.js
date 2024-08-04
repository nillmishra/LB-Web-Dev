const userLocation = document.querySelector('[data-userWeather]')
const searchLocation = document.querySelector('[data-searchWeather]')
const userContainer = document.querySelector(".weather-container")

const grantLoc = document.querySelector('.grantLocation')
const grantAccess = document.querySelector('[data-accessLocation]')

const formSearch = document.querySelector(".form-container")
const dataSearch = document.querySelector('[data-searchInput]')

const loadingScreen = document.querySelector('.loading-container')

const userInfoContainer = document.querySelector('.userInfo')
const city = document.querySelector('[data-cityName]')
const country = document.querySelector('[data-countryIcon]')
const weatherDescription = document.querySelector('[data-weatherDesc]')
const weatherIcon = document.querySelector('[data-weatherIcon]')
const temperature = document.querySelector('[data-temperature]')
const windspeed = document.querySelector('[data-Wind]')
const humidity = document.querySelector('[data-Humidity]')
const clouds = document.querySelector('[data-Clouds]')

const notFoundContainer = document.querySelector('.not-found-container')

let currentTab = userLocation;
const API_key = "d880cac49462a2640dcd15f3eef72fd1"
currentTab.classList.add("current-tab")
getFromSessionStorage()

function switchTab(clickedTab) {
    if (clickedTab != currentTab) {
        currentTab.classList.remove("current-tab")
        currentTab = clickedTab;
        currentTab.classList.add("current-tab")

        if (!formSearch.classList.contains("active")) {
            userInfoContainer.classList.remove("active")
            grantLoc.classList.remove("active")
            formSearch.classList.add("active")
        } else {
            formSearch.classList.remove("active")
            userInfoContainer.classList.remove("active")
            notFoundContainer.classList.remove("active")
            getFromSessionStorage();
        }
    }
}

// Checking if coordinates are present in session storage
function getFromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates")
    if (!localCoordinates) {
        grantLoc.classList.add("active")
    } else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    grantLoc.classList.remove("active")
    loadingScreen.classList.add("active")

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`);
        const data = await res.json();
        loadingScreen.classList.remove("active")
        if (res.status === 404) {
            showNotFound();
        } else {
            userInfoContainer.classList.add("active")
            renderWeatherInfo(data)
        }
    } catch (error) {
        loadingScreen.classList.remove("active")
        console.error("Error fetching weather data", error);
    }
}

function renderWeatherInfo(weatherInfo) {
    city.innerText = weatherInfo?.name;
    country.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    weatherDescription.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temperature.innerText = weatherInfo?.main?.temp;
    humidity.innerText = weatherInfo?.main?.humidity;
    windspeed.innerText = weatherInfo?.wind?.speed;
    clouds.innerText = weatherInfo?.clouds?.all;
}

function showNotFound() {
    notFoundContainer.classList.add("active");
    userInfoContainer.classList.remove("active");
}

userLocation.addEventListener("click", () => {
    switchTab(userLocation)
})

searchLocation.addEventListener("click", () => {
    switchTab(searchLocation)
})

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        console.log("No geolocation support")
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates))
    fetchUserWeatherInfo(userCoordinates)
}

grantAccess.addEventListener("click", getLocation)

formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    if (dataSearch.value === "") return;
    fetchSearchWeatherInfo(dataSearch.value)
})

async function fetchSearchWeatherInfo(city) {
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    loadingScreen.classList.add("active")
    userInfoContainer.classList.remove("active")
    grantLoc.classList.remove("active")
    notFoundContainer.classList.remove("active")

    try {
        const response = await fetch(apiUrl + city + `&appid=${API_key}`);
        const data = await response.json();
        loadingScreen.classList.remove("active")
        if (response.status === 404) {
            showNotFound();
        } else {
            userInfoContainer.classList.add("active")
            renderWeatherInfo(data)
        }
    } catch (error) {
        loadingScreen.classList.remove("active")
        console.error("Error fetching weather data", error);
    }
}
