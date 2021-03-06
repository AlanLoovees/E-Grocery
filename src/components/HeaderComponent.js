import React, { Component } from "react";
import { Navbar, NavbarBrand, NavItem, Nav, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { LocalForm, Control, Errors } from "react-redux-form";
import cookie from "react-cookies";


const isPincode = (val) => val && val.length === 6;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartOpen: false,
            isLocModal: false,
            location: null,
            cart: null
        };
        this.toggleCartModal = this.toggleCartModal.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.toggleLocModal = this.toggleLocModal.bind(this);
    }

    componentDidMount() {
        this.setState({
            location: cookie.load('location'),
            cart: cookie.load('cart')
        })
    }

    toggleCartModal() {
        this.setState({
            isCartOpen: !this.state.isCartOpen,
        });
    }

    toggleLocModal() {
        this.setState({
            isLocModal: !this.state.isLocModal
        })
    }

    changeLocation(values) {
        this.setState({
            location: values.pincode,
            isLocModal: false
        })
        cookie.save('location', values.pincode)
    }

    render() {
        return (
            <>
                <Navbar className="navbar-dark fixed-top" expand="md">
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                className="nav-link ml-auto d-none d-md-block"
                                to="/home"
                                onClick={this.toggleLocModal}
                            >
                                {this.state.location ? this.state.location : 'Enter pincode'}
                                {" "}
                                <span className="fa fa-map-marker fa-lg"></span>
                            </NavLink>
                            <NavLink
                                className="nav-link ml-auto d-sm-none"
                                to="/home"
                                onClick={this.toggleLocModal}
                            >
                                <span className="fa fa-map-marker fa-lg"></span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarBrand className="mx-auto" href="/home">
                        E-Grocery
                    </NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                className="nav-link ml-auto d-none d-md-block"
                                to="/home"
                                onClick={this.toggleCartModal}
                            >
                                Cart{" "}
                                <span className="fa fa-shopping-cart fa-lg"></span>
                            </NavLink>
                            <NavLink
                                className="nav-link ml-auto d-sm-none"
                                to="/home"
                                onClick={this.toggleCartModal}
                            >
                                <span className="fa fa-shopping-cart fa-lg"></span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Modal
                    isOpen={this.state.isCartOpen}
                    toggle={this.toggleCartModal}
                >
                    <ModalHeader toggle={this.toggleCartModal}>
                        Your Cart
                    </ModalHeader>
                    <ModalBody>Cart is empty!</ModalBody>
                </Modal>
                <Modal
                    isOpen={this.state.isLocModal}
                    toggle={this.toggleLocModal}
                >
                    <ModalHeader>Your Pincode</ModalHeader>
                    <ModalBody>
                        <LocalForm
                            onSubmit={(values) => this.changeLocation(values)}
                        >
                            <Row className="form-group">
                                <Label htmlFor="pincode" md={12}>
                                    Pincode
                                </Label>
                                <Col md={12}>
                                    <Control.text
                                        model=".pincode"
                                        id="pincode"
                                        name="pincode"
                                        placeholder={this.state.location}
                                        className="form-control"
                                        validators={{
                                            isPincode,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".pincode"
                                        show="touched"
                                        messages={{
                                            isPincode: "Enter a valid pincode",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="Submit" color="primary">
                                        Save
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;