import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px 60px 10px 0px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#b2bec3",
    padding: 5,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <img
        src={logo}
        alt="logo"
        style={{
          height: "200px",
          width: "auto",
        }}
      />{" "}
      Digital Globetrotter
      <NavLink
        className={classes.link}
        to="/cities"
        activeStyle={{
          fontWeight: "bold",
          color: "#eb4d4b",
        }}
      >
        <AiFillHome style={{ marginRight: 4 }} />
        Cities
      </NavLink>
      <NavLink
        className={classes.link}
        to="/favorites"
        activeStyle={{
          fontWeight: "bold",
          color: "#eb4d4b",
        }}
      >
        <AiFillHeart style={{ marginRight: 4 }} />
        Favorites
      </NavLink>
    </div>
  );
};

export default Header;
