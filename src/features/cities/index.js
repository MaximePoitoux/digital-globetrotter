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
}) => {
  return (
    <>
      {loaded ? (
        <>
          <Header
            setSearchCity={setSearchCity}
            sortCitiesByScoreDescending={sortCitiesByScoreDescending}
            sortCitiesByScoreAscending={sortCitiesByScoreAscending}
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
