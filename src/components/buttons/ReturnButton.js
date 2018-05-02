import React from "react";
import * as style from './style.css';

export default class ReturnButton extends React.Component {
    render() {
        return React.createElement("button", {className:style.returnButton}, "SEARCH");
    }
}