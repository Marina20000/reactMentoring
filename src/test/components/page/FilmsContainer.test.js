import React from "react";
import renderer from 'react-test-renderer';
import FilmsContainer from './../../../components/page/FilmsContainer';

describe('FilmsContainer ', () => {
    it("testing with snapshot", () => {
        const tree = renderer.create(<FilmsContainer />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})