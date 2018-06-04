import React from 'react';
import MovieItem from './../movieItems/MovieImage';
import ContainerDescription from './../movieItems/ContainerDescription';
import Inscription from './../captions/Inscription';
import CreateButton from './../buttons/CreateButton';
import style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions/action';


export class ResultHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    returnButtonClick = () => {
        this.props.actions.changePage();
    }

    render() {
        return (
            <div style={{ backgroundImage: `url('\./image.jpg')`, backgroundSize: '100%' }}>
                <div className={style.container}>
                    <Inscription className={style.netflix} inscription='netflixroulette' />
                    <CreateButton onClick={() => { this.returnButtonClick() }} className={style.returnButton} inscription='SEARCH' />
                    <img src={!!this.props.film ? this.props.film.poster_path : ''} className={style.movieImage} />
                    <ContainerDescription film={this.props.film} />

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state)
    return { film: state.clickFilm.film }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultHeader);