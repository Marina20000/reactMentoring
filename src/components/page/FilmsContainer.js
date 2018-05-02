import React from 'react';
import Flexbox from 'flexbox-react';
import MovieItem from './../movieItems/MovieItem';

export default class FilmsContainer extends React.Component {
  constructor(props){
    super(props);  
  }


  render() {
    let imagesPath = this.props.imagesPath;
    let imagesDescription = this.props.imagesDescription ;
    let images = [];
    imagesPath.forEach((path,index) => images.push(<MovieItem path={path} key={index} description={imagesDescription [index]}/>))
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
