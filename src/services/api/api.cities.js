import * as axios from "axios";

const apiCities = axios.create({
  baseURL: "https://api.teleport.org/api/cities/",
});

export default apiCities;
