import React, { Component } from 'react';
import NavPizz from '../NavPizz'
import { PizzeContext, PizzeConsumer } from '../Contex';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IoIosTrash, IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from "react-icons/io";
import Hero from './../Hero'
import Banner from './../Banner'
import { StyledHero } from '../StyledHero'
import CartBack from '../Pizza/cart-fun-art.jpg'
import CartTotal from './CartTotal'



class MyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertRemove: false,
            RemoveYes: false,

        }
    }
    static contextType = PizzeContext;
    render() {
        return (
            <div>
                <NavPizz />
                <PizzeConsumer>
                    {value => {
                        if (value.cart > 0) {
                            return (

                                <div>
                                    {this.context.pizzas.filter(pizza => pizza.inCarta === true).map((pizza) =>
                                        <div className="MyCartPage">
                                            <img src={pizza.image} alt={pizza.name} />
                                            <h5>Pizza {pizza.name}</h5>
                                            <h5>Price: €{pizza.price}</h5>
                                            <div className="Cart-Count">
                                                <section>
                                                    <button className="ArrowUp" onClick={() => { this.context.addCount(pizza.id) }} >
                                                        <IoIosArrowDropupCircle style={{ fontSize: "1.2rem" }} />
                                                    </button>
                                                    <h5>Quantita: {pizza.count}</h5>
                                                    <button className="ArrowDown" onClick={() => { this.context.removeCount(pizza.id) }} disabled={pizza.count === 1}>
                                                        <IoIosArrowDropdownCircle style={{ fontSize: "1.2rem" }} />
                                                    </button>
                                                </section>
                                            </div>
                                            <IoIosTrash className="Trash"
                                                onClick={() => {
                                                    this.context.removeFromCart(pizza.id); this.setState({ alertRemove: true }); setTimeout(() => {
                                                        this.setState({
                                                            alertRemove: false
                                                        })
                                                    }, 1000)
                                                }} />
                                            <h5>Total: €{pizza.total}</h5>
                                            {this.state.alertRemove ?
                                                <span className="alert">
                                                    <span className="alert-Red">
                                                        <article>You Delete The Pizza</article>
                                                    </span>
                                                </span> : ""}
                                        </div>
                                    )}
                                    <CartTotal />
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <StyledHero HeroImage={CartBack} style={{ paddingTop: "8rem" }}>
                                        <Banner titel={"Your cart Is Empty"} subtitel={`o0o0ps`}>
                                            <Link to="/ThePizzas" className={"btn-primary"}>The Pizzas</Link>
                                        </Banner>
                                    </StyledHero>
                                    {this.state.alertRemove ?
                                        <span className="alert">
                                            <span className="alert-Red">
                                                <article>You Delete The Pizza</article>

                                            </span>
                                        </span> : ""}
                                </div>
                            )
                        }
                    }}
                </PizzeConsumer>
            </div>
        );
    }
}

export default MyCart;
