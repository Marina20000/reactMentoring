import React from "react";
import * as style from './style.css';
import MovieDescription from './MovieDescription';
import MovieImage from './MovieImage';

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let path = this.props.path;
        let description = this.props.description;
        return (
            <div className={style.movieItem}>
            <MovieImage path={path}/>
                <MovieDescription description={description}/>
            </div>
        )
    }
}