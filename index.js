// constans
const apiKey = "d637a1d23ddc8780815e42e6e1bc4cfa"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather"
const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const temperature = document.querySelector(".temperature");
const city = document.querySelector(".city");
const weatherContainer = document.querySelector(".weather-container")
const img = document.querySelector(".weather-img")
const condition = document.querySelector(".condition")

// fetch weather data
async function getWeatherData(city) {
    try {
        const response = await fetch(`${apiUrl}?appid=${apiKey}&q=${city}&units=metric`)
        const data = await response.json()
        // створити тут константу weatherData яув буде об'єктом {температура локація вітер вологість}
        const weatherData = {
          temperature: Math.floor(data.main.temp), 
          wind: data.wind.speed,
          humidity: data.main.humidity,
          location: data.name,
          condition: data.weather[0].main,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        }
        
        return weatherData
    } catch (error) {
        console.error(error)
        throw error
    }
}

function updateUI(weatherData) {
  weatherContainer.style.display = "block"
  temperature.innerHTML = `${weatherData.temperature}°C <i class="fa-solid fa-temperature-three-quarters"></i>`
  wind.innerHTML = `${weatherData.wind} m/s <i class="fa-solid fa-wind"></i>`
  city.textContent = weatherData.location
  humidity.innerHTML = `${weatherData.humidity} % <i class="fa-solid fa-droplet">` 
  img.src = weatherData.icon
  condition.textContent = weatherData.condition
}
// event listeners
searchBtn.addEventListener("click", async() => {
  const location = searchBar.value;
  try {
    const weatherData = await getWeatherData(location)
    updateUI(weatherData)
  } catch (error) {
    console.error(error)
  }
});
