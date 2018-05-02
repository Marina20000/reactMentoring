import React from 'react';
import NoFilmsFound from './../captions/NoFilmsFound';
import FilmsContainer from './FilmsContainer';
import SearchResultPanel from './SearchResultPanel';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let searchResult = this.props.searchResult;
        let imagesPath = this.props.imagesPath;
        let imagesDescription = this.props.imagesDescription;
        return <div >
            { searchResult && <NoFilmsFound/> }
            <SearchResultPanel quantity={ imagesPath.length } showPage2 = {this.props.showPage2}/>
            <FilmsContainer imagesPath={ imagesPath } imagesDescription={ imagesDescription }/>
        </div>;
    }
}