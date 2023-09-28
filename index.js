// DOM elements
const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const temperature = document.querySelector(".temperature");
const location = document.querySelector(".location");

// fetch weather data
// function getWeatherData(location) {
//     try {
//         const response = fetch("https://api.openweathermap.org/data/2.5/weather?appid=d637a1d23ddc8780815e42e6e1bc4cfa&q=kyiv&units=metric")
//         console.log(response)
//     } catch (error) {
//         console.error(error)
//         throw error
//     }
// }
// event listeners
searchBtn.addEventListener("click", () => {
    console.log("click");
  const location = input.value;
  console.log(location);
});
