import { makeStyles } from "@material-ui/core/styles";
import { BiWorld } from "react-icons/bi";
import { IoFlag } from "react-icons/io5";

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
    </div>
  );
};

export default Tab7;
