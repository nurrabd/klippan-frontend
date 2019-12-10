import React, {Component} from 'react';

class CategoryList extends Component {
    render() {
        return (
            <div>
                <div Style=" height:50px;"></div>
                <div className="row justify-content-center">
                <div className="col-9 ">
                <div className="row " align="center" >
                    <div className="col-3  " Style="height:px">
                    <p/>
                        <i className="fas fa-car-side fa-2x"></i>
                    <br/>
                    <h6>Bilar</h6>
                    </div>
                    <div className="col-3 ">
                        <p/>
                        <i className="fas fa-mobile fa-2x"></i>
                        <br/>
                        <h6>ELektronik</h6>
                    </div>
                    <div className="col-3 ">
                        <p/>
                        <i className="fas fa-tshirt fa-2x"></i>
                        <br/>
                        <h6>kläder</h6>
                    </div>
                    <div className="col-3 ">
                        <p/>
                        <i className="fas fa-hamburger fa-2x"></i>
                        <br/>
                        <h6>mat</h6>
                    </div>
                </div>
                <div className="row" align="center">
                    <div className="col-3 ">
                        <p/>
                        <i className="fas fa-home fa-2x"></i>
                        <br/>
                        <h6>Bostad</h6>
                    </div>
                    <div className="col-3 ">
                        <p/>
                        <i className="fas fa-user-md fa-2x"></i>
                        <br/>
                        <h6>jobb</h6>
                    </div>
                    <div className="col-3 ">
                        <p/>
                        <i className="fas fa-plane fa-2x"></i>
                        <br/>
                        <h6>resor</h6>
                    </div>
                    <div className="col-3 ">
                        <p/>
                        <i className="fas fa-box-open fa-2x"></i>
                        <br/>
                        <h6>övrigt</h6>
                    </div>
                </div>
                </div>
                </div>
            </div>

        );
    }
}

export default CategoryList;
