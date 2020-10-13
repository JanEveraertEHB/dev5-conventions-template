import React, { Component } from 'react';
import { Route, IndexRoute, Switch, Link } from 'react-router-dom';
import { css } from 'glamor';
import { base, container, row, columns, h1, table } from 'glamor/ous';
const section = css({
  marginBottom: '50px'
});

export default class About extends Component {
  render() {
    return <div {...container}>about</div>;
  }
}
