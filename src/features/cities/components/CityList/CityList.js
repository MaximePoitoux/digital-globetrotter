import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CityElement from "./CityElement/CityElement";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const CityList = ({
  cities,
  favorites,
  addFavorite,
  removeFavorite,
  removeCity,
  searchCity,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {cities
        /* eslint-disable-next-line */
        .filter((city) => {
          if (searchCity === "") {
            return city;
          } else if (
            city.name.toLowerCase().includes(searchCity.toLowerCase())
          ) {
            return city;
          }
        })
        .map((city, index) => (
          <CityElement
            key={city.ua_id}
            city={city}
            isFavorite={favorites.includes(city.ua_id)}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            removeCity={removeCity}
          />
        ))}
    </div>
  );
};

export default CityList;
