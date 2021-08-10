import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CityList } from "./components";
import Header from "../../components/Header/Header";
import Loading from "../../components/utils/Loading";
import Fab from "@material-ui/core/Fab";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Index = ({
  loaded,
  cities,
  favorites,
  addFavorite,
  removeFavorite,
  removeCity,
  searchCity,
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
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <Header
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
          <CityList
            searchCity={searchCity}
            cities={cities}
            favorites={favorites.map((f) => f.ua_id)}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            removeCity={removeCity}
          />
          {isVisible && (
            <Fab
              style={{ background: "#ee5253" }}
              className={classes.fab}
              onClick={scrollToTop}
            >
              <ExpandLessIcon style={{ color: "white", fontSize: "2em" }} />
            </Fab>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Index;
