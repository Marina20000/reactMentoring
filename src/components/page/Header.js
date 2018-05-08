import React from 'react';
import TitleButton from './../buttons/TitleButton';
import GenreButton from './../buttons/GenreButton';
import SearchButton from './../buttons/SearchButton';
import SearchPanel from './../textboxes/SearchPanel';
import Inscription from './../captions/Inscription';
import  style from './style.css';


export default class Header extends React.Component {
    render() {
        return (
            <div style={{ height: 500, backgroundImage: `url('\./image.jpg')`, backgroundSize: '100%' }}>
                <Inscription className={ style.netflix } inscription='netflixroulette'/>
                <Inscription className={ style.findYourMovie } inscription='FIND YOUR MOVIE'/>
                <SearchPanel/>
                <div>
                <Inscription className={ style.searchBy } inscription='SEARCH BY'/>
                    <TitleButton/>
                    <GenreButton/>
                    <SearchButton />
                </div>
            </div>
        )
    }
}