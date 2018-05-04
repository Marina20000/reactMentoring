import React, { PureComponent } from 'react';
import * as style from './style.css';
import ReliaseDateButton from './../buttons/ReliaseDateButton';
import RatingButton from './../buttons/RatingButton';
import Inscription from './../captions/Inscription';

export default class SearchResultPanel extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let quantity = this.props.quantity;
        let showPage2 = this.props.showPage2;
        return <React.Fragment>
            <div className = { style.searchResultPanel }>
           { !showPage2 &&  <Inscription className = { style.quantityMovies } inscription={ `${quantity} movies found` }/>}
           { !showPage2 &&  <RatingButton/>}
           { !showPage2 &&  <ReliaseDateButton/>}
           { !showPage2 &&  <Inscription className={ style.sortBy } inscription = 'Sort by'/>}
            </div>
        </React.Fragment>
    }
}
