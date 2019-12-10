import React, {Component} from 'react';

class CategoryList extends Component {
    render() {
        return (
            <div>
                <div Style=" height:50px;"></div>

                <div className="row">
                    <div className="col-3 list-group-item">Bilar</div>
                    <div className="col-3 list-group-item">Bilar</div>
                    <div className="col-3 list-group-item">Bilar</div>
                    <div className="col-3 list-group-item">Bilar</div>
                </div>
                <div className="row">
                    <div className="col-3 list-group-item">Bilar</div>
                    <div className="col-3 list-group-item">Bilar</div>
                    <div className="col-3 list-group-item">Bilar</div>
                    <div className="col-3 list-group-item">Bilar</div>
                </div>
            </div>

        );
    }
}

export default CategoryList;
