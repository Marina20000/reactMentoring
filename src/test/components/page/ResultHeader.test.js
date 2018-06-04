import React from "react";
import renderer from 'react-test-renderer';
import { ResultHeader } from './../../../components/page/ResultHeader';
import reducer from './../../../reducers/reducers';
import configureStore from 'redux-mock-store';

describe('ResultHeader', () => {
    const mockStore = configureStore();
    let initialState  = {};
    let _props, store;
    it("testing with snapshot", () => {
        store = mockStore(initialState);
        _props={ store: store, data:[], film: {} }
        const tree = renderer.create(<ResultHeader {..._props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})