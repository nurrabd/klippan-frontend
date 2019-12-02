import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/ProductActions";
import PropTypes from "prop-types";
import _ from 'lodash';
import {Button, Card} from "react-bootstrap";

class Dashboard extends Component {
    componentDidMount() {
        this.props.getProducts();
    }


    renderall() {
        return _.map(this.props.product.products, list => {

            return(
                console.log(list.municipalities)
            );
            {/*
            _.map(list.municipalities, mun => {

                _.map(mun.cities, cit => {

                    _.map(cit.sells, type => {
                        _.map(type.categories, cat => {

                            _.map(cat.items, item => {

                                return(
                                    item.id
                                );

                            });

                        });


                    });

                });

            });
            */}

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
    getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    product: state.product
});

export default connect(
    mapStateToProps,
    { getProducts }
)(Dashboard);
