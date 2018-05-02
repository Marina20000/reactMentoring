import React, { PureComponent } from 'react';
import * as style from './style.css';

export default class QuantityMovie extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let quantity = this.props.quantity;
        let inscription = quantity == 1 ? ' movie found' : ' movies found'
        return (
            <div className = {style.quantityMovies}>
                {quantity + inscription}
            </div>
        );
    }
}