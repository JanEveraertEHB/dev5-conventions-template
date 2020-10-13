import React, { Component } from 'react';
import { connect } from 'react-redux';

import { css } from 'glamor';
import { container } from './../Utils/Components';

import StarterApp from '../Starter/StarterApp';
import Footer from './../Footer/FooterApp';

const section = css({
  marginTop: 50
});

class HomeApp extends Component {
  render() {
    return (
      <React.Fragment>
        <div {...container}>
          <div {...section}>
            <StarterApp />
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}
export default connect(
  (state) => {
    return {
      user: state.user,
      auth: state.auth
    };
  },
  (dispatch) => {
    return {};
  }
)(HomeApp);
