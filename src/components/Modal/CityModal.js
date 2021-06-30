import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Slide from "@material-ui/core/Slide";
import Tabs from "./Tabs/CustomTabs";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 500,
    height: 580,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    borderRadius: "8px 8px 5px 5px",
  },
  linearProgressBarContainer: {
    padding: 5,
  },
}));

const CityModal = (props) => {
  const classes = useStyles();
  const { city, openModal, handleClose } = props;

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
    >
      <Slide direction="up" in={openModal} mountOnEnter unmountOnExit>
        <div className={classes.paper}>
          <Tabs city={city} />
        </div>
      </Slide>
    </Modal>
  );
};

export default CityModal;
