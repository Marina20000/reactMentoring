import React from "react";
import style from './style.css';
import MovieDescription from './MovieDescription';
import MovieImage from './MovieImage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions/action';

export class MovieItem extends React.Component {
    constructor(props) {
        super(props);
    }

    movieClick = () =>{
        this.props.actions.movieClick(this.props.params.id);
    }

    render() {
        let params  = this.props.params;
        return (
            <div className={style.movieItem} onClick = {this.movieClick}>
                <MovieImage path={params.poster_path} />
               <MovieDescription params={this.props.params} /> 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);