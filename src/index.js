import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            array: [
                {
                    id: 1,
                    text: 'Item 1'
                },
                {
                    id: 2,
                    text: 'Item 2'
                },
                {
                    id: 3,
                    text: 'Item 3'
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>App component</h1>
                <NewComponent array={this.state.array}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
