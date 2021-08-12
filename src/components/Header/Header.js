import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import poster from "../../assets/images/poster.jpg";
import video from "../../assets/videos/intro2.mp4";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Searchbar from "../Searchbar/Searchbar";
import LazyLoad from "react-lazyload";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// https://medium.com/@BoltAssaults/autoplay-muted-html5-video-safari-ios-10-in-react-673ae50ba1f5

const useStyles = makeStyles(() => ({
  headerContainer: {
    position: "relative",
    // padding: "0px 0px 50px 0px",
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
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.7em",
  },
  menuContainer: {
    display: "flex",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
  logo: {
    height: "60px",
    width: "auto",
    filter: "drop-shadow(0 0 0.5rem black)",
  },
  logoTitle: {
    marginLeft: "20px",
    letterSpacing: "0.06em",
  },
}));

const Header = ({
  setSearchCity,
  sortCitiesByScoreDescending,
  sortCitiesByScoreAscending,
  sortCitiesByCostOfLifeDescending,
  sortCitiesByHousingDescending,
  sortCitiesByCommuteDescending,
  sortCitiesBySafetyDescending,
  sortCitiesByHealthcareDescending,
  sortCitiesByEducationDescending,
  sortCitiesByEnvironmentalQualityDescending,
  sortCitiesByEconomyDescending,
  sortCitiesByBusinessFreedomDescending,
  sortCitiesByCultureDescending,
  sortCitiesByInternetAccessDescending,
  sortCitiesByToleranceDescending,
  sortCitiesByOutdoorsDescending,
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
      <LazyLoad height={500}>
        <video
          style={{
            objectFit: "cover",
            zIndex: "-100",
          }}
          width="100%"
          height="500px"
          src={video}
          playsInline
          autoPlay
          muted
          loop
          poster={poster}
        />
      </LazyLoad>
      <div
        className={classes.logoContainer}
        aria-controls="simple-menu"
        aria-haspopup="true"
      >
        <div className={classes.menuContainer} onClick={handleClick}>
          <img className={classes.logo} src={logo} alt="logo" />
          <ExpandMoreIcon style={{ alignSelf: "center", marginTop: "12px" }} />
        </div>
        <p className={classes.logoTitle}>
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
        sortCitiesByCostOfLifeDescending={sortCitiesByCostOfLifeDescending}
        sortCitiesByHousingDescending={sortCitiesByHousingDescending}
        sortCitiesByCommuteDescending={sortCitiesByCommuteDescending}
        sortCitiesBySafetyDescending={sortCitiesBySafetyDescending}
        sortCitiesByHealthcareDescending={sortCitiesByHealthcareDescending}
        sortCitiesByEducationDescending={sortCitiesByEducationDescending}
        sortCitiesByEnvironmentalQualityDescending={
          sortCitiesByEnvironmentalQualityDescending
        }
        sortCitiesByEconomyDescending={sortCitiesByEconomyDescending}
        sortCitiesByBusinessFreedomDescending={
          sortCitiesByBusinessFreedomDescending
        }
        sortCitiesByCultureDescending={sortCitiesByCultureDescending}
        sortCitiesByInternetAccessDescending={
          sortCitiesByInternetAccessDescending
        }
        sortCitiesByToleranceDescending={sortCitiesByToleranceDescending}
        sortCitiesByOutdoorsDescending={sortCitiesByOutdoorsDescending}
      />
    </div>
  );
};

export default Header;
