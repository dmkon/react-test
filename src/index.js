import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    static propTypes = {
        btnText: React.PropTypes.string.isRequired,
        h1text: React.PropTypes.string.isRequired,
        newArray: React.PropTypes.array.isRequired
    }

    static defaultProps = {
        btnText: 'Default'
    }

    btnOnClick(event) {
        console.log('props', event.target);
    }

    render() {
        console.log('array', this.props.newArray);
        return (
            <div style={{'backgroundColor': 'red'}} className="test">
                <h1>{this.props.h1text}</h1>
                <h3>It works</h3>
                <button onClick={this.btnOnClick}>{this.props.btnText || 'Default Text'}</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App h1text="This is h1Text" newArray={[1, 2, 3]}/>,
    document.getElementById('app')
);
