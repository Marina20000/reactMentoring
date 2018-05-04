import React from 'react';
import Flexbox from 'flexbox-react';
import MovieItem from './../movieItems/MovieItem';

export default class FilmsContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let images = [];
    let movies = this.props.movies;
    movies.forEach(index => {
      images.push(<MovieItem params={index} key={index.id} />)
    })
    return (<Flexbox flexDirection="column" minHeight="100vh">
      <Flexbox element="header" height="60px">
      </Flexbox>
      <Flexbox flexGrow={1} flexWrap={'wrap'} justifyContent={'center'}>
        {images}
      </Flexbox>
      <Flexbox element="footer" height="60px">
      </Flexbox>
    </Flexbox>);
  };
}
