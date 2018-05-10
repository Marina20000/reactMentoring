import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Board from './Board';
import ResultHeader from './ResultHeader';
import ErrorBoundary from './ErrorBoundary';

const API = 'http://react-cdp-api.herokuapp.com/movies?limit=20';

export default class Page extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            movies: [],
          };
    }

    componentDidMount(){
        fetch(API).then(response => response.json())
       .then(data => {
           this.setState({ movies: data.data})});
    }

    // eliminateMovie = (t, imagesDescription, imagesPath) => {
    //     let item = imagesDescription.findIndex(item => item.title === t);
    //     imagesDescription.splice(item, 1);
    //     imagesPath.splice(item, 1);
    //     return imagesDescription;
    // }

    render() {
        let searchResult = this.state.movies==0;
        let showPage2 = false;
        let movie = [];
        if( !!this.state.movies[0]){ movie=this.state.movies[0] };
        return (
            <div style={{ height: 1000 }}>
                <ErrorBoundary>
                    { showPage2 == false ? <Header /> : <ResultHeader movie={ movie } />}
                </ErrorBoundary>
                <ErrorBoundary>
                    <Board searchResult={ searchResult } showPage2={ showPage2 } movies = { this.state.movies }/>
                </ErrorBoundary>
                <Footer />
            </div>
        )
    }
}