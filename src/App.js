import React, { Component } from "react";
import "./App.css";
import Header from "components/Header/Header";
import CityCards from "components/CityCards";
import apiCities from "services/api/api.cities";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: null,
    };
  }

  componentDidMount() {
    apiCities
      .get()
      .then((res) => res.data._embedded["ua:item"])
      .then((cities) => this.updateCities(this.filterCitiesbyScore(cities)))
      .catch((err) => console.log(err));
  }

  filterCitiesbyScore = (cities) => {
    const sortByMapped = (map, compareFn) => (a, b) =>
      compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toScore = (e) => e._embedded["ua:scores"].teleport_city_score;
    const byScore = sortByMapped(toScore, byValue);
    return [...cities].sort(byScore);
  };

  updateCities = (cities) => {
    this.setState({
      cities,
    });
  };

  // componentDidMount() {
  //   apiCities
  //     .get()
  //     .then((res) => {
  //       console.log(res);
  //       return res.data._embedded["city:search-results"].map((city) => ({
  //         name: city.matching_full_name.split(",")[0],
  //         country: city.matching_full_name.split(",")[2],
  //         link: city._links["city:item"].href,
  //       }));
  //     })
  //     .then((cities) => this.updateCities(cities))
  //     .catch((err) => console.log(err));
  // }

  // updateCities = (cities) => {
  //   this.setState({
  //     cities,
  //   });
  // };

  render() {
    console.log(this.state.cities);
    return (
      <>
        <Header />
        <CityCards cities={this.state.cities ? this.state.cities : []} />
      </>
    );
  }
}
