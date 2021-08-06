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

const CityList = (props) => {
  const classes = useStyles();
  const {
    cities,
    favorites,
    addFavorite,
    removeFavorite,
    removeCity,
    searchCity,
  } = props;

  return (
    <div className={classes.container}>
      {cities
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
