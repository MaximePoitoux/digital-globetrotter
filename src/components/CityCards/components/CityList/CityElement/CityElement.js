import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { IoClose } from "react-icons/io5";
import { BiHeart } from "react-icons/bi";
import { Gauge } from "../../../../Gauge/Gauge";

export default function CityElement(props) {
  const [isShown, setIsShown] = useState(null);
  const classes = useStyles();

  const handleMouseEnter = (e) => {
    return setIsShown(e.currentTarget.id);
  };

  return (
    <>
      {props.cities.map((city, index) => (
        <Card
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsShown(null)}
          className={classes.card}
          key={city.ua_id}
          id={city.ua_id}
        >
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image={city._embedded["ua:images"].photos[0].image.mobile}
              title={city.name}
            >
              {isShown === city.ua_id ? (
                <>
                  <div className={classes.iconCloseContainer}>
                    <IoClose className={classes.iconClose} />
                  </div>
                  <div className={classes.iconHeartContainer}>
                    <BiHeart className={classes.iconHeart} />
                  </div>
                </>
              ) : null}
              <div className={classes.countryName}>{city.name}</div>
              <div className={classes.cityName}>
                {city.full_name.split(",")[1]}
              </div>
              <div className={classes.gaugeContainer}>
                <Gauge
                  value={city._embedded["ua:scores"].teleport_city_score}
                  className={classes.gauge}
                />
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
  iconCloseContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: "10px",
  },
  iconClose: {
    fontSize: "2.4em",
  },
  iconHeartContainer: {
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
  gaugeContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    margin: 10,
  },
});
