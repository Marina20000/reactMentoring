import React from "react";
import  Page  from "./components/page/Page";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Routing from './routing/routing';

class App extends React.Component {

    render() {
        const { store } = this.props;
        const history = syncHistoryWithStore(hashHistory, store);
        return (
            <Provider store={store}>
                
                    <Routing history = { history }> 
                    <Page />
                    </Routing>
            
            </Provider>
        )
    }
}

export default App;