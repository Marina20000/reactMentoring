import React, { PureComponent } from 'react';
import * as style from './style.css';

export default class MovieDescription extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let params = this.props.params;
         return <React.Fragment>
            <div>
                <div className={style.movieTitle}>{params.title}</div>
                <div className={style.movieYear}>{params.release_date}</div>
            </div>
            <div className={style.movieGenre}>{params.genres}</div>
        </React.Fragment>
    }
}