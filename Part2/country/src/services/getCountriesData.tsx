import axios from "axios";
const API_LINK = "https://studies.cs.helsinki.fi/restcountries";

const getCountries = () => {
  return axios.get(API_LINK + "/api/all").then((res) => res.data);
};

const getCountry = (name) => {
  return axios.get(API_LINK + "/api/name/" + name).then((res) => res.data);
};

export default { getCountries, getCountry };
