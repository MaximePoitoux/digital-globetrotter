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
      .then((res) =>
        res.data._embedded["city:search-results"].map((city) => ({
          name: city.matching_full_name.split(",")[0],
          country: city.matching_full_name.split(",")[2],
        }))
      )
      .then((cities) => this.updateCities(cities))
      .catch((err) => console.log(err));
  }

  updateCities = (cities) => {
    this.setState({
      cities,
    });
  };

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
