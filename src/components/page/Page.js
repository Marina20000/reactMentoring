import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Board from './Board';
import ResultHeader from './ResultHeader';
import ErrorBoundary from './ErrorBoundary';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions/action';

class Page extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            movies: [],
          };
    }

     componentDidMount(){
        this.props.actions.getData();
     }

    render() {
        let searchResult = this.props.data==0;
        let showPage2 = false;
        let movie = {};
        if( !!this.props.data[0]){ movie=this.props.data[0] };
        return (
            <div style={{ height: 1000 }}>
                <ErrorBoundary>
                    { showPage2 == false ? <Header /> : <ResultHeader movie={ movie } />}
                </ErrorBoundary>
                <ErrorBoundary>
                    <Board searchResult={ searchResult } showPage2={ showPage2 } movies = { this.props.data }/>
                </ErrorBoundary>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      data: state.default.data
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Page);