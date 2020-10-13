import React, { Component } from 'react';
import { css } from 'glamor';

const message = css({
  color: '#fff',
  lineHeight: '20px',
  backgroundColor: '#D6E75A',
  float: 'right',
  width: '100%',
  padding: '10px 20px',
  borderRadius: '5px'
});

export default class Success extends Component {
  constructor() {
    super();
    this.state = {
      hide: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ hide: true });
    }, 5000);
  }
  render() {
    return (
      <span>
        {this.state.hide ? null : (
          <span {...message}>{this.props.message}</span>
        )}
      </span>
    );
  }
}
