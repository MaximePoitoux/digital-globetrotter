import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteElement from "./FavoriteElement/FavoriteElement";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const FavoriteList = (props) => {
  const classes = useStyles();
  const { favorites, removeFavorite } = props;

  return (
    <div className={classes.container}>
      {favorites.map((f, index) => (
        <FavoriteElement
          key={f.ua_id}
          favorites={f}
          removeFavorite={removeFavorite}
        />
      ))}
    </div>
  );
};

export default FavoriteList;
