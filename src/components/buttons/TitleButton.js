import React from "react";
import * as style from './style.css';

export default class TitleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }
    toggleButton = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState});
    };
    render() {
        return (
            <button onClick={this.toggleButton} className={this.state.active ? style.selected : style.noneSelected}>
                TITLE
            </button>
        )
    }
}