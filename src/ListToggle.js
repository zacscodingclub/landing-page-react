import React, { Component } from 'react';

export default class ListToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.state.toggled) {
      this.setState({ toggled: false });
    } else {
      this.setState({ toggled: true });
    };
  }

  render() {
    return(
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
}
