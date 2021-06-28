import React from "react";
import Header from "../../components/Header/Header";
import { FavoriteList } from "./components";

const index = (props) => {
  const { favorites, removeFavorite } = props;

  return (
    <>
      <Header />
      <FavoriteList favorites={favorites} removeFavorite={removeFavorite} />
    </>
  );
};

export default index;
