import React from "react";
import * as style from './style.css';
import MovieDescription from './MovieDescription';
import MovieImage from './MovieImage';

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let params  = this.props.params;
        return (
            <div className={style.movieItem}>
                <MovieImage path={params.poster_path} />
               <MovieDescription params={this.props.params} /> 
            </div>
        )
    }
}