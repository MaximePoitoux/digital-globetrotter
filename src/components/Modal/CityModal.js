import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Slide from "@material-ui/core/Slide";
import Tabs from "./Tabs/CustomTabs";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 500,
    height: 705,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    borderRadius: "5px 5px 5px 5px",
  },
  linearProgressBarContainer: {
    padding: 5,
  },
}));

const CityModal = ({ city, openModal, handleClose }) => {
  const classes = useStyles();

  console.log(city);

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
          <Card
            style={{
              borderRadius: "5px 5px 0 0",
              height: "130px",
            }}
          >
            <CardMedia
              style={{
                borderRadius: "5px 5px 0 0",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              image={city._embedded["ua:images"].photos[0].image.web}
              title={city.name}
            >
              <div
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {city.name}
              </div>
            </CardMedia>
          </Card>
          <Tabs city={city} />
        </div>
      </Slide>
    </Modal>
  );
};

export default CityModal;
