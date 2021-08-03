import { makeStyles } from "@material-ui/core/styles";
import { BiWorld } from "react-icons/bi";
import { IoFlag, IoRocketSharp, IoWater, IoMan, IoTime } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaWifi, FaSmog, FaTrafficLight } from "react-icons/fa";
import { HiSpeakerphone, HiCurrencyDollar } from "react-icons/hi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BsPeopleFill, BsLaptop } from "react-icons/bs";
import { GiLifeBar, GiBroom, GiPistolGun } from "react-icons/gi";
import { CgTrees } from "react-icons/cg";
import { MdLocalAirport } from "react-icons/md";
import { GiAngelWings, GiTakeMyMoney } from "react-icons/gi";

const useStyles = makeStyles(() => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.3em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#ecf0f1",
    },
  },
  digitalGlobetrotterGuideContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
    whiteSpace: "nowrap",
    height: "500px",
  },
  elementContainer: {
    width: "95%",
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

  const getCleanliness = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "POLLUTION")
      .map(
        (pollution) =>
          pollution.data
            .filter((p) => p.id === "CLEANLINESS-TELESCORE")
            .map((cleanliness) => Math.round(cleanliness.float_value * 100)) +
          " %"
      );
  };

  const getDrinkingWaterQuality = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "POLLUTION")
      .map(
        (pollution) =>
          pollution.data
            .filter((p) => p.id === "DRINKING-WATER-QUALITY-TELESCORE")
            .map((cleanliness) => Math.round(cleanliness.float_value * 100)) +
          " %"
      );
  };

  const getUrbanGreenery = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "POLLUTION")
      .map(
        (pollution) =>
          pollution.data
            .filter((p) => p.id === "URBAN-GREENERY-TELESCORE")
            .map((cleanliness) => Math.round(cleanliness.float_value * 100)) +
          " %"
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
      const num = Number(number);
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

  const getMedianAgeInCountry = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "INTERNAL")
      .map((internal) =>
        internal.data
          .filter((i) => i.id === "MEDIAN-AGE")
          .map((age) => age.float_value)
      );
  };

  const getLifeExpectancyAtbirthInCountry = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "INTERNAL")
      .map((internal) =>
        internal.data
          .filter((i) => i.id === "LIFE-EXPECTANCY")
          .map((expectancy) => expectancy.float_value)
      );
  };

  const getCrimeRate = (city) => {
    const rounded2DigitsComma = (number) => {
      const num = Number(number);
      const roundedString = num.toFixed(1);
      const rounded = Number(roundedString);

      return rounded;
    };

    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "SAFETY")
      .map((safety) =>
        safety.data
          .filter((s) => s.id === "CRIME-RATE-TELESCORE")
          .map((crime) => rounded2DigitsComma(crime.float_value))
      );
  };

  const getTotalStartups = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "STARTUPS")
      .map((startups) =>
        startups.data
          .filter((s) => s.id === "FUNDERBEAM-TOTAL-STARTUPS")
          .map((total) => total.int_value)
      );
  };

  const getCoworkingSpaces = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "STARTUPS")
      .map((startups) =>
        startups.data
          .filter((s) => s.id === "WORKFROM-COWORKING-SPACES-COUNT")
          .map((count) => count.int_value)
      );
  };

  const getTrafficHandling = (city) => {
    const rounded2DigitsComma = (number) => {
      const num = Number(number);
      const roundedString = num.toFixed(1);
      const rounded = Number(roundedString);

      return rounded;
    };

    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "TRAFFIC")
      .map((traffic) =>
        traffic.data
          .filter((t) => t.id === "TRAFFIC-INDEX-TELESCORE")
          .map((traffic) => rounded2DigitsComma(traffic.float_value))
      );
  };

  const getAirporthub = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "TRAVEL-CONNECTIVITY")
      .map((travel) =>
        travel.data
          .filter((t) => t.id === "AIRPORT-HUB-INDEX-DETAIL")
          .map((hub) => hub.int_value)
      );
  };

  const getBusinessFreedom = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "BUSINESS-FREEDOM")
      .map((business) =>
        business.data
          .filter((b) => b.id === "BUSINESS-FREEDOM")
          .map((freedom) => freedom.float_value)
      );
  };

  const getFreedomFromCorruption = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "BUSINESS-FREEDOM")
      .map((business) =>
        business.data
          .filter((b) => b.id === "CORRUPTION-FREEDOM")
          .map((corruption) => corruption.float_value)
      );
  };

  const getTimeToOpenBusiness = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "BUSINESS-FREEDOM")
      .map((business) =>
        business.data
          .filter((b) => b.id === "TIME-TO-OPEN-BUSINESS")
          .map((open) => open.float_value)
      );
  };

  return (
    <div className={classes.digitalGlobetrotterGuideContainer}>
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
        <GiBroom
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Cleanliness
        <div className={classes.valueContainer}>{getCleanliness(city)}</div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <IoWater
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Drinking water quality
        <div className={classes.valueContainer}>
          {getDrinkingWaterQuality(city)}
        </div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <CgTrees
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Urban greenery
        <div className={classes.valueContainer}>{getUrbanGreenery(city)}</div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
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
      <div className={classes.elementContainer} style={{ background: "white" }}>
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
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
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
      <div className={classes.elementContainer} style={{ background: "white" }}>
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
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <IoMan
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Median age in country
        <div className={classes.valueContainer}>
          {getMedianAgeInCountry(city)}
        </div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <GiLifeBar
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Life expectancy at birth in country
        <div className={classes.valueContainer}>
          {getLifeExpectancyAtbirthInCountry(city)}
        </div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <GiPistolGun
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Crime rate
        <div className={classes.valueContainer}>{getCrimeRate(city)}</div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <IoRocketSharp
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Total number of startups
        <div className={classes.valueContainer}>{getTotalStartups(city)}</div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <BsLaptop
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Coworking spaces
        <div className={classes.valueContainer}>{getCoworkingSpaces(city)}</div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <FaTrafficLight
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Traffic handling
        <div className={classes.valueContainer}>{getTrafficHandling(city)}</div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <MdLocalAirport
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Airport hub
        <div className={classes.valueContainer}>{getAirporthub(city)}</div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <GiAngelWings
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Business freedom
        <div className={classes.valueContainer}>
          {getBusinessFreedom(city)}/100
        </div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <GiTakeMyMoney
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Freedom from corruption
        <div className={classes.valueContainer}>
          {getFreedomFromCorruption(city)}/100
        </div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <IoTime
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Time to open a business
        <div className={classes.valueContainer}>
          {getTimeToOpenBusiness(city)}
        </div>
      </div>
    </div>
  );
};

export default Tab7;
