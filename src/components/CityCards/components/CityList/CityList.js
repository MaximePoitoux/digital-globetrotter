import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CityElement from "./CityElement/CityElement";

const useStyles = makeStyles({
  container: {
    // width: "100%",
    // height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

export default function CityList(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CityElement cities={props.cities} />
    </div>
  );
}
