import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import PropTypes from "prop-types"
import {connect} from "react-redux";
import classnames from "classnames";
import {login} from "../actions/securityActions";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.security.validToken) {
           //this.props.history.push(`/ResumeBoard/${nextProps.security.user.id}`);
            this.props.history.push("/NewAdds");
        }
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const LoginRequest = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.login(LoginRequest);

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        const {validToken, user} = this.props.security;
        const {errors} = this.state;

        return (
            <div className="container " Style="padding: ">
                <div className="row justify-content-center" Style="height:500px">

                    <div className="col-8   " >

                        <div Style="height:100px"></div>
                        <Card>

                            <Card.Header> <h6 align="center" > Login</h6></Card.Header>
                            <Card.Body>
                                <Form className="logier "  onSubmit={this.onSubmit}>

                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control placeholder="Email"
                                                      type="text"
                                                      className={classnames("form-control form-control-lg", {
                                                          "is-invalid": errors.username
                                                      })}
                                                      name="username"
                                                      value={this.state.username}
                                                      onChange={this.onChange}/>
                                        {errors.username && (
                                            <div className="invalid-feedback">{errors.username}</div>
                                        )}
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password"
                                                      className={classnames("form-control form-control-lg", {
                                                          "is-invalid": errors.password
                                                      })}
                                                      placeholder="Password"
                                                      name="password"
                                                      value={this.state.password}
                                                      onChange={this.onChange}
                                        />
                                        {errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )}
                                    </Form.Group>

                                    <Card.Text align="center">
                                    <Button className="login" type="submit" Style="width:100%">
                                        Login
                                    </Button>
                                    </Card.Text>

                                </Form>
                                <Card.Text align="center">
                                    <Link className="fa" to={`/ForgotPasswordPage`} style={{padding: '20px'}}>
                                    Forgot password
                                </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>



        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {login})(Login);
