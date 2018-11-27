import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ListOfCities from '../containers/list_of_cities';

export default class App extends Component {
  render() {
    return (
      <div>
          <SearchBar />
          <ListOfCities />
      </div>
    );
  }
}





    
