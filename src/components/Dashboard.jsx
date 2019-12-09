import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductsByItems } from "../actions/ProductActions";
import PropTypes from "prop-types";
import _ from 'lodash';
import {Button, Card} from "react-bootstrap";
import ViewAllItemsOnDashBoard from "./ViewAllItemsOnDashBoard";

class Dashboard extends Component {
    componentDidMount() {
        this.props.getProductsByItems();
    }


    renderall() {
        return this.props.product.map( list => {

            return(

               <ViewAllItemsOnDashBoard  listan = {list}/>

            );

        });
    }

    render() {


        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center"></h1>
                            <br />
                            {this.renderall()}
                            <br />
                            <hr />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    product: PropTypes.object.isRequired,
    getProductsByItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    product: state.product.products
});

export default connect(
    mapStateToProps,
    { getProductsByItems }
)(Dashboard);
