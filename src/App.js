import React, { Component } from 'react';
import TitleList from './TitleList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      searchUrl: ''
    }
  }

  handleKey(e) {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      const searchUrl = `search/multi?query=${this.state.searchTerm}&api_key=${this.apiKey}`;
      this.setState(searchUrl: searchUrl);
    }
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <input
            onKeyUp={this.handleKey}
            onChange={this.handleChange}
            value={this.state.searchTerm}
            type="search"
            placeholder="Search for a title..."
          />
        </div>
        <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList title="Top TV picks for Zac" url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending Now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies??sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
}

export default App;
