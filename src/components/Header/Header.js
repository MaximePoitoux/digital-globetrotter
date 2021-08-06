import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import video from "../../assets/videos/intro.mp4";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Searchbar from "../Searchbar/Searchbar";

// https://medium.com/@BoltAssaults/autoplay-muted-html5-video-safari-ios-10-in-react-673ae50ba1f5

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
  logo: {
    height: "60px",
    width: "auto",
    filter: "drop-shadow(0 0 0.5rem black)",
    "&:hover": {
      opacity: 0.8,
    },
  },
}));

const Header = ({
  setSearchCity,
  sortCitiesByScoreDescending,
  sortCitiesByScoreAscending,
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.headerContainer}>
      <video
        style={{
          objectFit: "cover",
          zIndex: "-100",
        }}
        width="100%"
        height="500px"
        src={video}
        // controls="controls"
        playsInline
        autoPlay
        muted
        loop
      />
      <div
        style={{ cursor: "pointer" }}
        className={classes.logoContainer}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img className={classes.logo} src={logo} alt="logo" />
        <p style={{ marginLeft: "20px", letterSpacing: "0.06em" }}>
          Digital<br></br>Globetrotter
        </p>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink
            className={classes.link}
            to="/cities"
            activeStyle={{
              fontWeight: "bold",
              color: "#eb4d4b",
            }}
          >
            <AiFillHome style={{ marginRight: 6 }} />
            Cities
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink
            className={classes.link}
            to="/favorites"
            activeStyle={{
              fontWeight: "bold",
              color: "#eb4d4b",
            }}
          >
            <AiFillHeart style={{ marginRight: 6 }} />
            Favorites
          </NavLink>
        </MenuItem>
      </Menu>
      <Searchbar
        setSearchCity={setSearchCity}
        sortCitiesByScoreDescending={sortCitiesByScoreDescending}
        sortCitiesByScoreAscending={sortCitiesByScoreAscending}
      />
    </div>
  );
};

export default Header;
