import React, { Component } from 'react';

import { container } from './../Utils/Components';
import ListApp from './List/ListApp';

class LogsApp extends Component {
  render() {
    return (
      <div {...container}>
        <ListApp />
      </div>
    );
  }
}
export default LogsApp;
