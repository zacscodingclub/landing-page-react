import React, { Component } from 'react';

class TitleList extends Component {
  componentDidMount() {
    if(this.props.url !== '') {
      this.loadContent();
      this.setState({ mounted: true });
    }
  }

  loadContent() {
    const requestUrl = `https://api.themoviedb.org/3/${this.props.url}`;
  }
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}

export default TitleList;
