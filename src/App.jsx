import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>State: <pre>{JSON.stringify(this.props.state, null, 2)}</pre></div>
                <button onClick={::this.props.action}>Action!</button>
            </div>
        );
    }
}

const ACTION = 'ACTION';

export default connect(state => ({ data: state }), {
    // Sample action that modifies the state
    action: () => 
        ({ type: ACTION, payload: { foo: "bar" } })
}, null, (state = { foo: "bar" }, action) => {
    switch(action.type) {
        case ACTION:
            return { foo: "boot" }

        default:
            return state
    }
})(App);