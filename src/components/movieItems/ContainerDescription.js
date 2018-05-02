import React, { PureComponent } from 'react';
import MovieTitle from './../captions/MovieTitle';
import Description from './../textboxes/Description';
import MovieYear from './../captions/MovieYear';
import MovieDuration from './../captions/MovieDuration';
import * as style from './style.css';

export default class ContainerDescription extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return <React.Fragment>
            <div className={style.containerDescription}>
                <MovieTitle title={this.props.movie.title} />
                <MovieYear title={this.props.movie.year} />
                <MovieDuration duration={this.props.movie.duration} />
                <Description description = {this.props.movie.description}/>
            </div>
        </React.Fragment>
    }
}