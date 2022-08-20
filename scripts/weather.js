import keys from "../scripts/apikeys.js";

const openWeatherKey = keys.openweather;
const weatherToday = document.querySelector(".today");

async function getWeather(input) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${openWeatherKey}&units=metric`
  );
  const json = await response.json();
  const cityData = {
    name: json.name,
    country: json.sys.country,
    wind: json.wind.speed,
    temperature: json.main.temp,
    feelsLike: json.main.feels_like,
    weather: { main: json.weather[0].main, desc: json.weather[0].description },
  };
  console.log(cityData);
  weatherToday.children[0].innerHTML = "City: " + cityData.name;
  weatherToday.children[1].innerHTML = "Country: " + cityData.country;
  weatherToday.children[2].innerHTML =
    "Temperature: " + cityData.temperature.toFixed(2);
  weatherToday.children[3].innerHTML = "Feels Like: " + cityData.feelsLike;
  weatherToday.children[4].innerHTML = "Wind: " + cityData.wind;
}

async function weatherDom(cityData) {
  const city = await getWeather(cityData);
  return (weatherToday.innerHTML = `${city.name}`);
}

export { getWeather, weatherDom };
