import React from 'react';
//import * as style from './style.css';
import Netflix from './../captions/Netflixroulette';

export default class Footer extends React.Component {

    render() {
        let style = {height: 100, backgroundColor: 'black', bottom: 0 }
        return <div style = {style}>
        <Netflix/>
        </div>;
    }

}