import React from 'react';
import EmptyContainerFilm from './EmptyContainerFilm';
import Footer from './Footer';
import Board from './Board';
import ResultHeader from './ResultHeader';
import ErrorBoundary from './ErrorBoundary';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions/action';
import configureStore from 'redux-mock-store';

export class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    render() {
        let searchResult = this.props.data == 0;
        return (
            <div style={{ height: 1000 }} >
                <ErrorBoundary>
                    {this.props.children}
                </ErrorBoundary>
                <ErrorBoundary>
                {this.props.data.length ? <Board searchResult={searchResult} movies={this.props.data} />  : <EmptyContainerFilm />}                
                </ErrorBoundary>
                <Footer />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);