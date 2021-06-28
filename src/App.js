import React, { Component } from "react";
import "./App.css";
import Cities from "./features/cities";
import Favorites from "./features/favorites";
import apiCities from "services/api/api.cities";
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
      favorites: [],
      loaded: false,
    };
  }

  componentDidMount() {
    apiCities
      .get()
      .then((res) => res.data._embedded["ua:item"])
      .then((cities) => this.updateCities(this.sortCitiesByScore(cities)))
      .catch((err) => console.log(err));
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

  // Méthode qui permet de modifier le state initial
  updateCities = (cities) => {
    this.setState({
      cities,
      loaded: true,
    });
  };

  // Méthode qui permet d'ajouter une ville en favoris
  addFavorite = (id) => {
    const favorites = [...this.state.favorites]; // Notation ES6 OU this.state.favorites.slice();
    const city = this.state.cities.find((c) => c.ua_id === id);
    favorites.push(city);

    this.setState({
      favorites,
    });
  };

  // Méthode qui permet de supprimer une ville des favoris
  removeFavorite = (id) => {
    const favorites = [...this.state.favorites]; // Notation ES6 OU this.state.favorites.slice()
    const index = this.state.favorites.findIndex((f) => f.ua_id === id);
    favorites.splice(index, 1);

    this.setState({
      favorites,
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
                  cities={this.state.cities}
                  favorites={this.state.favorites.map((f) => f.ua_id)}
                  loaded={this.state.loaded}
                  addFavorite={this.addFavorite}
                  removeFavorite={this.removeFavorite}
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
