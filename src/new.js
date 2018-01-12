import React, { Component } from 'react';

export default class NewComponent extends Component {

    constructor(props) {
        super(props);
        console.log('Constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return (
            <div style={{'backgroundColor': 'red'}}>
                <h3>New Component</h3>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
