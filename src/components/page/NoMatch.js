import React from 'react';
import style from './style.css';

export default class NoMatch extends React.Component{
render() {
     return <div className={style.emptyResult}>
        Not found
    </div>;
}
}