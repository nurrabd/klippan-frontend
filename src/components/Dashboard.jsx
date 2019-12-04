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
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
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
