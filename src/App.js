import React, { Component } from 'react';
import '../src/App.css'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import PizzaHome from './components/PizzaHome'
import SinglPizza from './components/SinglPizza'
import ThePizzas from './components/ThePizzas'
import Error from './components/Error'
import MyCart from './components/Cart/MyCart'
import NavPizz from './components/NavPizz'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Services from './components/Services.jsx';
import MonthPizza from './components/MonthPizza';
import UpUp from './components/UpUp'
import Aboutus from './components/AboutUs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    }

  }
  // FireBase //



  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div>
              <NavPizz />
              <Hero heroProp={"defaultHero"}>
                <Banner heroProp={"defaultHero"} titel={"Bandit Pizza"} subtitel={"Our Pizza from € 5.00"}><Link to="/ThePizzas" className={"btn-primary"}>The Pizzas</Link></Banner>
              </Hero>
              <Services />
              <MonthPizza />
              {/* <UpUp /> */}
            </div>
          </Route>

          <Route exact path="/ThePizzas" component={ThePizzas} />
          <Route exact path="/ThePizzas/:slug" component={SinglPizza} />
          <Route exact path="/MyCart" component={MyCart} />
          <Route exact path="/AboutUS" component={Aboutus} />
          <Route component={Error} />
        </Switch>

      </div >
    );
  }
}
export default App;
