import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import { GiBandit, GiShoppingCart } from 'react-icons/gi';
import { PizzeContext, PizzeConsumer } from './Contex';

class NavPizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }
    ToggleHandl = () => { this.setState({ isOpen: !this.state.isOpen }) }
    static contextType = PizzeContext;
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <GiBandit className="GiBandit" style={{ fontSize: 100 }} />
                            <button className="nav-btn" onClick={this.ToggleHandl}><FaAlignRight className={this.state.isOpen ? "nav-icon-open" : "nav-icon"} /></button>
                            <ul className="nav-links">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/ThePizzas">The Pizzas</Link>
                                </li>
                                <PizzeConsumer>
                                    {value => {
                                        if (value.cart > 0) {
                                            return (
                                                <li>
                                                    <Link to="/MyCart">
                                                        <p style={{ fontWeight: "bold"  , color: "red" }}>My Cart</p>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li>
                                                    <Link to="/MyCart">
                                                        <p style={{ fontWeight: "bold"}}>My Cart</p>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    }}
                                </PizzeConsumer>
                            </ul>
                        </div>
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-disply"}>
                            <li><Link to="/PizzaHome">Home</Link></li>
                            <li><Link to="/ThePizzas">ThePizzas</Link></li>
                            <li><Link to="/MyCart">MyCart</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavPizz;