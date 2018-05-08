import React, {PureComponent} from "react";
import style from './style.css';

export default class Description extends PureComponent{
    constructor(props){
        super(props);
    }
    render() {
        return <div className={style.description}>{this.props.description}</div>;
    }
}