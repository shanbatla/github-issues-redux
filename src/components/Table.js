import React from 'react';
import Griddle from 'griddle-react';
import '../App.css';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.columns = ["User Name","Issue Number","Issue Title","Labels","Issue Body"];

        this.fakeData = [
            {
                "User Name": "Mayer Leonard",
                "Issue Number": "Kapowsin",
                "Issue Title": "Hawaii",
                "Labels": "United Kingdom",
                "Issue Body": "Ovolo"
             },
             {
                 "User Name": "Mayer Leonard",
                 "Issue Number": "Kapowsin",
                 "Issue Title": "Hawaii",
                 "Labels": "United Kingdom",
                 "Issue Body": "Ovolo"
             },
             {
                 "User Name": "Mayer Leonard",
                 "Issue Number": "Kapowsin",
                 "Issue Title": "Hawaii",
                 "Labels": "United Kingdom",
                 "Issue Body": "Ovolo"
             }
        ];

        this.issuesForTable = [];

        this.fetchIssues = this.fetchIssues.bind(this);
    }

    fetchIssues() {
        const rawData = this.props.issues;

        const processedDataForTable = rawData.map(function(issue) {
            return {
                "User Name": issue.user.login,
                "Issue Number": issue.number,
                "Issue Title": issue.title,
                "Labels": issue.labels,
                "Issue Body": issue.body
            }
        });

        this.issuesForTable = processedDataForTable;
        console.log(this.issuesForTable);
    }

    render() {
        return (
            <div id='table'>
                <Griddle results={this.issuesForTable} columns={this.columns} tableClassName="table" showSettings={true}/>
                <button id="fetch-button" onClick={this.fetchIssues}>Fetch Issues</button>
            </div>
        );
    }
}

export default Table;
