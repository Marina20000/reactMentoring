import React, { PureComponent } from 'react';
import Description from './../textboxes/Description';
import Inscription from './../captions/Inscription';
import * as style from './style.css';

export default class ContainerDescription extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <div className={style.containerDescription}>
                <Inscription className={style.movieTitle} inscription={this.props.movie.title} />
                <Inscription className={style.movieYear} inscription={this.props.movie.release_date} />
                <Inscription className={style.movieYear} inscription={this.props.movie.duration} />
                <Description description={this.props.movie.overview} />
            </div>
        </React.Fragment>
    }
}