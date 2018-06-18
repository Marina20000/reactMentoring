import React, {PureComponent} from 'react';
import style from './style.css';

export default class EmptyContainerFilm extends PureComponent{

    render() {
        return <div className={style.emptyResult}>Find your movie</div>;
    }
}