import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Board from './Board';
import ResultHeader from './ResultHeader';
import ErrorBoundary from './ErrorBoundary';


export default class Page extends React.Component {

    eliminateMovie = (t, imagesDescription, imagesPath) => {
        let item = imagesDescription.findIndex(item => item.title === t);
        imagesDescription.splice(item, 1);
        imagesPath.splice(item, 1);
        return imagesDescription;
    }

    render() {
        let searchResult = false;
        let imagesPath = ['kill bill1.jpg', 'kill bill2.png', 'Pulp Fiction.png', 'jackie brown.png', 'reservior dogs.png', '4 rooms.png', 'Jango.png'];
        let imagesDescription = [];
        imagesDescription.push({ title: 'KILL BILL: VOL.2', genre: 'Action&Adventure', year: '2004', description: '' });
        imagesDescription.push({ title: 'KILL BILL: VOL.1', genre: 'Action&Adventure', year: '2003', description: '' });
        imagesDescription.push({ title: 'PULP FICTION', genre: 'Action&Adventure', year: '1994', description: '' });
        imagesDescription.push({ title: 'JACKIE BROWN', genre: 'Drama', year: '1997', description: 'Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed up boxer. Quentin Tarantino influenced a generation of filmmakers with crime caper\'s stylized, over-the-top violence and dark comic spirit' });
        imagesDescription.push({ title: 'RESERVIOR DOGS', genre: 'Action&Adventure', year: '1992', description: '' });
        imagesDescription.push({ title: 'FOUR ROOMS', genre: 'Comedies', year: '1995', description: '' });
        imagesDescription.push({ title: 'DJANGO UNCHAINED', genre: 'Action&Adventure', year: '2012', description: '' });
        let movie = { title: 'PULP FICTION', genre: 'Action&Adventure', year: '1994', path: 'Pulp Fiction.png', duration: '154 min', description: 'Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed up boxer. Quentin Tarantino influenced a generation of filmmakers with crime caper\'s stylized, over-the-top violence and dark comic spirit' };
        let showPage2 = true;
        let descriptions = imagesDescription;
        if (showPage2) { descriptions = this.eliminateMovie(movie.title, imagesDescription, imagesPath); }
        return (
            <div style={{ height: 1000 }}>
                <ErrorBoundary>
                    {showPage2 == false ? <Header /> : <ResultHeader movie={movie} />}
                </ErrorBoundary>
                <ErrorBoundary>
                    <Board searchResult={searchResult} imagesDescription={descriptions} imagesPath={imagesPath} showPage2={showPage2} />
                </ErrorBoundary>
                <Footer />
            </div>
        )
    }
}