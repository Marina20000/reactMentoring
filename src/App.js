import React from "react";
import Page from "./components/page/Page";
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default class App extends React.Component {

    render() {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <Page />
            </Provider>
        )
    }
}
