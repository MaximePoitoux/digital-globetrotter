import { makeStyles } from "@material-ui/core/styles";
import { FaUniversity } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { GiPodium } from "react-icons/gi";
import { FaThermometerHalf } from "react-icons/fa";

const useStyles = makeStyles(() => ({
  educationContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    whiteSpace: "nowrap",
    overflowX: "hidden",
  },
  elementContainer: {
    minHeight: "20px",
    background: "white",
    width: "95%",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    padding: "10px",
    margin: "5px",
    fontSize: "0.8em",
    borderRadius: "4px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
  },
  valueContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    fontWeight: "bold",
    color: "#e17055",
  },
}));

const Tab3 = ({ city }) => {
  const classes = useStyles();

  const getPisaDetailHappiness = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "EDUCATION")
      .map((education) =>
        education.data
          .filter((x) => x.id === "PISA-DETAIL-HAPPINESS")
          .map((university) => university.percent_value)
      );
  };

  const getUniversitiesBestRankedName = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "EDUCATION")
      .map((education) =>
        education.data
          .filter((x) => x.id === "UNIVERSITIES-BEST-RANKED-NAME")
          .map((university) => university.string_value)
      );
  };

  const getUniversitiesBestRankedRank = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "EDUCATION")
      .map((education) =>
        education.data
          .filter((x) => x.id === "UNIVERSITIES-BEST-RANKED-RANK")
          .map((university) => university.int_value)
      );
  };

  const getQualityOfUniversities = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "EDUCATION")
      .map((education) =>
        education.data
          .filter((x) => x.id === "QUALITY-OF-UNIVERSITIES-TELESCORE")
          .map((university) => Math.round(university.float_value * 100) + " %")
      );
  };

  const getPisaRanking = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "EDUCATION")
      .map((education) =>
        education.data
          .filter((x) => x.id === "PISA-RANKING")
          .map((university) => university.int_value)
      );
  };

  const convertPercentage = (number) => {
    const num = Number(number);
    const roundedString = num.toFixed(2);
    const rounded = Number(roundedString) * 100;

    return rounded;
  };

  return (
    <div className={classes.educationContainer}>
      <div className={classes.elementContainer}>
        <FaSmile
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Percent of happy students
        <div className={classes.valueContainer}>
          {convertPercentage(getPisaDetailHappiness(city))} %
        </div>
      </div>
      <div className={classes.elementContainer}>
        <FaThermometerHalf
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        University Quality
        <div className={classes.valueContainer}>
          {getQualityOfUniversities(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <FaMedal
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Best University ranking
        <div className={classes.valueContainer}>
          {getUniversitiesBestRankedRank(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <GiPodium
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          PISA ranking
          <span style={{ fontSize: "0.7em" }}>
            (Programme for International Student Assessment)
          </span>
        </div>
        <div className={classes.valueContainer}>{getPisaRanking(city)}</div>
      </div>
      <div className={classes.elementContainer}>
        <FaUniversity
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Best University in ranking
        <div className={classes.valueContainer}>
          {getUniversitiesBestRankedName(city)}
        </div>
      </div>
    </div>
  );
};

export default Tab3;
