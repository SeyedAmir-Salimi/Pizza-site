import React, { Component } from 'react';
import { PizzeContext, PizzeConsumer } from '../Contex';
import AlertRemove from './AlertRemove';
import paypal from '../Pizza/paypal.png'

class CartTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AlertClearAll: false,
            paypal: false,
        }
    }
    static contextType = PizzeContext;
    render() {
        const { cartSubtotal, cartTax, CartTotal, clearAll } = this.context;
        let Number = 0;
        let colorNum = "";
        if (cartSubtotal <= 60) {
            Number = "10%";
            colorNum = "green";
        } else {
            Number = "15%"
            colorNum = "red";
        }
        return (
            <div className="CartTotal">
                {this.state.AlertClearAll ?
                    <AlertRemove titel="Are You Sure To Want Clear The Cart?" Yes={() => { clearAll() }} NO={() => this.setState({ AlertClearAll: false })} />
                    : ""}

                <button onClick={() => this.setState({ AlertClearAll: true })}>Clear Cart</button>
                <h5>Subtotal: €{cartSubtotal}</h5><br />
                <h5 className="colorNum"><h5 style={{ color: colorNum }}>{Number}</h5> Tax: €{cartTax}</h5>
                <h4 >Total Price: €{CartTotal}</h4>
                <img src={paypal} alt="paypal" onClick={()=> {this.setState({paypal:true}) ; setTimeout(()=> {this.setState({paypal:false}); { clearAll() }},3000); }}/>
                {this.state.paypal ?
                    <span className="alert">
                        <span className="alert-Green">
                            <article style={{fontWeight: "bold"}}>You Pay <strong style={{color: "red"}}> €{CartTotal} </strong>With Sucsses, Thanks</article>
                        </span>
                    </span> : ""}
            </div>
        );
    }
}

export default CartTotal;