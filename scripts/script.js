import { getWeather } from "./weather.js";
const userInput = document.querySelector("input");
const userSubmit = document.querySelector("button");
userSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(userInput.value);
});
