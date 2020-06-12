import React, { Component } from 'react'
import items from './data'
import iiitems from './data'

const PizzeContext = React.createContext();


class PizzeProvider extends Component {
    state = {
        pizzas: [],
        sortedPizza: [],
        month: [],
        inCarta: [],
        cart: 0,
        cartSubtotal: 0,
        cartTax: 0,
        CartTotal: 0,
        loading: true,

    };

    scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    componentDidMount() {
        let pizzas = this.formatData(items);
        let HarryQuizs = this.formatData2(iiitems);
        let inCarta = pizzas.filter(pizza => pizza.inCarta === true);
        let month = pizzas.filter(pizza => pizza.month === true);
        let localS = localStorage;
        this.setState({
            pizzas,
            month,
            sortedPizza: pizzas,
            inCarta,
            loading: false,
            HarryQuizs,
            Localstorge: localS,
        });
    }

 

    formatData(items) {
        let tempItem = items.map(item => {
            let id = item.sys.id;
            let pizza = { ...item.fields, id }
            return pizza;
        });
        return tempItem;
    }

    formatData2(iiitems) {
        let tempiiitems = iiitems.map(iiitem => {
            let id = iiitem.sys.id;
            let HarryQuizs = { ...iiitem.fields, id }
            return HarryQuizs;
        });
        return tempiiitems;
    };
    getItem = id => {
        const pizza = this.state.pizzas.find(item => item.id === id);
        return pizza;
    }
    getPizza = (slug) => {
        let tempPizzas = [...this.state.pizzas];
        const pizza = tempPizzas.find(pizza => pizza.slug === slug);
        return pizza;
    }


    ReloadQuizPage = () => {
        window.location.reload();
    }


    addToCart = id => {
        let tempPizza = [...this.state.pizzas];
        const index = tempPizza.indexOf(this.getItem(id));
        const pizza = tempPizza[index];
        pizza.inCarta = true;
        this.state.cart = this.state.cart + 1;
        pizza.count = 1;
        const price = pizza.price;
        pizza.total = price * pizza.count;
        this.setState(() => {
            return { pizzas: tempPizza, inCarta: [...this.state.inCarta], pizza };
        },
            () => { this.addTotals(); }
        )
    }


    addTotals = () => {
        let CartsubTT = 0;
        this.state.pizzas.filter(pizza => pizza.inCarta === true).map(item => (CartsubTT += item.total));
        let tempTax = 0;
        if (CartsubTT <= 60) {
            tempTax = CartsubTT * 0.1
        } else {
            tempTax = CartsubTT * 0.15
        };
        const tax = parseFloat(tempTax.toFixed(2));
        const CartTotal = CartsubTT + tax;
        this.setState(() => {
            return {
                cartSubtotal: CartsubTT,
                cartTax: tax,
                CartTotal: CartTotal
            }
        })
    }
    clearAll = () => {
        this.setState(() => {
            return { inCarta: [], cart: 0 };
        }, () => {
            this.componentDidMount();
        })
    }

    removeFromCart = id => {
        let tempPizza = [...this.state.pizzas];
        const index = tempPizza.indexOf(this.getItem(id));
        const pizza = tempPizza[index];
        pizza.inCarta = false;
        this.state.cart = this.state.cart - 1;
        pizza.count = 0;
        this.setState(() => {
            return { pizzas: tempPizza, inCarta: [...this.state.inCarta], pizza };
        },
            () => { this.addTotals(); }
        )
    }



    addCount = id => {
        let tempPizza = [...this.state.pizzas];
        const index = tempPizza.indexOf(this.getItem(id));
        const pizza = tempPizza[index];
        pizza.count = pizza.count + 1;
        const price = pizza.price;
        pizza.total = price * pizza.count;
        this.setState(() => {
            return { pizzas: tempPizza, inCarta: [...this.state.inCarta], pizza };
        },
            () => { this.addTotals(); }
        )
    }
    removeCount = id => {
        let tempPizza = [...this.state.pizzas];
        const index = tempPizza.indexOf(this.getItem(id));
        const pizza = tempPizza[index];
        pizza.count = pizza.count - 1;
        const price = pizza.price;
        const tempTotal = price * pizza.count;
        pizza.total = tempTotal;
        this.setState(() => {
            return { pizzas: tempPizza, inCarta: [...this.state.inCarta], pizza };
        },
            () => { this.addTotals(); }
        )
    }


    render() {
        return (
            <PizzeContext.Provider value={{
                ...this.state,
                getPizza: this.getPizza,
                addToCart: this.addToCart,
                removeFromCart: this.removeFromCart,
                addCount: this.addCount,
                removeCount: this.removeCount,
                addTotals: this.addTotals,
                clearAll: this.clearAll,
            }}>
                {this.props.children}
            </PizzeContext.Provider>
        )
    }
}

const PizzeConsumer = PizzeContext.Consumer;

export { PizzeProvider, PizzeConsumer, PizzeContext };