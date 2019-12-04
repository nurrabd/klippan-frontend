import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import PropTypes from "prop-types"
import {connect} from "react-redux";
import classnames from "classnames";
import {createNewProduct} from "../actions/ProductActions";



class NewAdds extends Component {
    constructor() {
        super();
        this.state = {

            municipality: '',
            city: '',
            type: '',
            category: '',
            title: '',
            text: '',
            price: ''


        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(e) {
        e.preventDefault();
        const LoginRequest = {
            municipality: this.state.municipality,
            city: this.state.city,
            type: this.state.type,
            category: this.state.category,
            title: this.state.title,
            text: this.state.text,
            price: this.state.price,




        };

        this.props.createNewProduct(LoginRequest);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {


        return (
            <div className="container ">
                <div className="row justify-content-center ">

                    <div className="col-8  border border-outset " >
                        <h6 Style="font-size:50px" align="center">Lägg till annos</h6>

                        <Form className="logier "  onSubmit={this.onSubmit}>

                            <div className="form-group">
                                <input type="text"
                                       className={classnames("form-control form-control-lg", {
                                           "is-invalid": ""
                                       })}
                                       placeholder="municipality"
                                       name="municipality"
                                       required
                                       value={this.state.municipality}
                                       onChange={this.onChange}
                                />

                            </div>
                            <div className="form-group">
                                <input type="text"
                                       className={classnames("form-control form-control-lg", {
                                           "is-invalid": ""
                                       })}
                                       placeholder="city"
                                       name="city"
                                       required
                                       value={this.state.city}
                                       onChange={this.onChange}
                                />

                            </div>
                            <div className="form-group">
                                <input type="text"
                                       className={classnames("form-control form-control-lg", {
                                           "is-invalid": ""
                                       })}
                                       placeholder="type"
                                       name="type"
                                       required
                                       value={this.state.type}
                                       onChange={this.onChange}
                                />

                            </div>
                            <div className="form-group">
                                <input type="text"
                                       className={classnames("form-control form-control-lg", {
                                           "is-invalid": ""
                                       })}
                                       placeholder="category"
                                       name="category"
                                       required
                                       value={this.state.category}
                                       onChange={this.onChange}
                                />

                            </div>
                            <div className="form-group">
                                <input type="text"
                                       className={classnames("form-control form-control-lg", {
                                           "is-invalid": ""
                                       })}
                                       placeholder="title"
                                       name="title"
                                       required
                                       value={this.state.title}
                                       onChange={this.onChange}
                                />

                            </div>
                            <div className="form-group">
                                <input type="text"
                                       className={classnames("form-control form-control-lg", {
                                           "is-invalid": ""
                                       })}
                                       placeholder="text"
                                       name="text"
                                       required
                                       value={this.state.text}
                                       onChange={this.onChange}
                                />

                            </div>
                            <div className="form-group">
                                <input type="text"
                                       className={classnames("form-control form-control-lg", {
                                           "is-invalid": ""
                                       })}
                                       placeholder="price"
                                       name="price"
                                       required
                                       value={this.state.price}
                                       onChange={this.onChange}
                                />

                            </div>


                            <Button className="btn-primary" type="submit" Style="width:100%">
                                Anonsera
                            </Button>


                        </Form>



                    </div>
                </div>
            </div>



        );
    }
}

NewAdds.propTypes = {
    createNewProduct: PropTypes.func.isRequired,



};

const mapStateToProps = state => ({


});

export default connect(
    mapStateToProps,
    {createNewProduct})(NewAdds);
