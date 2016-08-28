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
    }

    render() {
        return (
            <div id='table'>
                <Griddle results={this.fakeData} columns={this.columns} tableClassName="table" showSettings={true}/>
            </div>
        );
    }
}

export default Table;
