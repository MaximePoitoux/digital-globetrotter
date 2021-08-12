import { useState, useRef } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { FaBaby } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

// const useStyles = makeStyles(() => ({
//   lgbtContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     overflow: "auto",
//     whiteSpace: "nowrap",
//     height: "500px",
//     overflowX: "hidden",
//   },
//   elementContainer: {
//     background: "white",
//     width: "95%",
//     display: "flex",
//     justifyContent: "left",
//     alignItems: "center",
//     padding: "10px",
//     margin: "5px",
//     fontSize: "0.8em",
//     borderRadius: "4px",
//     boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
//   },
//   valueContainer: {
//     display: "flex",
//     justifyContent: "flex-end",
//     width: "100%",
//     fontWeight: "bold",
//     color: "#e17055",
//     fontSize: "0.8em",
//   },
// }));

const Tab9 = ({ city }) => {
  // const classes = useStyles();

  const options = [];
  const salaryArray = [];

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [salary, setSalary] = useState("");

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

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

  const getJobs_Salaries = (city) => {
    city._embedded["ua:salaries"].salaries.map((salary) => {
      const job = salary.job.title;
      const medianSalary = Math.round(
        (salary.salary_percentiles.percentile_25 +
          salary.salary_percentiles.percentile_50 +
          salary.salary_percentiles.percentile_75) /
          3
      );

      // eslint-disable-next-line
      return options.push(job), salaryArray.push(medianSalary);

      // return (
      //   <div key={job} className={classes.elementContainer}>
      //     <FaBaby
      //       style={{
      //         marginRight: "10px",
      //         fontSize: "1.4em",
      //         minWidth: "40px",
      //       }}
      //     />
      //     {job}
      //     <div className={classes.valueContainer}>{medianSalary + " $"}</div>
      //   </div>
      // );
    });

    console.log(salaryArray);

    return (
      <>
        <ButtonGroup
          variant="contained"
          color="primary"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
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
                  <MenuList id="split-button-menu">
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
        {salary + " $"}
      </>
    );
  };

  return <>{getJobs_Salaries(city)}</>;
};

export default Tab9;
