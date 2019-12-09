import React, {Component} from 'react';

class CategoryList extends Component {
    render() {
        return (
            <ul className="list-group list-group-horizontal" Style="width:100%">
                <li className="list-group-item">Bilar</li>
                <li className="list-group-item">Jobb</li>
                <li className="list-group-item">  För hemmet</li>
                <li className="list-group-item">Bostad</li>
                <li className="list-group-item">resor</li>
                <li className="list-group-item">klöder</li>
                <li className="list-group-item">fritid och hoppy</li>
                <li className="list-group-item">Elektronik</li>
                <li className="list-group-item">övrigt</li>


            </ul>
        );
    }
}

export default CategoryList;
