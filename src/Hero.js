import React, { Component } from 'react';
import HeroButton from './HeroButton';

export default class Hero extends Component {
  render() {
    return(
      <div id="hero" className="Hero" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
        <div className="content">
          <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
          <h2>Season 2 now available</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="button-wrapper">
            <HeroButton primay={true} text="Watch Now!" />
            <HeroButton primary={false} text="+ My List" />
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    );
  }
}
