import React from 'react';
import Inscription from './../captions/Inscription';
import style from './style.css';

export default class Footer extends React.Component {

    render() {
        return <div style={{ height: 100, backgroundColor: 'black', bottom: 0 }}>
            <Inscription className={ style.netflix } inscription='netflixroulette'/>
       </div>;
    }

}