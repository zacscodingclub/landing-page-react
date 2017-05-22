import React, { Component } from 'react';
import Item from './Item';
import { API_KEY } from './apiKey';

class TitleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      mounted: false
    }

    this.buildMoviesList = this.buildMoviesList.bind(this);
  }
  componentDidMount() {
    if(this.props.url !== '') {
      this.loadContent();
      this.setState({ mounted: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.url !== this.props.url && nextProps.url !== '') {
      this.setState({
        mounted: true,
        url: nextProps.url
      }, () => this.loadContent());
    }
  }

  loadContent() {
    const requestUrl = `https://api.themoviedb.org/3/${this.props.url}&api_key=${API_KEY}`;

    fetch(requestUrl)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.log(error));
  }

  buildMoviesList() {
    if(this.state.data.results) {
      return this.state.data.results.map((movie, i) => {
        if (i < 5) {
          let name = '';
          let backDrop = `http://image.tmdb.org/t/p/original${movie.backdrop_path}`;

          !movie.name ? name = movie.original_title : name = movie.name;

          return (
            <Item
              key={movie.id}
              title={name}
              score={movie.vote_average}
              overview={movie.overview}
              backdrop={backDrop}
            />
          )
        } else {
          return (<div key={movie.id}></div>);
        }
      });
    } else {
      return "No movies yet..."
    }
  }

  render() {

    return (
      <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {this.buildMoviesList()}
          </div>
        </div>
      </div>
    )
  }
}

export default TitleList;
