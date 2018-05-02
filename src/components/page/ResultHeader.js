import React from 'react';
import Netflixroulette from './../captions/Netflixroulette';
import SearchButton from './../buttons/SearchButton';
import MovieItem from './../movieItems/MovieImage';
import MovieTitle from './../captions/MovieTitle';
import ContainerDescription from './../movieItems/ContainerDescription';
import ReturnButton from './../buttons/ReturnButton';
import * as style from './style.css';


export default class ResultHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ backgroundImage: `url('\./image.jpg')`, backgroundSize: '100%' }}>
                <Netflixroulette />
                <ReturnButton />
                <div style={{ display: 'inline-block', width: '90%' }}>
                        <img src={this.props.movie.path} className={style.movieImage} />
                    <ContainerDescription movie={this.props.movie} />
                </div>

            </div>
        )
    }
}