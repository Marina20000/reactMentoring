import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Redirect}  from 'react-router';
import Page from './../components/page/Page';
import Header from './../components/page/Header';
import ResultHeader from './../components/page/ResultHeader';
import Footer from './../components/page/Footer';
import NoMatch from './../components/page/NoMatch';
import EmptyContainerFilm from './../components/page/EmptyContainerFilm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../actions/action';

// const findFilmId = id => {
//     let data = data;
//         let film  = {};
//         if (data && id){
//             film = data.filter(item => item.id==id)[0]
//         }
//         return film;
// }

const Routing =({ history }) => 
<Router history = { history }>
<Redirect exact from ="/" to= "/header"/>
   <Route exact path="/" component={ Page }>      
        <Route path="header" component = { Header }>
            <Route exact path="/" component = { EmptyContainerFilm }/>
        </Route>
        <Route path="/film/:id" component = { ResultHeader }/>
   </Route>
   <Route path = "/*" component = { NoMatch} />
</Router>

Routing.propTypes = {
    history:PropTypes.any
};

// function mapStateToProps(state) {
//     return { 
//          data: state.app.getFilms.data,
//      }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Routing);
export default Routing;