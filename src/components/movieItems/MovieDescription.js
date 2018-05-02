import React, { PureComponent } from 'react';
import * as style from './style.css';

export default class MovieDescription extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let description = this.props.description;
        console.log("description", description)
        return <React.Fragment>
            <div>
                <div className={style.movieTitle}>{description.title}</div>
                <div className={style.movieYear}>{description.year}</div>
            </div>
            <div className={style.movieGenre}>{description.genre}</div>
        </React.Fragment>
    }
}