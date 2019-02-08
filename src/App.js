import React, { Component } from 'react';

import './App.css';
import SearchForm from './components/searchForm';
import SearchResults from './components/searchResults';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>
          <SearchForm/>
        </div>
        <div>
          <SearchResults />
        </div>
      </div>
    );
  }
}

export default App;
