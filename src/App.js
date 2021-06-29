import React, { Component } from "react";
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
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: null,
      favorites: null,
      loaded: false,
    };
  }

  componentDidMount() {
    apiCities
      .get()
      .then((res) => res.data._embedded["ua:item"])
      .then((cities) => this.updateCities(this.sortCitiesByScore(cities)))
      .catch((err) => console.log(err));

    apiFirebase.get("favorites.json").then((res) => {
      let favorites = res.data ? res.data : [];
      this.updateFavorites(favorites);
    });
  }

  // Méthode qui permet de classer par ordre décroissant les villes en fonction de leurs scores générales
  sortCitiesByScore = (cities) => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) => e._embedded["ua:scores"].teleport_city_score;
    const byScore = sortByMapped(toScore, byValue);
    return [...cities].sort(byScore);
  };

  // Méthode qui permet de modifier le state cities
  updateCities = (cities) => {
    this.setState({
      cities,
      loaded: this.state.favorites ? true : false,
    });
  };

  // Méthode qui permet de modifier le state favorites
  updateFavorites = (favorites) => {
    this.setState({
      favorites,
      loaded: this.state.cities ? true : false,
    });
  };

  // Méthode qui permet d'ajouter une ville en favoris
  addFavorite = (id) => {
    const favorites = [...this.state.favorites]; // Notation ES6 OU this.state.favorites.slice();
    const city = this.state.cities.find((c) => c.ua_id === id);
    favorites.push(city);

    this.setState(
      {
        favorites,
      },
      () => {
        this.saveFavorites();
      }
    );
  };

  // Méthode qui permet de supprimer une ville des favoris
  removeFavorite = (id) => {
    const favorites = [...this.state.favorites]; // Notation ES6 OU this.state.favorites.slice()
    const index = this.state.favorites.findIndex((f) => f.ua_id === id);
    favorites.splice(index, 1);

    this.setState(
      {
        favorites,
      },
      () => {
        this.saveFavorites();
      }
    );
  };

  saveFavorites = () => {
    apiFirebase.put("favorites.json", this.state.favorites);
  };

  // Méthode qui permet de supprimer une ville de la liste des villes
  removeCity = (id) => {
    const cities = [...this.state.cities]; // 1 => Copie une référence du tableau original
    const index = this.state.cities.findIndex((c) => c.ua_id === id); // 2 => Récupère l'index de l'élément du tableau à retirer en vérifiant leurs index
    cities.splice(index, 1); // 3 => Modifie le contenu de mon tableau en retirant un élément grâce à l'index

    // 4 => Modifie mon state en remplaçant l'ancien tableau par le niveau
    this.setState({
      cities,
    });
  };

  render() {
    console.log(this.state.cities);
    return (
      <Router>
        <Switch>
          <Route
            path="/cities"
            render={(props) => {
              return (
                <Cities
                  {...props}
                  loaded={this.state.loaded}
                  cities={this.state.cities}
                  favorites={this.state.favorites}
                  addFavorite={this.addFavorite}
                  removeFavorite={this.removeFavorite}
                  removeCity={this.removeCity}
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
                  loaded={this.state.loaded}
                  favorites={this.state.favorites}
                  removeFavorite={this.removeFavorite}
                />
              );
            }}
          />
          <Redirect to="/cities" />
        </Switch>
      </Router>
    );
  }
}
