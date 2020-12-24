import React from 'react'
import { Link } from "react-router-dom";
import Hero from './Hero'
import NavPizz from './NavPizz'
import Banner from './Banner'

export default function Error(props) {
    return (
        <div>
            <NavPizz />
            <Hero heroProp={"defaultHero"}>
                <Banner  titel={"Error"} subtitel={`Your URL (${props.location.pathname}) Was Not Found`}>
                    <Link to="/PizzaHome" className={"btn-primary"}>Home</Link>
                </Banner>
            </Hero>
            
        </div>
    )
}
