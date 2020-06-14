import React, { Component } from "react";
import NavPizz from "./NavPizz";
import Hero from "./Hero";
import Banner from "./Banner";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Services from "./Services.jsx";
import MonthPizza from "./MonthPizza";
import UpUp from "./UpUp";

class PizzaHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavPizz />
        <Hero heroProp={"defaultHero"}>
          <Banner
            heroProp={"defaultHero"}
            titel={"Bandit Pizza"}
            subtitel={"Our Pizza from € 5.00"}
          >
            <Link to="/ThePizzas" className={"btn-primary"}>
              The Pizzas
            </Link>
          </Banner>
        </Hero>
        <Services />
        <MonthPizza />
        {/* <UpUp/> */}
      </div>
    );
  }
}

export default PizzaHome;
