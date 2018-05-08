import React from 'react';
import style from './style.css';

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
    

    handleChange = event => {
        this.setState({ value: event.target.value })
    };

    render() {
        return (<input className={style.searchPanel}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
        />);
    }
}