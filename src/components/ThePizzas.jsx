import React, { Component } from "react";
import { PizzeContext } from "./Contex";

import MonthPizzaPage from "./MonthPizzaPage";
import NavPizz from "./NavPizz";
import Hero from "./Hero";

import Banner from "./Banner";


export default class ThePizzas extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      value: "All pizzas",
    };
  }
  ChangeValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  static contextType = PizzeContext;
  render() {
    let {
      MonthPizza: pizzas,
      Funghi,
      Prosciutto,
      month,
    } = this.context;
    pizzas = this.context.pizzas.map((pizza) => {
      return <MonthPizzaPage key={pizza.id} pizza={pizza} />;
    });
    Funghi = this.context.pizzas
      .filter((pizza) => pizza.Funghi === true)
      .map((pizza) => {
        return <MonthPizzaPage key={pizza.id} pizza={pizza} />;
      });
    Prosciutto = this.context.pizzas
      .filter((pizza) => pizza.Prosciutto === true)
      .map((pizza) => {
        return <MonthPizzaPage key={pizza.id} pizza={pizza} />;
      });
    month = this.context.pizzas
      .filter((pizza) => pizza.month === true)
      .map((pizza) => {
        return <MonthPizzaPage key={pizza.id} pizza={pizza} />;
      });

    return (
      <div>
        <NavPizz />
        <Hero heroProp={"roomsHero"}>
          <Banner titel={"The Pizzas"}>
            <span className="SelectBox">
              {/* <Link to="/" className={"btn-primary"}>
                Home
              </Link> */}
              <button className="btn-primary" onClick={()=> this.context.SortPizzaByPrice("name")}>Sort By Name</button>
              <button className="btn-primary" onClick={()=> this.context.SortPizzaByPrice("price")}>Sort By Price</button>
              <br />
              <select onClick={this.ChangeValue} className="btn-primary" >
                {/* <option selected disabled>Types Of The Pizzas</option> */}
                <option value="All pizzas">All Pizzas</option>
                <option value="Prosciutto">Prosciutto</option>
                <option value="Funghi">Mushrooms</option>
                <option value="month">Month</option>
              </select><br/>
            </span>
          </Banner>
        </Hero>
        <section className="featured-rooms">
          {/* <SlideShow /> */}
          <div className="featured-rooms-center">
            {this.state.value === "All pizzas" || this.state.value === undefined
              ? pizzas
              : ""}
            {this.state.value === "Prosciutto" ? Prosciutto : ""}
            {this.state.value === "Funghi" ? Funghi : ""}
            {this.state.value === "month" ? month : ""}
          </div>
        </section>
      </div>
    );
  }
}
