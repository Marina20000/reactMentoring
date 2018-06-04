import React from 'react';
import Header from './Header';
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

    componentDidMount() {
        this.props.actions.getData();
    }

    render() {
        let searchResult = this.props.data == 0;
        let showPage2 = this.props.changePage;
        return (
            <div style={{ height: 1000 }}>
                <ErrorBoundary>
                    {showPage2 == false ? <Header movies={this.props.data} /> : <ResultHeader film={this.props.film} />}
                </ErrorBoundary>
                <ErrorBoundary>
                    <Board searchResult={searchResult} showPage2={showPage2} movies={this.props.data} />
                </ErrorBoundary>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.getFilms.data,
        film: state.clickFilm.film,
        changePage: state.changePage.showPage2
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);