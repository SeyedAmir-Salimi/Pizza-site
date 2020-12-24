import React, { Component } from 'react';
import { PizzeContext } from './Contex';
import { IoMdPizza } from "react-icons/io";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {  Link } from "react-router-dom";

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transition: "all 1s linear",
            opacity: 1,
            left: 0,
            timeout: true,
            time: 4000,
            spiner: {
                spinerLeft: 85,
                scaleX: "scaleX(-1)",
                opacity: true,
            }
        }
    }
    static contextType = PizzeContext;

    nextHandle = () => {
        if (this.state.left <= 842) {
            this.setState({
                left: this.state.left + 84.4,
            })
        } else {
            this.setState({
                left: 0,
            })
        }
    }


    SpinerHandleNext = () => {
        this.setState({
            spiner: {
                opacity: true,
                spinerLeft: -10,
                scaleX: "scaleX(-1)",
            }
        })
    }
    SpinerHandleNextTimeout = () => {
        setTimeout(() => {
            this.setState({
                spiner: {
                    spinerLeft: 85,
                    scaleX: "scaleX(-1)",
                    opacity: true,
                }
            })
        }, 1500)
    }

    prevHandle = () => {
        if (this.state.left > 0) {
            this.setState({
                left: this.state.left - 84.4
            })
        } else {
            this.setState({
                left: 843.9999999999999
            })
        }
    }

    render() {
        return (
            <div className="slideshowDiv">
                <span className="IoMdPizza-span">
                    <p onClick={() => { this.prevHandle(); }}><MdSkipPrevious /></p>
                    <p onClick={() => { this.setState({ left: 0 }) }} style={{ opacity: this.state.left < 84.4 ? "1" : "0.3" }}><IoMdPizza /></p>
                    <p onClick={() => { this.setState({ left: 84.4 }) }} style={{ opacity: this.state.left > 84 && this.state.left < 168.08 ? "1" : "0.3" }}><IoMdPizza /></p>
                    <p onClick={() => { this.setState({ left: 168.8 }) }} style={{ opacity: this.state.left > 168.08 && this.state.left < 253.2 ? "1" : "0.3" }}><IoMdPizza /></p>
                    <p onClick={() => { this.setState({ left: 253.20000000000002 }) }} style={{ opacity: this.state.left > 253 && this.state.left < 337 ? "1" : "0.3" }}><IoMdPizza /></p>
                    <p onClick={() => { this.setState({ left: 337.6 }) }} style={{ opacity: this.state.left > 337 && this.state.left < 422 ? "1" : "0.3" }}><IoMdPizza /></p>
                    <p onClick={() => { this.setState({ left: 422 }) }} style={{ opacity: this.state.left > 421 && this.state.left < 506 ? "1" : "0.3" }}><IoMdPizza /></p>
                    <p onClick={() => { this.setState({ left: 506.4 }) }} style={{ opacity: this.state.left > 506 && this.state.left < 590 ? "1" : "0.3" }}><IoMdPizza /></p>
                    <p onClick={() => { this.setState({ left: 590.8 }) }} style={{ opacity: this.state.left > 590 && this.state.left < 675 ? "1" : "0.3" }}><IoMdPizza /></p>
                    <p onClick={() => { this.setState({ left: 675.1999999999999 }) }} style={{ opacity: this.state.left > 675 && this.state.left < 759 ? "1" : "0.3" }}><IoMdPizza /></p>
                    <p onClick={() => { this.setState({ left: 759.5999999999999 }) }} style={{ opacity: this.state.left > 759 && this.state.left < 843 ? "1" : "0.3" }}><IoMdPizza /></p>
                    <p onClick={() => { this.setState({ left: 843.999999999999 }) }} style={{ opacity: this.state.left > 843 && this.state.left < 927 ? "1" : "0.3" }}><IoMdPizza /></p>
                    <p onClick={() => { this.nextHandle()}}><MdSkipNext /></p>
                </span>
                <div className="SlideShow" onClick={this.Lefthandler}>
                    {this.context.pizzas.map(pizza =>
                        <div key={pizza.id} className="SlideShow-Down" style={{ left: -this.state.left + "rem", opacity: this.state.opacity, transition: this.state.transition }}>
                            <div onClick={this.TimeOutHandler}>
                                <img src={pizza.image} alt={pizza.name} />
                                <p ><Link to={`/ThePizzas/${pizza.slug}`} className="P-Link">{pizza.name}</Link></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>)
    }
}

export default SlideShow;
