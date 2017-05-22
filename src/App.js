import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Hero from './Hero';
import TitleList from './TitleList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      searchUrl: ''
    }

    this.handleKey = this.handleKey.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKey(e) {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      const searchUrl = `search/multi?query=${this.state.searchTerm}`;
      this.setState({searchUrl: searchUrl});
    }
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input
              onKeyUp={this.handleKey}
              onChange={this.handleChange}
              value={this.state.searchTerm}
              type="search"
              placeholder="Search for a title..."
            />
          </div>
          <UserProfile />
        </header>
        <Hero />
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
