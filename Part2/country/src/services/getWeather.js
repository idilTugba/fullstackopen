import axios from "axios";

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const getWeather = (city) => {
  return axios
    .get(API_LINK + `q=${city}&appid=${API_KEY}`)
    .then((res) => res.data);
};

export default { getWeather };