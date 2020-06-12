import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { PizzeContext } from './Contex';
import Alert from './Cart/Alert';
import UpUp from './UpUp';

class MonthPizzaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertAddToCart: false,
            alertJustAdd: false,
        }
    }
    static contextType = PizzeContext;
    render() {
        const { name, image, price, slug, inCarta, id } = this.props.pizza
        return (
            <article className="room">
                <div>{this.state.alertAddToCart ? <Alert ClassAlert="alert-Green" titel="The Pizza Added To The Cart" /> : ""}</div>
                <div>{this.state.alertJustAdd ? <Alert ClassAlert="alert-Red" titel="The Pizza is Already in The Cart" /> : ""}</div>
                <div className="img-container">
                    <img src={image} alt={name} />
                    <div className="price-top">
                        <h6>€{price}</h6>
                    </div>
                    <div className="ShoppingCart">
                        {inCarta ?
                            <GiShoppingCart style={{ fontSize: "2rem" }} onClick={() => {
                                this.setState({ alertJustAdd: true }); setTimeout(() => {
                                    this.setState({
                                        alertJustAdd: false
                                    })
                                }, 1200)
                            }} />
                            :
                            <button
                                onClick={() => {
                                    this.context.addToCart(id); this.setState({ alertAddToCart: true });
                                    setTimeout(() => {
                                        this.setState({
                                            alertAddToCart: false
                                        })
                                    }, 1000)
                                }}
                            >Add To Cart
                            </button>
                        }
                    </div>
                    <h5 className="room-info">{name}</h5>
                    <div>
                        <Link to={`/ThePizzas/${slug}`} className="btn-primary room-link">{name}</Link>
                    </div>
                </div>
                <UpUp/>
            </article>
        );
    }
}

export default MonthPizzaPage;