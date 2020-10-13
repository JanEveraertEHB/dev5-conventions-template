import React, { Component } from 'react';
import { connect } from 'react-redux';

import { row } from 'glamor/ous';

import { container, menuApp } from './../Utils/Components';

class MenuApp extends Component {
  render() {
    return (
      <span>
        <div {...menuApp}>
          <div {...container}>
            <div {...row}>
              Menu
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default connect(
  (state) => {
    return {
    };
  },
  (dispatch) => {
    return {};
  }
)(MenuApp);
