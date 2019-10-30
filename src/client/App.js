// @flow

import React from 'react';
import Pairs from './containers/Pairs'
import CreatePair from './containers/CreatePair';
import SetSorting from './components/SetSorting';
import type {Word, Words} from './Types.js';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <CreatePair />
      <SetSorting />
      <Pairs/>
    </div>
  );
}

export default connect(
  null,
  null
)(App);
