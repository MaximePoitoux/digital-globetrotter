import { makeStyles } from "@material-ui/core/styles";
import { BsFillPersonFill } from "react-icons/bs";
import { GiGunshot } from "react-icons/gi";

const useStyles = makeStyles({
  safetyContainer: {
    borderRadius: "16px",
    background: "#ecf0f1",
    margin: "12px",
  },
  safetySubContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px",
  },
  gunOwnershipValue: {
    color: "#ff3f34",
    fontSize: "1em",
    fontWeight: "bold",
    marginLeft: "5px",
  },
  gunRelatedDeathsValue: {
    color: "#ff3f34",
    fontSize: "1em",
    fontWeight: "bold",
    margin: "0 5px",
  },
  iconSize: {
    fontSize: "1.5em",
    padding: "2px",
  },
});

const Tab2 = ({ city }) => {
  const classes = useStyles();

  let withoutGuns = [];
  let gunOwners = [];

  const getGunOwnership = (city) => {
    let value = city._embedded["ua:details"].categories
      .filter((category) => category.id === "SAFETY")
      .map((safety) =>
        safety.data
          .filter((x) => x.id === "GUN-OWNERSHIP")
          .map((ownership) => Math.round(ownership.int_value))
      );

    for (let i = 1; i <= 100 - value; i++) {
      withoutGuns.push(i);
    }

    for (let i = 1; i <= value; i++) {
      gunOwners.push(i);
    }

    return value;
  };

  const getGunRelatedDeaths = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "SAFETY")
      .map((safety) =>
        safety.data
          .filter((x) => x.id === "GUN-DEATH-RATE")
          .map((gunDeathRate) => gunDeathRate.int_value)
      );
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

  const getGunRelatedDeathsCitySize = (city) => {
    const millionsFormate = (value) => {
      const nf = new Intl.NumberFormat("en-IN", { minimumFractionDigits: 6 });
      return nf.format(value);
    };

    const numberWithSpaces = (value) => {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
    };

    let total = city._embedded["ua:details"].categories
      .filter((category) => category.id === "CITY-SIZE")
      .map((citySize) =>
        citySize.data
          .filter((x) => x.id === "POPULATION-SIZE")
          .map((population) =>
            numberWithSpaces(
              millionsFormate(population.float_value)
                .split(".")
                .join("")
                .replace(/^0+/, "")
            )
          )
      );

    return Math.round((total / 100000) * getGunRelatedDeaths(city));
  };

  return (
    <>
      <div className={classes.safetyContainer}>
        <div className={classes.safetySubContainer}>
          Guns per 100 residents :
          <span className={classes.gunOwnershipValue}>
            {getGunOwnership(city)}
          </span>
        </div>
        <div style={{ padding: "20px" }}>
          {withoutGuns.map((x, i) => (
            <BsFillPersonFill key={i} className={classes.iconSize} />
          ))}
          {gunOwners.map((x, i) => (
            <GiGunshot
              key={i}
              className={classes.iconSize}
              style={{ color: "#ff3f34" }}
            />
          ))}
        </div>
      </div>
      <div className={classes.safetyContainer}>
        <div
          className={classes.safetySubContainer}
          style={{ padding: "20px", flexDirection: "column" }}
        >
          <div>
            The gun death rate in {city.name} is
            <span className={classes.gunRelatedDeathsValue}>
              {getGunRelatedDeaths(city)}
            </span>
            per 100k residents every year.
          </div>
          <br></br>
          <div>
            Taking into account {city.name}'s population of
            <span className={classes.gunRelatedDeathsValue}>
              {getPopulationSize(city)}
            </span>
            it means that on average,
            <span className={classes.gunRelatedDeathsValue}>
              {getGunRelatedDeathsCitySize(city)}
            </span>
            gun death occurs every year.
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab2;
