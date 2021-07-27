import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  resumeContainer: {
    marginTop: "20px",
    textAlign: "justify",
  },
  resultContainer: {
    background: "#ecf0f1",
    padding: "14px",
    lineHeight: "1.4em",
    borderRadius: "16px",
  },
}));

const Tab11 = ({ city }) => {
  const classes = useStyles();

  const regex = /(<([^>]+)>)/gi;
  const result = city._embedded["ua:scores"].summary.replace(regex, "");

  return (
    <div className={classes.resumeContainer}>
      <div className={classes.resultContainer}>{result}</div>
    </div>
  );
};

export default Tab11;
