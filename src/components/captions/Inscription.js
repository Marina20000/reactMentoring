import React, {PureComponent} from 'react';

export default class Inscription extends PureComponent{
    constructor(props){
        super(props);
    }
    render() {
        return <div className={this.props.className}>{this.props.inscription}</div>;
    }
}