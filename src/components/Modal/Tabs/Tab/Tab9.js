import { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles(() => ({
  salariesContainer: {
    height: 500,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "40px",
  },
}));

const Tab9 = ({ city }) => {
  const classes = useStyles();

  const jobsArray = [];
  const salaryArray = [];

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [salary, setSalary] = useState("");
  useEffect(() => {
    const fetchFirstElement = () => {
      return setSalary(salaryArray[0]);
    };
    fetchFirstElement();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const anchorRef = useRef(null);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    setSalary(salaryArray.find((el, i) => i === index));
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

  const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const getJobs_Salaries = (city) => {
    city._embedded["ua:salaries"].salaries.map((salary, index) => {
      jobsArray.push(salary.job.title);
      salaryArray.push(
        numberWithSpaces(
          Math.round(
            (salary.salary_percentiles.percentile_25 +
              salary.salary_percentiles.percentile_50 +
              salary.salary_percentiles.percentile_75) /
              3
          )
        )
      );

      return null;
    });

    return (
      <div className={classes.salariesContainer}>
        <div style={{ marginBottom: 60 }}>
          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            aria-label="split button"
          >
            <Button
              style={{ background: "white", color: "black", fontSize: "1em" }}
              disabled
            >
              {jobsArray[selectedIndex]}
            </Button>
            <Button
              style={{ background: "#ee5253" }}
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon style={{ color: "white" }} />
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
                  marginTop: "10px",
                  height: "200px",
                  overflowY: "scroll",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu">
                      {jobsArray.map((option, index) => (
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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            ESTIMATED ANNUAL SALARY (IN EUR)
          </div>
          <div
            style={{ color: "#ee5253", fontWeight: "bold", fontSize: "1.8em" }}
          >
            {salary + " €"}
          </div>
        </div>
      </div>
    );
  };

  return <>{getJobs_Salaries(city)}</>;
};

export default Tab9;
