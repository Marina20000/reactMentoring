import React from 'react';
import Netflixroulette from './../captions/Netflixroulette';
import FindYourMovie from './../captions/FindYourMovie';
import SearchBy from './../captions/SearchBy';
import TitleButton from './../buttons/TitleButton';
import GenreButton from './../buttons/GenreButton';
import SearchButton from './../buttons/SearchButton';
import SearchPanel from './../textboxes/SearchPanel';


export default class Header extends React.Component {
    render() {
        return (
            <div style={{ height: 500, backgroundImage: `url('\./image.jpg')`, backgroundSize: '100%' }}>
                <Netflixroulette />
                <FindYourMovie />
                <SearchPanel/>
                <div>
                    <SearchBy />
                    <TitleButton/>
                    <GenreButton/>
                    <SearchButton />
                </div>
            </div>
        )
    }
}