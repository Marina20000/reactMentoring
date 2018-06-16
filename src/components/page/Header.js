import React from 'react';
import SearchPanel from './../textboxes/SearchPanel';
import Inscription from './../captions/Inscription';
import CreateButton from './../buttons/CreateButton';
import style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions/action';
import SearchResultPanel from './SearchResultPanel';


export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: true,
            genre: false,
            value: '',
            releaseDate: true,
            raiting: false
        };
    }

    toggleButton = (filter) => {
        this.setState({ title: !this.state.title, genre: !this.state.genre });
    };

    searchFilms = () => {
        let filter = this.state.title ? 'title':'genre';
        let sorting =this.state.releaseDate ? 'release_date':'raiting';
        this.props.actions.getData(this.request(filter,sorting));
    }

    request = (filter,sorting) => {
        return 'limit=20&search='+this.state.value+'&searchBy='+filter+'&sortBy='+sorting+'&sortOrder=desc';
    }

    handleChange = e => {
        this.setState({ value: e.target.value });
    }

    toggleSortings = () => {
        this.setState({ releaseDate: !this.state.releaseDate, raiting: !this.state.raiting });
    };

    render() {
        return (
            <div style={{ height: 500, backgroundImage: `url('\./image.jpg')`, backgroundSize: '100%' }}>
                <div className={style.container}>
                    <Inscription className={style.netflix} inscription='netflixroulette' />
                    <Inscription className={style.findYourMovie} inscription='FIND YOUR MOVIE' />
                    <SearchPanel onChange={this.handleChange} value={this.state.value}/>
                    <div style={{ width: '100%' }}>
                        <Inscription className={style.searchBy} inscription='SEARCH BY' />
                        <CreateButton onClick={() => { this.toggleButton('title') }} className={this.state.title ? style.selected : style.noneSelected} inscription='TITLE' />
                        <CreateButton onClick={() => { this.toggleButton('genre') }} className={this.state.genre ? style.selected : style.noneSelected} inscription='GENRE' />
                        <CreateButton onClick={() => { this.searchFilms() }} className={style.searchButton} inscription='SEARCH' />
                    </div>
                </div>
                <SearchResultPanel quantity={ !!this.props.movies ? this.props.movies.length : 0 } showPage2 = { this.props.showPage2 } toggleSortings={this.toggleSortings}
                raiting = { this.state.raiting } releaseDate = { this.state.releaseDate }/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.app.getFilms.data,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);