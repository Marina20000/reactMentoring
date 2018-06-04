import React from 'react';
import style from './style.css';

export default function SearchPanel(props) {
        return <input className={style.searchPanel}
            type="text"
            onChange={props.onChange}
        />;
}