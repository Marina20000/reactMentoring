import React, {PureComponent} from "react";
import * as style from './style.css';

export default class MovieYear extends PureComponent{
    constructor(props){
        super(props);
    }
    render() {
        return <div className={style.movieYear}>{this.props.title}</div>;
    }
}