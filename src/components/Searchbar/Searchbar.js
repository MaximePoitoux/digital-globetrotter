import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
// import { FaSortAmountUp, FaSortAmountDownAlt } from "react-icons/fa";
// import { BsHouse } from "react-icons/bs";
// import { BiDollar } from "react-icons/bi";
// import { MdRefresh } from "react-icons/md";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TuneIcon from "@material-ui/icons/Tune";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles((theme) => ({
  searchbarContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
  appBar: {
    background: "white",
    width: "60%",
    borderRadius: "30px",
  },
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
      width: "40ch",
    },
  },
}));

const options = [
  "Best Scores",
  "Lower Scores",
  "Better Quality of Life",
  "Best Housing",
  "Best Safety",
  "Best Education",
  "Best Environmental Quality",
  "Best Economy",
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
  sortCitiesBySafetyDescending,
  sortCitiesByEducationDescending,
  sortCitiesByEnvironmentalQualityDescending,
  sortCitiesByEconomyDescending,
  sortCitiesByCultureDescending,
  sortCitiesByInternetAccessDescending,
  sortCitiesByToleranceDescending,
  sortCitiesByOutdoorsDescending,
}) => {
  const classes = useStyles();
  // const [filterCostOfLiving, setFilterCostOfLiving] = useState(false);

  // const setTrue = () => {
  //   if (filterCostOfLiving === true) {
  //     return sortCitiesByCostOfLifeDescending;
  //   } else if (filterCostOfLiving === false) {
  //     return sortCitiesByScoreDescending;
  //   }
  // };

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const anchorRef = useRef(null);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

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
      sortCitiesBySafetyDescending();
    } else if (index === 5) {
      sortCitiesByEducationDescending();
    } else if (index === 6) {
      sortCitiesByEnvironmentalQualityDescending();
    } else if (index === 7) {
      sortCitiesByEconomyDescending();
    } else if (index === 8) {
      sortCitiesByCultureDescending();
    } else if (index === 9) {
      sortCitiesByInternetAccessDescending();
    } else if (index === 10) {
      sortCitiesByToleranceDescending();
    } else if (index === 11) {
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

  return (
    <div className={classes.searchbarContainer}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
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
              onChange={(event) => setSearchCity(event.target.value)}
            />
          </div>
          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            aria-label="split button"
          >
            <Button
              style={{ background: "white", fontSize: "0.8em" }}
              onClick={handleClick}
            >
              {options[selectedIndex]}
            </Button>
            <Button
              style={{
                background: "#ee5253",
                color: "white",
              }}
              size="small"
              // aria-controls={open ? "split-button-menu" : undefined}
              // aria-expanded={open ? "true" : undefined}
              // aria-label="select merge strategy"
              // aria-haspopup="menu"
              onClick={handleToggle}
            >
              <TuneIcon />
            </Button>
          </ButtonGroup>
          <Popper
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
                          // disabled={index === 2}
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
          {/* <div
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
          <div
            className={classes.search}
            style={{
              cursor: "pointer",
              width: "5ch",
              position: "relative",
              justifyContent: "center",
            }}
            onClick={sortCitiesByCostOfLifeDescending}
          >
            <BsHouse style={{ fontSize: "1.7em" }} />
            <BiDollar
              style={{
                fontSize: "0.9em",
                position: "absolute",
                bottom: "11px",
              }}
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
            <MdRefresh style={{ fontSize: "1.7em" }} />
          </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Searchbar;
