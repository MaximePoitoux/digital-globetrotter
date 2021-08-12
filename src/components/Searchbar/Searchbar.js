import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TuneIcon from "@material-ui/icons/Tune";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { MdRefresh } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  searchbarContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
  },
  subSearchbarContainer: {
    background: "white",
    width: "30%",
    borderRadius: "4px",
    marginRight: "20px",
  },
  inputContainer: {
    height: "40px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    color: "black",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  searchIconContainer: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgb(238, 82, 83)",
  },
  refreshIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "20px",
    cursor: "pointer",
    borderRadius: "4px",
    width: "50px",
    height: "50px",
    background: "rgb(238, 82, 83)",
  },
}));

const options = [
  "High Scores",
  "Low Scores",
  "Best Cost of Living",
  "Best Housing",
  "Best Commute",
  "Best Safety",
  "Best Healthcare",
  "Best Education",
  "Best Environmental Quality",
  "Best Economy",
  "Best Business Freedom",
  "Best Culture",
  "Best Internet Access",
  "Best Tolerance",
  "Best Outdoors",
];

const Searchbar = ({
  setSearchCity,
  sortCitiesByScoreDescending,
  sortCitiesByScoreAscending,
  sortCitiesByCostOfLifeDescending,
  sortCitiesByHousingDescending,
  sortCitiesByCommuteDescending,
  sortCitiesBySafetyDescending,
  sortCitiesByHealthcareDescending,
  sortCitiesByEducationDescending,
  sortCitiesByEnvironmentalQualityDescending,
  sortCitiesByEconomyDescending,
  sortCitiesByBusinessFreedomDescending,
  sortCitiesByCultureDescending,
  sortCitiesByInternetAccessDescending,
  sortCitiesByToleranceDescending,
  sortCitiesByOutdoorsDescending,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const anchorRef = useRef(null);

  const handleMenuItemClick = (event, index) => {
    if (index === 0) {
      sortCitiesByScoreDescending();
    } else if (index === 1) {
      sortCitiesByScoreAscending();
    } else if (index === 2) {
      sortCitiesByCostOfLifeDescending();
    } else if (index === 3) {
      sortCitiesByHousingDescending();
    } else if (index === 4) {
      sortCitiesByCommuteDescending();
    } else if (index === 5) {
      sortCitiesBySafetyDescending();
    } else if (index === 6) {
      sortCitiesByHealthcareDescending();
    } else if (index === 7) {
      sortCitiesByEducationDescending();
    } else if (index === 8) {
      sortCitiesByEnvironmentalQualityDescending();
    } else if (index === 9) {
      sortCitiesByEconomyDescending();
    } else if (index === 10) {
      sortCitiesByBusinessFreedomDescending();
    } else if (index === 11) {
      sortCitiesByCultureDescending();
    } else if (index === 12) {
      sortCitiesByInternetAccessDescending();
    } else if (index === 13) {
      sortCitiesByToleranceDescending();
    } else if (index === 14) {
      sortCitiesByOutdoorsDescending();
    }

    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const resetFilter = () => {
    setSelectedIndex(0);
    setSearchCity("");
    sortCitiesByScoreDescending();
  };

  return (
    <div className={classes.searchbarContainer}>
      <AppBar className={classes.subSearchbarContainer} position="static">
        <Toolbar style={{ minHeight: 50, padding: 0 }}>
          <div className={classes.inputContainer}>
            <div className={classes.searchIconContainer}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search a city ..."
              className={classes.input}
              onChange={(event) => setSearchCity(event.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex" }}>
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
          style={{ height: "50px" }}
        >
          <Button
            style={{
              background: "white",
              fontSize: "0.8em",
              color: "black",
            }}
            disabled
          >
            {options[selectedIndex]}
          </Button>
          <Button
            style={{
              background: "#ee5253",
              color: "white",
            }}
            size="small"
            onClick={handleToggle}
          >
            <TuneIcon />
          </Button>
        </ButtonGroup>
        <Popper
          style={{ zIndex: 2 }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                marginTop: "10px",
                height: "150px",
                overflow: "scroll",
                overflowX: "hidden",
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <div className={classes.refreshIconContainer} onClick={resetFilter}>
          <MdRefresh style={{ fontSize: "1.6em", color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
