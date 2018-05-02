import React, {PureComponent} from "react";
import * as style from './style.css';

export default class NoFilmsFound extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
        };
    }
    render() {
        return <div className={style.noFilmsFound} >No films found</div>;
    }
}