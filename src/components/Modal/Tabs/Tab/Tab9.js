import { makeStyles } from "@material-ui/core/styles";
import { FaBaby } from "react-icons/fa";

const useStyles = makeStyles(() => ({
  lgbtContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
    whiteSpace: "nowrap",
    height: "500px",
    overflowX: "hidden",
  },
  elementContainer: {
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
    fontSize: "0.8em",
  },
}));

const Tab9 = ({ city }) => {
  const classes = useStyles();

  const getJobs_Salaries = (city) => {
    return city._embedded["ua:salaries"].salaries.map((salary) => {
      const job = salary.job.title;
      const medianSalary =
        Math.round(
          (salary.salary_percentiles.percentile_25 +
            salary.salary_percentiles.percentile_50 +
            salary.salary_percentiles.percentile_75) /
            3
        ) + " $";

      return (
        <div key={job} className={classes.elementContainer}>
          <FaBaby
            style={{
              marginRight: "10px",
              fontSize: "1.4em",
              minWidth: "40px",
            }}
          />
          {job}
          <div className={classes.valueContainer}>{medianSalary}</div>
        </div>
      );
    });
  };

  return <div className={classes.lgbtContainer}>{getJobs_Salaries(city)}</div>;
};

export default Tab9;
