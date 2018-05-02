import React, {PureComponent} from "react";
import * as style from './style.css';

export default class MovieTitle extends PureComponent{
    constructor(props){
        super(props);
    }
    render() {
        return <div className={style.movieTitle}>{this.props.title}</div>;
    }
}