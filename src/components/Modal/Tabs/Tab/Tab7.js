import { makeStyles } from "@material-ui/core/styles";
import { BiTimeFive } from "react-icons/bi";
import { IoRainySharp } from "react-icons/io5";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaCloudSunRain } from "react-icons/fa";

const useStyles = makeStyles(() => ({
  climateContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
  elementContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    padding: "10px",
    fontSize: "0.8em",
  },
  valueContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    fontWeight: "bold",
    color: "#e17055",
  },
}));

const Tab7 = ({ city }) => {
  const classes = useStyles();

  const getWeatherAverageDayLength = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CLIMATE")
      .map((climate) =>
        climate.data
          .filter((c) => c.id === "WEATHER-AV-DAY-LENGTH")
          .map((weatherAverageDayLength) => weatherAverageDayLength.float_value)
      );
  };

  const getWeatherAverageHigh = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CLIMATE")
      .map((climate) =>
        climate.data
          .filter((c) => c.id === "WEATHER-AVERAGE-HIGH")
          .map((weatherAverageHigh) => weatherAverageHigh.string_value)
      );
  };

  const getWeatherAverageLow = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CLIMATE")
      .map((climate) =>
        climate.data
          .filter((c) => c.id === "WEATHER-AVERAGE-LOW")
          .map((weatherAverageLow) => weatherAverageLow.string_value)
      );
  };

  const getWeatherSunshineAmount = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CLIMATE")
      .map((climate) =>
        climate.data
          .filter((c) => c.id === "WEATHER-SUNSHINE-AMOUNT")
          .map((weatherSunshineAmount) => weatherSunshineAmount.float_value)
      );
  };

  const getWeatherType = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CLIMATE")
      .map((climate) =>
        climate.data
          .filter((c) => c.id === "WEATHER-TYPE")
          .map((weatherType) => weatherType.string_value)
      );
  };

  const getWeatherAverageNumberRainyDays = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CLIMATE")
      .map((climate) =>
        climate.data
          .filter((c) => c.id === "WEATHER-AV-NUMBER-RAINY-DAYS")
          .map(
            (weatherAverageNumberRainyDays) =>
              weatherAverageNumberRainyDays.float_value
          )
      );
  };

  return (
    <div className={classes.climateContainer}>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1", marginTop: "10px" }}
      >
        <BiTimeFive
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Average day length (hours)
        <div className={classes.valueContainer}>
          {getWeatherAverageDayLength(city)} H
        </div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <FaTemperatureHigh
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Average high temperature (Celsius)
        <div className={classes.valueContainer}>
          {getWeatherAverageHigh(city)} °C
        </div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <FaTemperatureLow
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Average low temperature (Celsius)
        <div className={classes.valueContainer}>
          {getWeatherAverageLow(city)} °C
        </div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <FaSun
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Average daily solar radiation (Mj/m²)
        <div className={classes.valueContainer}>
          {getWeatherSunshineAmount(city)} Mj/m²
        </div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <FaCloudSunRain
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Weather type
        <div className={classes.valueContainer}>{getWeatherType(city)}</div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <IoRainySharp
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Average number of rainy days per year
        <div className={classes.valueContainer}>
          {getWeatherAverageNumberRainyDays(city)}
        </div>
      </div>
    </div>
  );
};

export default Tab7;
