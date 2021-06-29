import React from "react";
import { CityList } from "./components";
import Header from "../../components/Header/Header";
import Loading from "../../components/utils/Loading";

const index = (props) => {
  const { loaded, cities, favorites, addFavorite, removeFavorite, removeCity } =
    props;

  return (
    <>
      {loaded ? (
        <>
          <Header />
          <CityList
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
