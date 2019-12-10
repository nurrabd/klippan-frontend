import React, {Component} from 'react';
import {Navbar,  Nav, NavItem, NavDropdown} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (

            <Navbar collapseOnSelect expand="xl" bg="light" variant="light"  Style="width:100%; ">
                <Navbar.Brand href="/">Klippan </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">


                        {
                            /*
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>

                            </NavDropdown>
<Nav.Link href="/Registration">Registration</Nav.Link>
                             */
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link href="/NewAdds"  Style="padding-left:70px">
                            <i className="fas fa-plus fa-2x"></i>
                            <br/>
                            </Nav.Link>
                        <Nav.Link href="/"  Style="padding-left:70px">
                            <i className="fas fa-inbox fa-2x"></i>
                        </Nav.Link>

                        <Nav.Link href="/logIn" Style="padding-left:70px" >
                            <i className="fas fa-user fa-2x">

                            </i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        );
    }
}

export default Header;
