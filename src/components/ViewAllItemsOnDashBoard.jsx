import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";

class ViewAllItemsOnDashBoard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 border border-primary">
                        <Card Style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://media.dagensps.se/app/uploads/2019/07/19100923/bmwny.jpg" />
                            <Card.Body>
                                <Card.Title>{this.props.listan.title}</Card.Title>
                                <Card.Text>
                                    {this.props.listan.municipality}
                                    {this.props.listan.city}
                                    {this.props.listan.text}
                                    {this.props.listan.price}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewAllItemsOnDashBoard;
