import React, { Component } from 'react';

class UpUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    render() {
        return (
            <button className="upup" onClick={this.scrollTop}>Up</button>
        );
    }
}

export default UpUp;