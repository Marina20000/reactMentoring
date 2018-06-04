import React from "react";
import renderer from 'react-test-renderer';
import { Header } from './../../../components/page/Header';
import reducer from './../../../reducers/reducers';
import configureStore from 'redux-mock-store';

describe('Header', () => {
    const mockStore = configureStore();
    let initialState = {};
    let _props, store;
    it("testing with snapshot", () => {
        store = mockStore(initialState);
        _props = { store: store, data: [], film: {}, changePage: false }
        _props.actions = jest.fn();
        const tree = renderer.create(<Header {..._props} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})