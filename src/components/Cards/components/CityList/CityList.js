import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CityElement from "./CityElement/CityElement";

export default function CityList(props) {
  const classes = useStyles();
  const { cities } = props;

  return (
    <div className={classes.container}>
      {cities.map((city, index) => (
        <CityElement key={city.ua_id} city={city} />
      ))}
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
