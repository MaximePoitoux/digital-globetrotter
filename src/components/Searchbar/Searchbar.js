import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { FaSortAmountUp, FaSortAmountDownAlt } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  search: {
    height: "40px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "30px",
    backgroundColor: "rgba(238,82,83, 0.8)",
    "&:hover": {
      backgroundColor: "#ee5253",
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Searchbar = ({
  sortCitiesByScoreDescending,
  sortCitiesByScoreAscending,
}) => {
  const classes = useStyles();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        bottom: 20,
      }}
    >
      <AppBar
        position="static"
        style={{ background: "white", width: "60%", borderRadius: "30px" }}
      >
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search a city ..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div
            className={classes.search}
            style={{
              cursor: "pointer",
              width: "5ch",
              justifyContent: "center",
            }}
            onClick={sortCitiesByScoreDescending}
          >
            <FaSortAmountUp style={{ fontSize: "1.2em" }} />
          </div>
          <div
            className={classes.search}
            style={{
              cursor: "pointer",
              width: "5ch",
              justifyContent: "center",
            }}
            onClick={sortCitiesByScoreAscending}
          >
            <FaSortAmountDownAlt style={{ fontSize: "1.2em" }} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Searchbar;
