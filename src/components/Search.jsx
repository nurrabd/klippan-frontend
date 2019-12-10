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
                    <div className="col-md-10  ">

                        <Form className=" "  onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-5"><Form.Group>


                                <Form.Control placeholder="municipality"
                                              type="text"
                                              className=" form-control-lg"
                                              Style="width:100%"
                                              name="municipality"
                                              value={this.state.municipality}
                                              onChange={this.onChange}/>


                            </Form.Group></div>
                            <div className="col-5   ">
                                <Form.Group className="   ">
                                    <Form.Control placeholder="category"
                                                  type="text"
                                                  className=" form-control-lg "
                                                  name="category"
                                                  Style="width:100%; "
                                                  value={this.state.category}
                                                  onChange={this.onChange}/>


                                </Form.Group>
                            </div>
                            <div className="col-2">

                                <Button className="login" type="submit" Style="width:70%; height:70%; margin-top:2px">
                                    Search
                                </Button>
                            </div>
                        </div>






                        </Form>
                    </div>
                </div>
            </div>





        );
    }
}

export default Search;
