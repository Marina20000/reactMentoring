import React from 'react';
import SearchPanel from './../textboxes/SearchPanel';
import Inscription from './../captions/Inscription';
import CreateButton from './../buttons/CreateButton';
import style from './style.css';


export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: false,
            genre: false
        };
    }

    toggleButton = (name) => {
        if (name === 'title') { this.setState({ title: !this.state.title }); }
        else {
            this.setState({ genre: !this.state.genre });
        }
    };

    render() {
        return (
            <div style={{ height: 500, backgroundImage: `url('\./image.jpg')`, backgroundSize: '100%' }}>
                <div className={style.container}>
                    <Inscription className={style.netflix} inscription='netflixroulette' />
                    <Inscription className={style.findYourMovie} inscription='FIND YOUR MOVIE' />
                    <SearchPanel />
                    <div style={{width:'100%'}}>
                        <Inscription className={style.searchBy} inscription='SEARCH BY' />
                        <CreateButton onClick={() => { this.toggleButton('title') }} className={this.state.title ? style.selected : style.noneSelected} inscription='TITLE' />
                        <CreateButton onClick={() => { this.toggleButton('genre') }} className={this.state.genre ? style.selected : style.noneSelected} inscription='GENRE' />
                        <CreateButton onClick={() => { }} className={style.searchButton} inscription='SEARCH' />
                    </div>
                </div>
            </div>
        )
    }
}