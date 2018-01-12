import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>App component</h1>
                <NewComponent text="Hello from App"/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
