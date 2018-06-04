import React from 'react';
import style from './style.css';
import Inscription from './../captions/Inscription';
import CreateButton from './../buttons/CreateButton';


export default class SearchResultPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let quantity = !!this.props.quantity ? this.props.quantity : 0;
        let showPage2 = !!this.props.showPage2 ? this.props.showPage2 : false;
        return (
            <div className={style.searchResultPanel}>
                {!showPage2 && <Inscription className={style.quantityMovies} inscription={`${quantity} movies found`} />}
                {!showPage2 && <CreateButton onClick={() => { this.props.toggleSortings() }} className={this.props.raiting ? style.ratingButtonSelected : style.ratingButtonNoneSelected } inscription='raiting' />}
                {!showPage2 && <CreateButton onClick={() => { this.props.toggleSortings() }} className={this.props.releaseDate ? style.reliaseDateButtonNoneSelected : style.reliaseDateButtonSelected} inscription='reliase date' />}
                {!showPage2 && <Inscription className={style.sortBy} inscription='Sort by' />}
            </div>
        )
    }
}
