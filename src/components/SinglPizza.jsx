import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PizzeContext } from './Contex';
import NavPizz from './NavPizz';
import Error from './Error'
import { StyledHero } from './StyledHero'
import Banner from './Banner'
import { GiShoppingCart } from "react-icons/gi";
import Alert from './Cart/Alert'

export default class SinglPizza extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            alertAddToCart: false,
            alertJustAdd: false,

        }
    }

    static contextType = PizzeContext;
    render() {
        const { getPizza } = this.context;
        const pizza = getPizza(this.state.slug)
        console.log(pizza);
        return (
            <div>
                {!pizza ? <Error /> :
                    <div className="single-room">
                        <NavPizz />
                        <StyledHero HeroImage={pizza.image}>
                            <Banner titel={`Pizza ${pizza.name}`} subtitel={`€ ${pizza.price}`}>
                                <Link to="/ThePizzas" className={"btn-primary"}>The Pizzas</Link>
                            </Banner>
                        </StyledHero>
                        <div className="pizza-page-me">
                            <div className="pizza-page-me-info">
                                <h3>Info:</h3>
                                <h6>Price: €{pizza.price} </h6>
                                <h6>Extras:</h6>
                                <ul>
                                    {pizza.extras.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })}
                                </ul>
                                <div>
                                    {pizza.inCarta ?
                                        <GiShoppingCart className="GiShoppingCart" onClick={() => {
                                            this.setState({ alertJustAdd: true }); setTimeout(() => {
                                                this.setState({
                                                    alertJustAdd: false
                                                })
                                            }, 1200)
                                        }} />
                                        :
                                        <button
                                            onClick={() => {
                                                this.context.addToCart(pizza.id); this.setState({ alertAddToCart: true });
                                                setTimeout(() => {
                                                    this.setState({
                                                        alertAddToCart: false
                                                    })
                                                }, 1200)
                                            }}
                                        >Add To Cart
                                        </button>
                                    }
                                </div>
                            </div>
                            <div>{this.state.alertAddToCart ? <Alert ClassAlert="alert-Green" titel="The Pizza Added To The Cart" /> : ""}</div>
                            <div>{this.state.alertJustAdd ? <Alert ClassAlert="alert-Red" titel="The Pizza is Already in The Cart" /> : ""}</div>
                            <div className="pizza-page-me-images">
                                <img src={pizza.image} alt={pizza.image} />
                            </div>

                        </div>
                    </div>
                }
            </div>
        );
    }
}

