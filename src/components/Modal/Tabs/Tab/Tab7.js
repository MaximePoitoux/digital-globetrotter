import { makeStyles } from "@material-ui/core/styles";
import { BiWorld } from "react-icons/bi";
import { IoFlag } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { FaSmog } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";

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

  const getContinent = (city) => {
    return city.continent;
  };

  const getCountry = (city) => {
    return city.full_name.split(",")[1];
  };

  const getPopulationSize = (city) => {
    const millionsFormate = (value) => {
      const nf = new Intl.NumberFormat("en-IN", { minimumFractionDigits: 6 });
      return nf.format(value);
    };

    const numberWithSpaces = (value) => {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CITY-SIZE")
      .map((citySize) =>
        citySize.data
          .filter((x) => x.id === "POPULATION-SIZE")
          .map((population) =>
            numberWithSpaces(
              millionsFormate(population.float_value)
                .split(".")
                .join(" ")
                .replace(/^0+/, "")
            )
          )
      );
  };

  const getInternetSpeed = (city) => {
    return city._embedded["ua:details"].categories
      .filter((x) => x.id === "NETWORK")
      .map((x) => Math.round(x.data[0].float_value));
  };

  const getAirQuality = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "POLLUTION")
      .map((pollution) =>
        pollution.data
          .filter((p) => p.id === "AIR-POLLUTION-TELESCORE")
          .map((air) => Math.round(air.float_value * 100) + " %")
      );
  };

  const getSpokenLanguages = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "LANGUAGE")
      .map((language) =>
        language.data
          .filter((l) => l.id === "SPOKEN-LANGUAGES")
          .map((languages) => languages.string_value)
      );
  };

  const getCurrency = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "ECONOMY")
      .map((economy) =>
        economy.data
          .filter((e) => e.id === "CURRENCY-URBAN-AREA")
          .map((currency) => currency.string_value)
      );
  };

  const getCurrencyExchangeRate = (city) => {
    const rounded2DigitsComma = (number) => {
      const num = Number(number); // The Number() only visualizes the type and is not needed
      const roundedString = num.toFixed(1);
      const rounded = Number(roundedString);

      return rounded;
    };

    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "ECONOMY")
      .map((economy) =>
        economy.data
          .filter((e) => e.id === "CURRENCY-URBAN-AREA-EXCHANGE-RATE")
          .map((currency) => rounded2DigitsComma(currency.float_value))
      );
  };

  const getGdpPerCapita = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "ECONOMY")
      .map((economy) =>
        economy.data
          .filter((e) => e.id === "GDP-PER-CAPITA")
          .map(
            (gdp) =>
              Math.round(gdp.currency_dollar_value).toLocaleString() + " $"
          )
      );
  };

  return (
    <div className={classes.climateContainer}>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1", marginTop: "10px" }}
      >
        <BiWorld
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Continent
        <div className={classes.valueContainer}>{getContinent(city)}</div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <IoFlag
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Country
        <div className={classes.valueContainer}>{getCountry(city)}</div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <IoIosPeople
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Population
        <div className={classes.valueContainer}>
          {getPopulationSize(city)} people
        </div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <FaWifi
          style={{
            marginRight: "10px",
            fontSize: "1.1em",
            minWidth: "40px",
          }}
        />
        Internet speed
        <div className={classes.valueContainer}>
          {getInternetSpeed(city)} Mbps
        </div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <FaSmog
          style={{
            marginRight: "10px",
            fontSize: "1.1em",
            minWidth: "40px",
          }}
        />
        Air quality
        <div className={classes.valueContainer}>{getAirQuality(city)}</div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <HiSpeakerphone
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Spoken languages
        <div className={classes.valueContainer}>{getSpokenLanguages(city)}</div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <HiCurrencyDollar
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Currency
        <div className={classes.valueContainer}>{getCurrency(city)}</div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <RiExchangeDollarFill
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Currency exchange rate per US dollar for urban area
        <div className={classes.valueContainer}>
          {getCurrencyExchangeRate(city)} {getCurrency(city)}
        </div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <BsPeopleFill
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        GDP per capita
        <div className={classes.valueContainer}>{getGdpPerCapita(city)}</div>
      </div>
    </div>
  );
};

export default Tab7;
