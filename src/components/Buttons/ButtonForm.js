import React from "react";
import Button from "./Button";

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    incCounter = () => {
        const state = this.state;
        state.counter++;
        console.log('state', state);
        return state;
    }

    onButtonClick = () => { this.setState(this.incCounter()) }

    render() {
        return (
            <div>
                <div><strong>Counter value is </strong>{this.state.counter}</div>
                <Button onButtonClick={this.onButtonClick} />
            </div>
        )
    }
}