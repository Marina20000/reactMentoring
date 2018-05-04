import React from 'react';
import SearchButton from './../buttons/SearchButton';
import MovieItem from './../movieItems/MovieImage';
import ContainerDescription from './../movieItems/ContainerDescription';
import ReturnButton from './../buttons/ReturnButton';
import Inscription from './../captions/Inscription';
import * as style from './style.css';


export default class ResultHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <div style={{ backgroundImage: `url('\./image.jpg')`, backgroundSize: '100%' }}>
                <Inscription className={style.netflix} inscription='netflixroulette' />
                <ReturnButton />
                <div style={{ display: 'inline-block', width: '90%' }}>
                    <img src={this.props.movie.poster_path} className={style.movieImage} />
                    <ContainerDescription movie={this.props.movie} />
                </div>

            </div>
        )
    }
}