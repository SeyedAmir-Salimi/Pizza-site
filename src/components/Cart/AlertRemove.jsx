import React, { Component } from 'react';

class AlertRemove extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="alert">
                <div className="alert-Red">
                    <h3>{this.props.titel}</h3>
                    <div className="alert-Question">
                        <button onClick={this.props.Yes }>Yes</button>
                        <button onClick={this.props.NO}>No</button>
                    </div>
                </div>
            </div>);
    }
}

export default AlertRemove;

