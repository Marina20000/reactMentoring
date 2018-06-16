import React from 'react';
import MovieItem from './../movieItems/MovieImage';
import ContainerDescription from './../movieItems/ContainerDescription';
import Inscription from './../captions/Inscription';
import CreateButton from './../buttons/CreateButton';
import style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions/action';
import { browserHistory } from 'react-router';
import Header from './Header';
import { Router, Route, Redirect}  from 'react-router';


export class ResultHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    returnButtonClick = () => {
       browserHistory.goBack()
    }

    render() {
        let data = this.props.data;
        let film  = {};
        let id = this.props.routeParams.id;
        if (data && id){
            film = data.filter(item => item.id==id)[0]
        }

        if (!film ) {browserHistory.push("/")
        return <Header/>}
        return (
            !!film ? 
            <div style={{ backgroundImage: `url('\./image.jpg')`, backgroundSize: '100%' }}>
                <div className={ style.container }>
                    <Inscription className={ style.netflix } inscription='netflixroulette' />
                    <CreateButton onClick={ () => { this.returnButtonClick() } } className={ style.returnButton } inscription='SEARCH' />
                    <img src={ !!film ? film.poster_path : '' } className={ style.movieImage } />
                    <ContainerDescription film={ film } />

                </div>
            </div>:<Footer/>
            
        )
    }
}

function mapStateToProps(state) {
    return { 
         data: state.app.getFilms.data,
     }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultHeader);