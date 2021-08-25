import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SignIn from "./Login/SignIn";
import SignUp from "./Signup/SignUp";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    height: "auto",
    width: "320px",
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "4px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  indicator: {
    backgroundColor: "rgb(238, 82, 83)",
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

const ModalConnexion = ({ openModal, handleCloseModal }) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={() => {
          // eslint-disable-next-line
          return setValue(0), handleCloseModal();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <Tabs
              classes={{
                indicator: classes.indicator,
              }}
              value={value}
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Sign In" />
              <Tab label="Sign Up" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <SignIn handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignUp />
            </TabPanel>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalConnexion;
