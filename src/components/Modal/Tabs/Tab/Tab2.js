import { makeStyles } from "@material-ui/core/styles";
import { BsFillPersonFill } from "react-icons/bs";
import { GiGunshot } from "react-icons/gi";

const useStyles = makeStyles({
  gunOwnershipContainer: {
    borderRadius: "16px",
    background: "#ecf0f1",
    margin: "20px",
  },
  gunOwnershipSubContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px",
  },
  gunOwnershipValue: {
    color: "#ff3f34",
    fontSize: "1.4em",
    fontWeight: "bold",
    marginLeft: "10px",
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

  return (
    <div className={classes.gunOwnershipContainer}>
      <div className={classes.gunOwnershipSubContainer}>
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
  );
};

export default Tab2;
