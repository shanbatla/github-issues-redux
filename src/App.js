import React from 'react';
import Table from './components/Table';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Github Issue Tracker</h2>
          <Table/>
        </div>
      </div>
    );
  }
}

export default App;
