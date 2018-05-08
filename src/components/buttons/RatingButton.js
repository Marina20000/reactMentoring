import React from 'react';
import  style from './style.css';

export default class RatingButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className = { style.ratingButton }>
                rating
            </button>
        )
    }
}