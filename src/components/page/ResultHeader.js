import React from 'react';
import MovieItem from './../movieItems/MovieImage';
import ContainerDescription from './../movieItems/ContainerDescription';
import Inscription from './../captions/Inscription';
import CreateButton from './../buttons/CreateButton';
import style from './style.css';


export default class ResultHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ backgroundImage: `url('\./image.jpg')`, backgroundSize: '100%' }}>
                <div className={style.container}>
                    <Inscription className={style.netflix} inscription='netflixroulette' />
                    <CreateButton onClick={() => { }} className={style.returnButton} inscription='SEARCH' />
                        <img src={!!this.props.movie ? this.props.movie.poster_path : ''} className={style.movieImage} />
                        <ContainerDescription movie={this.props.movie} />
                    
                </div>
            </div>
        )
    }
}