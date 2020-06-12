import React, { Component } from 'react'
import { PizzeContext } from './Contex';
import Loading from './Loading'
import MonthPizzaPage from './MonthPizzaPage'
import NavPizz from './NavPizz'
import Hero from './Hero'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from './Banner'
import SlideShow from './SlideShow'
import SlideShow2 from './SildeShow2'

export default class ThePizzas extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            value: undefined
        }
    }
    ChangeValue = e => {
        this.setState({
            value: e.target.value
        })
    }
    static contextType = PizzeContext;
    render() {
        console.log(this.context);
        let { loading, MonthPizza: pizzas, Funghi, Prosciutto, month } = this.context;
        pizzas = this.context.pizzas.map(pizza => {
            return <MonthPizzaPage key={pizza.id} pizza={pizza} />
        })
        Funghi = this.context.pizzas.filter(pizza => pizza.Funghi === true).map(pizza => {
            return <MonthPizzaPage key={pizza.id} pizza={pizza} />
        })
        Prosciutto = this.context.pizzas.filter(pizza => pizza.Prosciutto === true).map(pizza => {
            return <MonthPizzaPage key={pizza.id} pizza={pizza} />
        })
        month = this.context.pizzas.filter(pizza => pizza.month === true).map(pizza => {
            return <MonthPizzaPage key={pizza.id} pizza={pizza} />
        })

        return (
            <div>
                <NavPizz />
                <Hero heroProp={"roomsHero"}>
                    <Banner titel={"The Pizzas"} subtitel={this.state.value}>
                        <Link to="/" className={"btn-primary"}>Home</Link><br />
                        <span className="SelectBox">
                            <select onClick={this.ChangeValue}>
                                {/* <option selected disabled>Types Of The Pizzas</option> */}
                                <option value="pizzas">All Pizzas</option>
                                <option value="Prosciutto">Prosciutto</option>
                                <option value="Funghi">Funghi</option>
                                <option value="month">Month</option>
                            </select>
                        </span>
                    </Banner>
                </Hero>
                <section className="featured-rooms">
                <SlideShow />
                    <div className="featured-rooms-center">
                        {this.state.value === "pizzas" || this.state.value === undefined ? pizzas : ""}
                        {this.state.value === "Prosciutto" ? Prosciutto : ""}
                        {this.state.value === "Funghi" ? Funghi : ""}
                        {this.state.value === "month" ? month : ""}

                    </div>
                </section>
            </div>
        )
    }
}
