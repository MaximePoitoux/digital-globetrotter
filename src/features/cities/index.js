import React from "react";
import { CityList } from "./components";
import Header from "../../components/Header/Header";
import Loading from "../../components/utils/Loading";

const index = (props) => {
  const { cities, favorites, addFavorite, removeFavorite, removeCity } = props;

  return (
    <>
      {props.loaded ? (
        <>
          <Header />
          <CityList
            cities={cities}
            favorites={favorites}
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
