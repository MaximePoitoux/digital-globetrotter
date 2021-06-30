import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LinearProgressBarWithLabel from "../../LinearProgressBar/LinearProgressBarWithLabel";

const useStyles = makeStyles((theme) => ({
  linearProgressBarContainer: {
    padding: 5,
  },
}));

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    // height: 1,
    "& > span": {
      // maxWidth: 80,
      width: "100%",
      backgroundColor: "#55efc4",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ padding: 12 }}
    >
      {children}
    </div>
  );
};

const CustomTabs = (props) => {
  const classes = useStyles();
  const { city } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          background: "#e17055",
          borderRadius: "5px 5px 0px 0px",
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <StyledTab label="Life Quality Score" />
          <StyledTab label="Cost of Living" />
          <StyledTab label="Taxation" />
          <StyledTab label="Safety" />
          <StyledTab label="Education" />
          <StyledTab label="Visa" />
          <StyledTab label="People" />
          <StyledTab label="LGBT Rights" />
          <StyledTab label="Climate" />
          <StyledTab label="Outdoors" />
          <StyledTab label="On Living" />
        </StyledTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {city._embedded["ua:scores"].categories.map((category) => (
          <div
            key={category.name}
            className={classes.linearProgressBarContainer}
          >
            <LinearProgressBarWithLabel
              name={category.name}
              value={category.score_out_of_10 * 10}
              color={category.color}
            />
          </div>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Cost of Living
      </TabPanel>
    </>
  );
};

export default CustomTabs;
