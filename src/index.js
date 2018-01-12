import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        };
    }

    componentWillMount() {
        setInterval(()=>{
            this.setState({timer: this.state.timer + 1});
        }, 100);
    }

    render() {
        return (
            <div>
                <h1>App component</h1>
                {this.state.timer < 50 ? <NewComponent text="Hello from App"/> : null}
                <p>{this.state.timer}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
