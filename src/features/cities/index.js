import React from "react";
import { CityList } from "./components";
import Header from "../../components/Header/Header";
import Loading from "../../components/utils/Loading";

const index = ({
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
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default index;
