import * as axios from "axios";

const apiCities = axios.create({
  baseURL:
    "https://api.teleport.org/api/urban_areas/?embed=ua:item/ua:details&embed=ua:item/ua:scores&embed=ua:item/ua:images/",
  Accept: "application/vnd.teleport.v1+json",
});

export default apiCities;
