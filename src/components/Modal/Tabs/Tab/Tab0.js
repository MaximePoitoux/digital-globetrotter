import LinearProgressBarWithLabel from "../../../LinearProgressBar/LinearProgressBarWithLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  linearProgressBarContainer: {
    padding: 5,
  },
}));

const Tab0 = ({ city }) => {
  const classes = useStyles();

  return city._embedded["ua:scores"].categories.map((category) => (
    <div key={category.name} className={classes.linearProgressBarContainer}>
      <LinearProgressBarWithLabel
        name={category.name}
        value={category.score_out_of_10 * 10}
        color={category.color}
      />
    </div>
  ));
};

export default Tab0;
