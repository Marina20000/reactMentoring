import React, { PureComponent } from "react";
import Button from "./Button";

export default class extends React.Component {
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
        return state;//(!state.counter % 10) ? { ...state } : state;
    }

    onButtonClick = () => { this.setState(this.incCounter()) }

    render() {
        return (
            <div>
                <Button onButtonClick={this.onButtonClick} />
            </div>
        )
    }
}