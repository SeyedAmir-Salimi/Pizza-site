import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="alert">
                <h3 className={this.props.ClassAlert}>{this.props.titel}</h3>
            </div>);
    }
}

export default Alert;

