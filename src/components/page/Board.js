import React from 'react';
import FilmsContainer from './FilmsContainer';
import SearchResultPanel from './SearchResultPanel';
import Inscription from './../captions/Inscription';
import * as style from './style.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let searchResult = this.props.searchResult;
        return <div >
            { searchResult && <Inscription className={style.noFilmsFound} inscription = 'No films found'/> }
            <SearchResultPanel quantity={ this.props.movies.length } showPage2 = {this.props.showPage2}/>
            <FilmsContainer  movies = { this.props.movies }/>
        </div>;
    }
}