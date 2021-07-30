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
  },
  elementContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    padding: "10px",
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
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1", marginTop: "10px" }}
      >
        <FaSmile
          style={{
            marginRight: "10px",
            fontSize: "1.2em",
            minWidth: "40px",
          }}
        />
        Percent of happy students
        <div className={classes.valueContainer}>
          {convertPercentage(getPisaDetailHappiness(city))} %
        </div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <FaThermometerHalf
          style={{
            marginRight: "10px",
            fontSize: "1.3em",
            minWidth: "40px",
          }}
        />
        University Quality
        <div className={classes.valueContainer}>
          {getQualityOfUniversities(city)}
        </div>
      </div>
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <FaMedal
          style={{
            marginRight: "10px",
            fontSize: "1.3em",
            minWidth: "40px",
          }}
        />
        Best University ranking
        <div className={classes.valueContainer}>
          {getUniversitiesBestRankedRank(city)}
        </div>
      </div>
      <div className={classes.elementContainer} style={{ background: "white" }}>
        <GiPodium
          style={{
            marginRight: "10px",
            fontSize: "1.5em",
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
      <div
        className={classes.elementContainer}
        style={{ background: "#ecf0f1" }}
      >
        <FaUniversity
          style={{
            marginRight: "10px",
            fontSize: "1.3em",
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
