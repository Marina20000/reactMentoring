import React from "react";
import style from './style.css';
import MovieDescription from './MovieDescription';
import MovieImage from './MovieImage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions/action';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

export class MovieItem extends React.Component {
    constructor(props) {
        super(props);
    }

    movieClick = () =>{
        this.props.dispatch(push("/film/"+this.props.params.id));
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

MovieItem.propTypes = {
    dispatch: PropTypes.func.isRequired,
    router: PropTypes.shape({
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    })
};

const mapStateToProps = state => {
    return { }
}
  
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(actions, dispatch),
      dispatch
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);