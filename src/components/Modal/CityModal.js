import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Slide from "@material-ui/core/Slide";
import LinearProgressBar from "../LinearProgressBar/LinearProgressBar";

export default function CityModal(props) {
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
          {city._embedded["ua:scores"].categories.map((category) => (
            <div
              key={category.name}
              className={classes.linearProgressBarContainer}
            >
              <LinearProgressBar
                name={category.name}
                value={category.score_out_of_10 * 10}
                color={category.color}
              />
            </div>
          ))}
        </div>
      </Slide>
    </Modal>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 500,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 5,
  },
  linearProgressBarContainer: {
    padding: 5,
  },
}));
