import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { BiHeart } from "react-icons/bi";

export default function CityElement(props) {
  const [isShown, setIsShown] = useState(false);
  const classes = useStyles();

  return (
    <>
      {props.cities.map((city, index) => (
        <Card
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className={classes.card}
          key={city + index}
        >
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image={city._embedded["ua:images"].photos[0].image.mobile}
              title={city.name}
            >
              {isShown ? (
                <div className={classes.iconContainer}>
                  <BiHeart className={classes.iconHeart} />
                </div>
              ) : null}
              <div className={classes.countryName}>{city.name}</div>
              <div className={classes.cityName}>
                {city.full_name.split(",")[1]}
              </div>
            </CardMedia>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

const useStyles = makeStyles({
  card: {
    minWidth: 250,
    maxHeight: 350,
    margin: "10px",
  },
  cardMedia: {
    height: 250,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  cityName: {
    fontWeight: "bold",
  },
  countryName: {
    fontWeight: "bold",
    fontSize: "1.2em",
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(2px)",
    borderRadius: "50%",
    height: "35px",
    width: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  },
  iconHeart: {
    fontSize: "2em",
  },
});
