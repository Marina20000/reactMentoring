import React from "react";
import  style from './style.css';

export default class SearchButton extends React.Component {
    render() {
        return React.createElement("button", {className: style.searchButton}, "SEARCH");
    }
}