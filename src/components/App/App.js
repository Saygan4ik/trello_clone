import React from 'react';
// import PropTypes from 'prop-types';
import Board from '../Board/Board';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-left-menu">123</div>
          <div className="App-header-logo">123</div>
        </header>
        <Board />
      </div>
    );
  }
}

export default App;
