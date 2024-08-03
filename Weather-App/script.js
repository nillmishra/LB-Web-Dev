const userLoctaion = document.querySelector('[data-userWeather]')
const searchLocation = document.querySelector('[data-searchWeather]')
const userContainer = document.querySelector(".weather-container")


const grantLoc = document.querySelector('.grantLocation')
const grantAccess = document.querySelector('[data-accessLocation]')

const formSearch = document.querySelector(".form-container")
const dataSearch = document.querySelector('[data-searchInput]') 

const lodingScreen = document.querySelector('.loading-container')

const userInfoContainer = document.querySelector('.userInfo')
const city = document.querySelector('[data-cityName]')
const country = document.querySelector('[data-countyIcon]')
const weatherDescription = document.querySelector('[data-wetherDesc]')
const weatherIcon = document.querySelector('[data-weatherIcon]')
const temprature = document.querySelector('[data-temprature]')
const windspeed = document.querySelector['[data-Wind]']
const humidity = document.querySelector('[data-Humidity]')
const clouds = document.querySelector('[data-Clouds]')



let currentTab = userLoctaion;
const API_key = "d880cac49462a2640dcd15f3eef72fd1"
currentTab.classList.add("current-tab")

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab")
        currentTab = clickedTab;
        currentTab.classList.add("current-tab")

        if(!formSearch.classList.contains("active")){
            userInfoContainer.classList.remove("active")
            grantLoc.classList.remove("active")
            formSearch.classList.add("active")
        }
        else{
            formSearch.classList.remove("active")
            userInfoContainer.classList.remove("active")
            getfromSessions
            grantLoc.classList.add("active")
        }
    }
}

userLoctaion.addEventListener("click", ()=> {
    switchTab(userLoctaion)
})

searchLocation.addEventListener("click", ()=>{
    switchTab(searchLocation)
})
