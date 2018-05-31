import React from 'react';
import SearchPanel from './../textboxes/SearchPanel';
import Inscription from './../captions/Inscription';
import CreateButton from './../buttons/CreateButton';
import style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions/action';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: true,
            genre: false
        };
    }

    toggleButton = (filter) => {
        this.setState({ title: !this.state.title, genre: !this.state.genre });
    };

    searchFilms = () => {
        let filter = this.state.title ? 'title':'genre';
        this.props.actions.filterByDataOrGenre(filter);
    }

    render() {
        return (
            <div style={{ height: 500, backgroundImage: `url('\./image.jpg')`, backgroundSize: '100%' }}>
                <div className={style.container}>
                    <Inscription className={style.netflix} inscription='netflixroulette' />
                    <Inscription className={style.findYourMovie} inscription='FIND YOUR MOVIE' />
                    <SearchPanel />
                    <div style={{ width: '100%' }}>
                        <Inscription className={style.searchBy} inscription='SEARCH BY' />
                        <CreateButton onClick={() => { this.toggleButton('title') }} className={this.state.title ? style.selected : style.noneSelected} inscription='TITLE' />
                        <CreateButton onClick={() => { this.toggleButton('genre') }} className={this.state.genre ? style.selected : style.noneSelected} inscription='GENRE' />
                        <CreateButton onClick={() => { this.searchFilms() }} className={style.searchButton} inscription='SEARCH' />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      film: state.default.film
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);