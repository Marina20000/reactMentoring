import React, {PureComponent} from "react";
import * as style from './style.css';

export default class MovieDuration extends PureComponent{
    constructor(props){
        super(props);
    }
    render() {
        return <div className={style.movieYear}>{this.props.duration}</div>;
    }
}