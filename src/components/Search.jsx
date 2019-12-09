import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";

class Search extends Component {

    constructor(){
        super();
        this.state = {
            municipality: "",
            category: ""
        }

    }


    render() {
        return (
            <div className="container ">
                <div Style="height:20px"/>
                <div className="row justify-content-center">
                    <div className="col-md-6  ">

                        <Form className=" "  onSubmit={this.onSubmit}>

                        <Form.Group>


                            <Form.Control placeholder="municipality"
                                          type="text"
                                          className=" form-control-md"
                                          Style="width:100%"
                                          name="municipality"
                                          value={this.state.municipality}
                                          onChange={this.onChange}/>


                        </Form.Group>


                        <Form.Group className="  border">
                            <Form.Control placeholder="category"
                                          type="text"
                                          className=" form-control-md "
                                          name="category"
                                          Style="width:100%"
                                          value={this.state.category}
                                          onChange={this.onChange}/>


                        </Form.Group>
                            <Button className="login" type="submit" Style="width:100%">
                                Search
                            </Button>

                        </Form>
                    </div>
                </div>
            </div>





        );
    }
}

export default Search;
