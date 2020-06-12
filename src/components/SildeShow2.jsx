import React, { Component } from 'react';
import { PizzeContext } from './Contex';

class SlideShow2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzas: [],
            indLeft: 0,
            indCenter: 1,
            indRight: 2,
            left: {
                image: undefined,
                name: undefined
            },
            center: {
                image: undefined,
                name: undefined
            },
            right: {
                image: undefined,
                name: undefined
            },

        }
    }
    static contextType = PizzeContext;
    setind = () => {
        if (this.state.indRight < 43) {
            this.setState({
                indLeft: this.state.indCenter,
                indCenter: this.state.indRight,
                indRight: this.state.indRight + 1,
            })
        } else {
            this.setState({
                indLeft: 42,
                indCenter: 43,
                indRight: 0,
            })
        }
    }
    componentDidMount(){
        this.setind();
    }


    setname = () => {
        this.setState({
            left: {
                image: this.context.pizzas[this.state.indLeft].image,
                name: this.context.pizzas[this.state.indLeft].name
            },
            center: {
                image: this.context.pizzas[this.state.indCenter].image,
                name: this.context.pizzas[this.state.indCenter].name
            },
            right: {
                image: this.context.pizzas[this.state.indRight].image,
                name: this.context.pizzas[this.state.indRight].name
            },
        }, () => this.setind()
        )
    }

    render() {

        return (
            <div className="SlideShow2">
                <span className="SlideShow2-LR">
                    <img src={this.state.left.image} alt={this.state.left.name} />
                    <p style={{ fontWeight: "bolder", color: "grey" }}>{this.state.left.name}</p>
                </span>
                <span className="SlideShow2-C">
                    <img src={this.state.center.image} alt={this.state.center.name} />
                    <p style={{ fontWeight: "bolder" }}>{this.state.center.name}</p>
                </span>
                <span className="SlideShow2-LR">
                    <img src={this.state.right.image} alt={this.state.right.name} />
                    <p style={{ fontWeight: "bolder", color: "grey" }}>{this.state.right.name}</p>
                </span>
                <button onClick={this.setname}>Next</button>
            </div>
        );
    }
}

export default SlideShow2;