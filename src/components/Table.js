import React from 'react';
import Griddle from 'griddle-react';
import '../App.css';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.columns = ["User Avatar","User Name","Issue Number","Issue Title","Labels","Issue Body"];

        this.fakeData = [
            {
                "User Avatar": 0,
                "User Name": "Mayer Leonard",
                "Issue Number": "Kapowsin",
                "Issue Title": "Hawaii",
                "Labels": "United Kingdom",
                "Issue Body": "Ovolo"
             },
             {
                 "User Avatar": 1,
                 "User Name": "Mayer Leonard",
                 "Issue Number": "Kapowsin",
                 "Issue Title": "Hawaii",
                 "Labels": "United Kingdom",
                 "Issue Body": "Ovolo"
             },
             {
                 "User Avatar": 2,
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
