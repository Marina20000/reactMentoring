import React, { PureComponent } from 'react';
import * as style from './style.css';
import QuantityMovies from './../captions/QuantityMovies';
import SortBy from './../captions/SortBy';
import ReliaseDateButton from './../buttons/ReliaseDateButton';
import RatingButton from './../buttons/RatingButton';

export default class SearchResultPanel extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let quantity = this.props.quantity;
        let showPage2 = this.props.showPage2;
        return <React.Fragment>
            <div className = {style.searchResultPanel}>
           { !showPage2 &&  <QuantityMovies quantity={quantity}/>}
           { !showPage2 &&  <RatingButton/>}
           { !showPage2 &&  <ReliaseDateButton/>}
           { !showPage2 &&  <SortBy/>}
            </div>
        </React.Fragment>
    }
}
