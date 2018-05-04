import React from "react";
import * as style from './style.css';

export default class SearchByButton extends React.Component {
    render() {
        return React.createElement("button", {className:style.searchByButton}, "SEARCH BY");
    }
}