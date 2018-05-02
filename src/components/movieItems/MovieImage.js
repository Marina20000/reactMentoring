import React, {PureComponent} from 'react';
import * as style from './style.css';

export default class MovieImage extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        let path=this.props.path;
        return(
            <img src={path} className={style.movieImage}/>
        );
    }
}