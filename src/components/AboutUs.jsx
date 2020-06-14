import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { GiBandit, GiShoppingCart } from "react-icons/gi";
import { PizzeContext } from "./Contex";
import NavPizz from "./NavPizz";
import Hero from "./Hero";
import Banner from "./Banner";
import LogoWhite from '../images/LogoWhite.svg'

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavPizz />
        <Hero heroProp={"HeroGray"}>
          <div className="AboutUS">
            <h1>
              {" "}
              <img src={LogoWhite} alt="LogoWhite" style={{ width: "4rem" , marginRight : "1rem"}} /> {"Our History"}
            </h1>
            <div></div>
            <p>{`It all started in 1958 in Wichita USA, when brothers Dan and Frank Carney opened the world's first Bandit Pizza restaurant by borrowing $600 from their mum. It was the start of the biggest pizza name in the world, and in 1973, that fantastic pizza came to the UK.`}</p>
            <p>{`What started out as a single Hut in Islington, London is now over 700 Restaurants and Delivery outlets up and down the UK, and guess what, the pizza is still the best in town. Since we came to the UK in 1973, we've been proud of our service and great food. We brought Deep Pan to the UK and we invented Stuffed Crust and Cheesy Bites. And we're not done there, we're still leading the way with our innovation, watch this space for future exciting products.`}</p>
            <p>{`We know what you want and we've made it faster and easier for you to get it at`}</p>
          </div>
        </Hero>
      </div>
    );
  }
}

export default AboutUs;
