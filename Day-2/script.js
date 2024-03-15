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
            fetchUserWeatherInfo(userCord);
        })
    }
}

function isAllowed() {
    const userLocation = sessionStorage.getItem("userLocation");
    if(userLocation == null){
        getLocation();
    }
    else {
        fetchUserWeatherInfo(JSON.parse(userLocation));
    }
}

async function fetchUserWeatherInfo(data) {
    const {lat, lon} = data;
    console.log(data);
    console.log("called");
    // calling the api
    try {
        grantLocationContainer.classList.remove("active");
        loadingContainer.classList.add("active");
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        loadingContainer.classList.remove("active");
        displayWeatherContainer.classList.add("active");
        // console.log(data);
        renderWeatherInfo(data);

    }catch(err){

    }
}

function renderWeatherInfo(data) {
    console.log("called");
    const cityName = document.querySelector("[data-cityName]");
    const temp = document.querySelector("[data-temp]");
    const icon = document.querySelector("[data-weatherIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const windSpeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    
    cityName.innerText = `${data?.name}`;
    temp.innerText = `${data?.main?.temp} degree`;
    icon.src = `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`
    desc.innerText = `${data?.weather[0].description}`
    windSpeed.innerText = `${data?.wind?.speed}`;
    humidity.innerText  = `${data?.main?.humidity}`;
    cloudiness.innerText = `${data?.clouds?.all}`
}

const formContainer = document.querySelector("[data-searchForm]");
const input = document.querySelector("[data-searchInput]");

formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputData = input.value;
    console.log(inputData);
    if(inputData === "") return;

    fetchWeatherInfo(inputData);
})

async function fetchWeatherInfo(data){
    const city = data;
    console.log("Fetching weather");
    try {
        grantLocationContainer.classList.remove("active");
        loadingContainer.classList.add("active");
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();

        loadingContainer.classList.remove("active");
        displayWeatherContainer.classList.add("active");
        // console.log(data);
        renderWeatherInfo(data);

    }catch(err){

    }
}

