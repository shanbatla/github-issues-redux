import React from 'react';
import Table from './components/Table';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userAvatar: "",
            userName: "",
            issueNumber: "",
            issueTitle: "",
            labels: "",
            issueBody: ""
        }
    }

    componentDidMount() {
        $.get('https://api.github.com/repos/npm/npm/issues', function(result) {
            console.log(result);
        })
    }

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
