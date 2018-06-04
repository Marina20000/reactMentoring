import React, { PureComponent } from 'react';
import Description from './../textboxes/Description';
import Inscription from './../captions/Inscription';
import style from './style.css';

export default class ContainerDescription extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.containerDescription}>
                <Inscription className={style.movieTitle} inscription={!!this.props.film?this.props.film.title:''} />
                <Inscription className={style.movieYear} inscription={!!this.props.film?this.props.film.release_date:''} />
                <Inscription className={style.movieYear} inscription={!!this.props.film?this.props.film.runtime+'  min':''} />
                <Description description={!!this.props.film?this.props.film.overview:''} />
            </div>
        )
    }
}