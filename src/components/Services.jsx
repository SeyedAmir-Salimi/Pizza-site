import React, { Component } from 'react';
import { FaPizzaSlice, FaBeer, FaMoneyBillAlt, FaWineGlassAlt } from 'react-icons/fa';
import SlideShow from './SlideShow'

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaPizzaSlice />,
                title: "Pizza",
                info: "The best Pizza That You Can Imagine"
            },
            {
                icon: <FaBeer />,
                title: "Beer",
                info: "The Most Delicious Beer You've Ever Drunk"
            },
            {
                icon: <FaWineGlassAlt />,
                title: "Wine",
                info: "The Most Fantastic Wine That Made From Our Fermented Grapes"
            },
            {
                icon: <FaMoneyBillAlt />,
                title: "best offer",
                info: "With 3 pizzas We Give You A Margherita Pizza, An Offer That You Can't Tefuse"
            }
        ]
    }
    render() {
        return (
            <div>
                <div className="services">
                    <section className="section-title">
                        <h4>Our Services</h4>
                        <div></div>
                    </section>
                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;