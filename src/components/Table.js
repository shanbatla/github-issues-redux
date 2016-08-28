import React from 'react';
import Griddle from 'griddle-react';
import '../App.css';

class Table extends React.Component {
    constructor(props) {
        super(props);

        // this.columns = {["name","city","state","country"]}

        this.fakeData = [
            {
                "id": 0,
                "name": "Mayer Leonard",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United Kingdom",
                "company": "Ovolo",
                "favoriteNumber": 7
             },
             {
                 "id": 1,
                 "name": "Mayer Leonard",
                 "city": "Kapowsin",
                 "state": "Hawaii",
                 "country": "United Kingdom",
                 "company": "Ovolo",
                 "favoriteNumber": 7
             },
             {
                 "id": 2,
                 "name": "Mayer Leonard",
                 "city": "Kapowsin",
                 "state": "Hawaii",
                 "country": "United Kingdom",
                 "company": "Ovolo",
                 "favoriteNumber": 7
             }
        ];
    }

    render() {
        return (
            <div id='table'>
                <Griddle results={this.fakeData} columns={this.columns}/>
            </div>
        );
    }
}

export default Table;
