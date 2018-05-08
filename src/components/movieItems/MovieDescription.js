import React, { PureComponent } from 'react';
import style from './style.css';

export default class MovieDescription extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let params = this.props.params;
         return <React.Fragment>
            <div>
                <div className={style.movieTitle}>{!!params?params.title:''}</div>
                <div className={style.movieYear}>{!!params?params.release_date:''}</div>
            </div>
            <div className={style.movieGenre}>{!!params?params.genres:''}</div>
        </React.Fragment>
    }
}