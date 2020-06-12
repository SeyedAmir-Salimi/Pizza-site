import React, { Component } from 'react'
import { PizzeContext } from './Contex';
import Loading from './Loading'
import MonthPizzaPage from './MonthPizzaPage'

export default class MonthPizza extends Component {
    static contextType = PizzeContext;
    render() {

        let { loading, MonthPizza: pizzas } = this.context;
        pizzas = this.context.month.map(pizza => {
            return <MonthPizzaPage key={pizza.id} pizza={pizza}/>
        })

        return (
            <section className="featured-rooms">
                <section className="section-title">
                    <h4>Pizzas Of The Month</h4>
                    <div></div>
                </section>
                <div className="MonthPizza">
                    {loading ? <Loading /> : pizzas}
                </div>


            </section>
        )
    }
}
