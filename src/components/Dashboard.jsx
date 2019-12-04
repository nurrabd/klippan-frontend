import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductsByItems } from "../actions/ProductActions";
import PropTypes from "prop-types";
import _ from 'lodash';
import {Button, Card} from "react-bootstrap";

class Dashboard extends Component {
    componentDidMount() {
        this.props.getProductsByItems();
    }


    renderall() {
        return _.map(this.props.product, list => {

            return(

                <div className="container">
                <div className="row">
                    <div className="col-md-4 border border-primary">
                        <Card Style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://media.dagensps.se/app/uploads/2019/07/19100923/bmwny.jpg" />
                            <Card.Body>
                                <Card.Title>{list.title}</Card.Title>
                                <Card.Text>
                                    {list.municipality}
                                    {list.city}
                                    {list.text}
                                    {list.price}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                </div>

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
