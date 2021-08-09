import React, { useState, useEffect } from "react";
import "./App.css";
import Cities from "./features/cities";
import Favorites from "./features/favorites";
import apiCities from "services/api/api.cities";
import apiFirebase from "services/api/api.firebase";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  // https://www.robinwieruch.de/react-hooks-fetch-data => useEffect with Axios
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fecthCities = () =>
      apiCities
        .get()
        .then((res) => res.data._embedded["ua:item"])
        .then((cities) => updateCities(sortCitiesByScoreDefault(cities)))
        .catch((err) => console.log(err));

    fecthCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const fetchFavorites = () =>
      apiFirebase.get("favorites.json").then((res) => {
        let favorites = res.data ? res.data : [];
        updateFavorites(favorites);
      });

    fetchFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [searchCity, setSearchCity] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Méthode qui permet de classer par ordre décroissant les villes en fonction de leurs scores générales lors de l'initialisation
  const sortCitiesByScoreDefault = (cities) => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) => e._embedded["ua:scores"].teleport_city_score;
    const byScore = sortByMapped(toScore, byValue);
    return [...cities].sort(byScore);
  };

  // Méthode qui permet de classer par ordre décroissant les villes en fonction de leurs scores générales
  const sortCitiesByScoreDescending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) => e._embedded["ua:scores"].teleport_city_score;
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de classer par ordre croissant les villes en fonction de leurs scores générales
  const sortCitiesByScoreAscending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => a - b;
    const toScore = (e) => e._embedded["ua:scores"].teleport_city_score;
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de classer par ordre décroissant les villes en fonction du coût de la vie (+ le pourcentage est important, mieux c'est)
  const sortCitiesByCostOfLifeDescending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) =>
      e._embedded["ua:scores"].categories
        .filter((category) => category.name === "Cost of Living")
        .map((costOfLiving) => costOfLiving.score_out_of_10);
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de classer par ordre décroissant les villes en fonction du logement (+ le pourcentage est important, mieux c'est)
  const sortCitiesByHousingDescending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) =>
      e._embedded["ua:scores"].categories
        .filter((category) => category.name === "Housing")
        .map((housing) => housing.score_out_of_10);
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de classer par ordre décroissant les villes en fonction de la sécurité (+ le pourcentage est important, mieux c'est)
  const sortCitiesBySafetyDescending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) =>
      e._embedded["ua:scores"].categories
        .filter((category) => category.name === "Safety")
        .map((safety) => safety.score_out_of_10);
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de classer par ordre décroissant les villes en fonction de l'éducation (+ le pourcentage est important, mieux c'est)
  const sortCitiesByEducationDescending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) =>
      e._embedded["ua:scores"].categories
        .filter((category) => category.name === "Education")
        .map((education) => education.score_out_of_10);
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de classer par ordre décroissant les villes en fonction de la qualité de l'environnement (+ le pourcentage est important, mieux c'est)
  const sortCitiesByEnvironmentalQualityDescending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) =>
      e._embedded["ua:scores"].categories
        .filter((category) => category.name === "Environmental Quality")
        .map((environmentalQuality) => environmentalQuality.score_out_of_10);
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de classer par ordre décroissant les villes en fonction de l'économie (+ le pourcentage est important, mieux c'est)
  const sortCitiesByEconomyDescending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) =>
      e._embedded["ua:scores"].categories
        .filter((category) => category.name === "Economy")
        .map((economy) => economy.score_out_of_10);
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de classer par ordre décroissant les villes en fonction de la culture (+ le pourcentage est important, mieux c'est)
  const sortCitiesByCultureDescending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) =>
      e._embedded["ua:scores"].categories
        .filter((category) => category.name === "Leisure & Culture")
        .map((culture) => culture.score_out_of_10);
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de classer par ordre décroissant les villes en fonction de l'accès à internet (+ le pourcentage est important, mieux c'est)
  const sortCitiesByInternetAccessDescending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) =>
      e._embedded["ua:scores"].categories
        .filter((category) => category.name === "Internet Access")
        .map((internetAccess) => internetAccess.score_out_of_10);
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de classer par ordre décroissant les villes en fonction de la tolérance (+ le pourcentage est important, mieux c'est)
  const sortCitiesByToleranceDescending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) =>
      e._embedded["ua:scores"].categories
        .filter((category) => category.name === "Tolerance")
        .map((tolerance) => tolerance.score_out_of_10);
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de classer par ordre décroissant les villes en fonction des activités qu'il y à faire à l'extérieur (+ le pourcentage est important, mieux c'est)
  const sortCitiesByOutdoorsDescending = () => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) =>
      e._embedded["ua:scores"].categories
        .filter((category) => category.name === "Outdoors")
        .map((outdoors) => outdoors.score_out_of_10);
    const byScore = sortByMapped(toScore, byValue);
    const result = [...cities].sort(byScore);

    setCities(result);
  };

  // Méthode qui permet de rechercher une ville
  // const searchCity = (input) => {
  //   const newCities = [...cities];

  //   const filtered = newCities.filter((city) => {
  //     return city.name.toLowerCase().includes(input.toLowerCase());
  //   });

  //   setCities(filtered);
  // };

  // Méthode qui permet de modifier le state cities
  const updateCities = (cities) => {
    setCities(cities);
    setLoaded(favorites ? true : false);
  };

  // Méthode qui permet de modifier le state favorites
  const updateFavorites = (favorites) => {
    setFavorites(favorites);
    setLoaded(cities ? true : false);
  };

  // Méthode qui permet d'ajouter une ville en favoris
  const addFavorite = (id) => {
    const newFavorites = [...favorites]; // Notation ES6 OU this.state.favorites.slice();
    const newCities = cities.find((c) => c.ua_id === id);
    newFavorites.push(newCities);

    setFavorites(newFavorites);
  };

  // Méthode qui permet de supprimer une ville des favoris
  const removeFavorite = (id) => {
    const newFavorites = [...favorites]; // Notation ES6 OU this.state.favorites.slice()
    const index = favorites.findIndex((f) => f.ua_id === id);
    newFavorites.splice(index, 1);

    setFavorites(newFavorites);
  };

  // const saveFavorites = () => {
  //   apiFirebase.put("favorites.json", favorites);
  // };

  // Méthode qui permet de supprimer une ville de la liste des villes
  const removeCity = (id) => {
    const newCities = [...cities]; // 1 => Copie une référence du tableau original
    const index = cities.findIndex((c) => c.ua_id === id); // 2 => Récupère l'index de l'élément du tableau à retirer en vérifiant leurs index
    newCities.splice(index, 1); // 3 => Modifie le contenu de mon tableau en retirant un élément grâce à l'index

    // 4 => Modifie mon state en remplaçant l'ancien tableau par le niveau
    setCities(newCities);
  };

  console.log(cities);

  return (
    <Router>
      <Switch>
        <Route
          path="/cities"
          render={(props) => {
            return (
              <Cities
                {...props}
                loaded={loaded}
                cities={cities}
                favorites={favorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                removeCity={removeCity}
                searchCity={searchCity}
                setSearchCity={setSearchCity}
                sortCitiesByScoreDescending={sortCitiesByScoreDescending}
                sortCitiesByScoreAscending={sortCitiesByScoreAscending}
                sortCitiesByCostOfLifeDescending={
                  sortCitiesByCostOfLifeDescending
                }
                sortCitiesByHousingDescending={sortCitiesByHousingDescending}
                sortCitiesBySafetyDescending={sortCitiesBySafetyDescending}
                sortCitiesByEducationDescending={
                  sortCitiesByEducationDescending
                }
                sortCitiesByEnvironmentalQualityDescending={
                  sortCitiesByEnvironmentalQualityDescending
                }
                sortCitiesByEconomyDescending={sortCitiesByEconomyDescending}
                sortCitiesByCultureDescending={sortCitiesByCultureDescending}
                sortCitiesByInternetAccessDescending={
                  sortCitiesByInternetAccessDescending
                }
                sortCitiesByToleranceDescending={
                  sortCitiesByToleranceDescending
                }
                sortCitiesByOutdoorsDescending={sortCitiesByOutdoorsDescending}
              />
            );
          }}
        />
        <Route
          path="/favorites"
          render={(props) => {
            return (
              <Favorites
                {...props}
                loaded={loaded}
                favorites={favorites}
                removeFavorite={removeFavorite}
              />
            );
          }}
        />
        <Redirect to="/cities" />
      </Switch>
    </Router>
  );
};

export default App;
