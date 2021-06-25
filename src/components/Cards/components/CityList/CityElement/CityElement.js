import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import { IoClose } from "react-icons/io5";
import { BiHeart } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import {
  WiDaySunny,
  WiDayCloudy,
  WiDayRain,
  WiDayRainMix,
  WiDayThunderstorm,
  WiDayStormShowers,
  WiDaySnow,
  WiHot,
  WiFire,
} from "weather-icons-react";
import Gauge from "../../../../Gauge/Gauge";
import CityModal from "../../../../Modal/CityModal";

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
  climateContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 8,
    fontWeight: "bold",
    fontSize: "1.1em",
    display: "flex",
    alignItems: "center",
  },
  internetContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 10,
    fontWeight: "bold",
    fontSize: "1.1em",
    display: "flex",
    alignItems: "center",
  },
  gaugeContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    margin: 10,
  },
  housingContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 10,
    fontWeight: "bold",
    fontSize: "1.1em",
  },
});

export default function CityElement(props) {
  const classes = useStyles();
  const [isShown, setIsShown] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { city } = props;

  const handleMouseEnter = (e) => {
    return setIsShown(e.currentTarget.id);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const conditionClimateIcon = (climate) => {
    let climateIcon;

    switch (climate) {
      case "Mediterran Climate":
        climateIcon = (
          <WiDaySunny
            key={climate}
            color="white"
            style={{
              fontSize: "2.4em",
              marginRight: 4,
            }}
          />
        );
        break;
      case "Tropical Savanna Climate":
        climateIcon = (
          <WiHot
            key={climate}
            color="white"
            style={{ fontSize: "2.4em", marginRight: 4 }}
          />
        );
        break;
      case "Tropical Monsoon Climate":
        climateIcon = (
          <WiDayThunderstorm
            key={climate}
            color="white"
            style={{ fontSize: "2.2em", marginRight: 4 }}
          />
        );
        break;
      case "Tropical and Subtropical Desert Climate":
        climateIcon = (
          <WiFire
            key={climate}
            color="white"
            style={{ fontSize: "2.4em", marginRight: 4 }}
          />
        );
        break;
      case "Tropical and Subtropical Steppe Climate":
        climateIcon = (
          <WiHot
            key={climate}
            color="white"
            style={{ fontSize: "2.8em", marginRight: 2 }}
          />
        );
        break;
      case "Tropical Rainforest Climate":
        climateIcon = (
          <WiDayRain
            key={climate}
            color="white"
            style={{ fontSize: "2.4em", marginRight: 4 }}
          />
        );
        break;
      case "Humid Subtropical Climate":
        climateIcon = (
          <WiDayRainMix
            key={climate}
            color="white"
            style={{ fontSize: "2.4em", marginRight: 4 }}
          />
        );
        break;
      case "Oceanic Subtropical Highland Climate":
        climateIcon = (
          <WiDayCloudy
            key={climate}
            color="white"
            style={{ fontSize: "2.4em", marginRight: 4 }}
          />
        );
        break;
      case "Marine West Coast Climate":
        climateIcon = (
          <WiDayStormShowers
            key={climate}
            color="white"
            style={{ fontSize: "2.4em", marginRight: 4 }}
          />
        );
        break;
      case "Warm Summer Continental Climate":
        climateIcon = (
          <WiDayCloudy
            key={climate}
            color="white"
            style={{ fontSize: "2.4em", marginRight: 4 }}
          />
        );
        break;
      case "Hot Summer Continental Climate":
        climateIcon = (
          <WiDaySunny
            key={climate}
            color="white"
            style={{ fontSize: "2.4em", marginRight: 4 }}
          />
        );
        break;
      case "Continental Subarctic Climate":
        climateIcon = (
          <WiDaySnow
            key={climate}
            color="white"
            style={{ fontSize: "2.4em", marginRight: 4 }}
          />
        );
        break;
      case "Mid-Latitude Steppe and Desert Climate":
        climateIcon = (
          <WiDayCloudy
            key={climate}
            color="white"
            style={{ fontSize: "2.4em", marginRight: 4 }}
          />
        );
        break;
      default:
        climateIcon = (
          <WiDayCloudy
            key={climate}
            color="white"
            style={{ fontSize: "2.4em", marginRight: 4 }}
          />
        );
    }

    return climateIcon;
  };

  const getInternetAccess = (city) => {
    return city._embedded["ua:details"].categories
      .filter((x) => x.id === "NETWORK")
      .map((x) => Math.round(x.data[0].float_value));
  };

  const getWeatherType = (city) => {
    return city._embedded["ua:details"].categories[2].data
      .filter((x) => x.id === "WEATHER-TYPE")
      .map((x) => conditionClimateIcon(x.string_value));
  };

  const getWeatherAverageHigh = (city) => {
    return city._embedded["ua:details"].categories[2].data
      .filter((x) => x.id === "WEATHER-AVERAGE-HIGH")
      .map((x) => Math.round(x.string_value) + "°C");
  };

  return (
    <>
      <Card
        onClick={handleOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsShown(null)}
        className={classes.card}
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
                  <BiHeart size="2em" />
                </div>
              </>
            ) : null}
            <div className={classes.countryName}>{city.name}</div>
            <div className={classes.cityName}>
              {city.full_name.split(",")[1]}
            </div>
            {/* Climate */}
            <div className={classes.climateContainer}>
              {getWeatherType(city)}
              {getWeatherAverageHigh(city)}
            </div>
            {/* Internet Access */}
            <div className={classes.internetContainer}>
              <FaWifi size="1.4em" style={{ marginRight: 4 }} />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                {getInternetAccess(city)}
                <small style={{ fontSize: "0.6em" }}>Mbps</small>
              </Box>
            </div>
            {/* Global score */}
            <div className={classes.gaugeContainer}>
              <Gauge
                value={city._embedded["ua:scores"].teleport_city_score}
                className={classes.gauge}
              />
            </div>
            {/* Housing */}
            <div className={classes.housingContainer}>
              {city._embedded["ua:details"].categories[8].data[1]
                .currency_dollar_value
                ? `€${city._embedded["ua:details"].categories[8].data[2].currency_dollar_value} / mo`
                : ` € ? / mo`}
            </div>
          </CardMedia>
        </CardActionArea>
      </Card>
      <CityModal city={city} openModal={openModal} handleClose={handleClose} />
    </>
  );
}
