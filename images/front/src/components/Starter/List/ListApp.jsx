import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StarterFetchList } from '../../../actions/StarterActions';
import { css } from 'glamor';
import { row, columns } from 'glamor/ous';

const section = css({
  marginTop: 20
});

class ListApp extends Component {
  render() {
    return (
      <span>
        <h2>Starter</h2>
        <div {...row} {...section}>
          <p {...columns(12)}>
            Welcome to this app
          </p>
        </div>
      </span>
    );
  }
}


export default connect(
  (state) => {
    return {
      starter: state.starter,
    };
  },
  (dispatch) => {
    return {
      listLogs: (data, header) => {
        dispatch(StarterFetchList(data, header));
      }
    };
  }
)(ListApp);
