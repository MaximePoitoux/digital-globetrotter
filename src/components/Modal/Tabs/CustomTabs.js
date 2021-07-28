import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Tab0 from "./Tab/Tab0";
import Tab1 from "./Tab/Tab1";
import Tab11 from "./Tab/Tab11";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
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

const CustomTabs = ({ city }) => {
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
          <StyledTab label="Resume" />
        </StyledTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Tab0 city={city} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tab1 city={city} />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <Tab11 city={city} />
      </TabPanel>
    </>
  );
};

export default CustomTabs;
