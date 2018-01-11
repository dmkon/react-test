import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'test'
        };
    }

    inputOnChange(event) {
        console.log(event.target.value);
        const text = event.target.value;
        this.setState({text: text});
    }

    render() {
        return (
            <div  className="test">
                <h1>Hello</h1>
                <input type="text" value={this.state.text} onChange={this.inputOnChange.bind(this)} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
