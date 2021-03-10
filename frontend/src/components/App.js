import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomePage />
    }
}


render(<App name="sim"/>, document.getElementById("app"));