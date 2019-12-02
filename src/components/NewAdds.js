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

            todo: ''

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(e) {
        e.preventDefault();
        const LoginRequest = {
            todo: this.state.todo

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
                                       placeholder="katagori"
                                       name="todo"
                                       required
                                       value={this.state.todo}
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
