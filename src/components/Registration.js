import React, {Component} from 'react';
import {createNewUser} from "../actions/securityActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


class Registration extends Component {

    constructor() {
        super();

        this.state = {

            fullName: '',
            username: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount() {
        if (this.props.security.validToken) {

            this.props.history.push("/");

        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const newuser = {
            fullName: this.state.fullName,
            username: this.state.username,
            password: this.state.password

        };

        this.props.createNewUser(newuser, this.props.history);

    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {errors} = this.state;
        return (


            <div className="container ">
                <div className="row justify-content-center" Style="height:500px">

                    <div className="col-8   ">

                        <div Style="height:100px"></div>
                        <Card>

                            <Card.Header><h6 align="center"> Register</h6></Card.Header>
                            <Card.Body>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                               className={classnames("form-control form-control-lg", {
                                                   "is-invalid": errors.fullName
                                               })}
                                               placeholder="Full Name"
                                               name="fullName"
                                               required
                                               value={this.state.fullName}
                                               onChange={this.onChange}
                                        />
                                        {errors.fullName && (
                                            <div className="invalid-feedback">{errors.fullName}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                               className={classnames("form-control form-control-lg", {
                                                   "is-invalid": errors.username
                                               })}
                                               required
                                               placeholder="Email Address"
                                               name="username"
                                               value={this.state.username}
                                               onChange={this.onChange}

                                        />
                                        {errors.username && (
                                            <div className="invalid-feedback">{errors.username}</div>
                                        )}

                                    </div>
                                    <div className="form-group">
                                        <input type="password"
                                               className={classnames("form-control form-control-lg", {
                                                   "is-invalid": errors.password
                                               })}
                                               required
                                               placeholder="Password"
                                               name="password"
                                               value={this.state.password}
                                               onChange={this.onChange}

                                        />
                                        {errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )}
                                    </div>


                                    <div>
                                        <Button type="submit" variant="primary" size="lg" block>
                                            Join now
                                        </Button>

                                    </div>


                                </form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>




        );
    }
}

Registration.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    security: state.security
});
export default connect(
    mapStateToProps,
    {createNewUser}
)(Registration);
