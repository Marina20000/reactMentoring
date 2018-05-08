import React from 'react';
import style from './style.css';
import ReliaseDateButton from './../buttons/ReliaseDateButton';
import RatingButton from './../buttons/RatingButton';
import Inscription from './../captions/Inscription';


export default class SearchResultPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let quantity = !!this.props.quantity?this.props.quantity:0;
        let showPage2 = !!this.props.showPage2?this.props.showPage2:false;
        return (
            <div className = { style.searchResultPanel }>
                { !showPage2 &&  <Inscription className = { style.quantityMovies } inscription={ `${quantity} movies found` }/>}
           { !showPage2 &&  <RatingButton/>}
           { !showPage2 &&  <ReliaseDateButton/>}
           { !showPage2 &&  <Inscription className={ style.sortBy } inscription = 'Sort by'/>}
                </div>
        )
    }
}
