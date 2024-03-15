const API_KEY = "78cc267a49b65c17c9604423c8e2a712";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const useYourlocationBtn = document.querySelectorAll(".your-location-btn");
const displayWeatherContainer = document.querySelector(".display-weather");
const grantLocationContainer = document.querySelector(".grant-location-container");
const loadingContainer = document.querySelector(".loading-container");

useYourlocationBtn[0].addEventListener("click", isAllowed)

useYourlocationBtn[1].addEventListener("click", isAllowed)

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            const userCord = {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            }

            sessionStorage.setItem("userLocation", JSON.stringify(userCord));
            fetchUserdata(userCord);
        })
    }
}

function isAllowed() {
    const userLocation = sessionStorage.getItem("userLocation");
    if(userLocation == null){
        getLocation();
    }
    else {
        fetchUserdata(JSON.parse(userLocation));
    }
}

async function fetchUserdata(data) {
    const {lat, lon} = data;

    // calling the api
    try {
        grantLocationContainer.classList.remove("active");
        loadingContainer.classList.add("active");
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        loadingContainer.classList.remove("active");
        displayWeatherContainer.classList.add("active");
        // console.log(data);
        renderdata(data);

    }catch(err){

    }
}

function renderdata(data) {

    const cityName = document.querySelector("[data-cityName]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    //fetch values from the weather info object and put it UI elements

    cityName.innerText = data?.name;
    desc.innerText = data?.weather?.[0]?.description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`;
    temp.innerText = `${data?.main?.temp} °C`;
    windspeed.innerText = `${data?.wind?.speed}m/s`;
    humidity.innerText = `${data?.main?.humidity}%`;
    cloudiness.innerText = `${data?.clouds?.all}%`;
}

const formContainer = document.querySelector("[data-searchForm]");
const input = document.querySelector("[data-searchInput]");

formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputData = input.value;
    console.log(inputData);
    if(inputData === "") return;

    fetchdata(inputData);
})

async function fetchdata(data){
    const city = data;
    console.log("Fetching weather");
    try {
        grantLocationContainer.classList.remove("active");
        loadingContainer.classList.add("active");
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        loadingContainer.classList.remove("active");
        displayWeatherContainer.classList.add("active");
        // console.log(data);
        renderdata(data);

    }catch(err){

    }
}

