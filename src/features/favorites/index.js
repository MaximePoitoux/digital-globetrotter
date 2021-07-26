import React from "react";
import Header from "../../components/Header/Header";
import { FavoriteList } from "./components";
import Loading from "../../components/utils/Loading";

const index = ({ loaded, favorites, removeFavorite }) => {
  return (
    <>
      {loaded ? (
        <>
          <Header />
          <FavoriteList favorites={favorites} removeFavorite={removeFavorite} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default index;
