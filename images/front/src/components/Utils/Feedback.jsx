import React, { Component } from 'react';
import { css } from 'glamor';

import Error from './Error';
import Success from './Success';
import Warning from './Warning';

const feedbackModal = css({
  position: 'fixed',
  textAlign: 'center',
  left: 'calc(100% - 400px)',
  width: '400px',
  padding: '0px 10px',
  boxSizing: 'border-box',
  top: '10px'
});

export default class Feedback extends Component {
  constructor() {
    super();
  }

  render() {
    const data = this.props.data;
    const ret = data.map((index, key) => {
      if (index.type === 'error') {
        return <Error message={index.message} key={key} />;
      } else if (index.type === 'success') {
        console.log('success found');
        return <Success message={index.message} key={key} />;
      } else {
        return <Warning message={index.message} key={key} />;
      }
    });
    return <div {...feedbackModal}>{ret}</div>;
  }
}
