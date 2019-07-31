import React, {Component } from 'react';

class title extends Component {
    render() {
        return (
            <div className="section-title">
            <h4>{this.props.title}</h4>
            </div>
        )
    }
}

export default title;