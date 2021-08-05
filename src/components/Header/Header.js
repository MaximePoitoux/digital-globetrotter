import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { AiFillHome, AiFillHeart } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import video from "../../assets/videos/intro.mp4";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "relative",
    // display: "flex",
    // justifyContent: "flex-end",
    // alignItems: "center",
    padding: "0px 0px 50px 0px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#b2bec3",
    padding: 5,
  },
  logoContainer: {
    padding: "0px 20px",
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
    // alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.7em",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      {/* <img
        src={logo}
        alt="logo"
        style={{
          height: "200px",
          width: "auto",
        }}
      />
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
      </NavLink> */}
      <video
        style={{
          objectFit: "cover",
          zIndex: "-100",
        }}
        width="100%"
        height="500px"
        src={video}
        // controls="controls"
        autoplay="true"
        muted
        loop
      />
      <div className={classes.logoContainer}>
        <img
          src={logo}
          alt="logo"
          style={{
            height: "60px",
            width: "auto",
            filter: "drop-shadow(0 0 0.5rem black)",
          }}
        />
        <p style={{ marginLeft: "20px", letterSpacing: "0.06em" }}>
          Digital<br></br>Globetrotter
        </p>
      </div>
    </div>
  );
};

export default Header;
