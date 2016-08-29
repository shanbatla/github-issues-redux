import React from 'react';
import Griddle from 'griddle-react';
import '../App.css';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.columns = ["User Name","Issue Number","Issue Title","Labels","Issue Body"];

        this.state = {
            issuesForTable: []
        }

        this.fetchIssues = this.fetchIssues.bind(this);
    }

    fetchIssues() {
        const rawData = this.props.issues;

        const issuesForTableArray = [];

        rawData.forEach(function(issue) {
            const issueForTable = {
                "User Name": issue.user.login,
                "Issue Number": issue.number,
                "Issue Title": issue.title,
                "Labels": issue.labels,
                "Issue Body": issue.body
            }

            issuesForTableArray.push(issueForTable);
        })

        this.setState({
            issuesForTable: issuesForTableArray
        })
    }

    render() {
        return (
            <div id='table'>
                <Griddle results={this.state.issuesForTable} columns={this.columns} tableClassName="table" showSettings={true}/>
                <button id="fetch-button" onClick={this.fetchIssues}>Fetch Issues</button>
            </div>
        );
    }
}

export default Table;
