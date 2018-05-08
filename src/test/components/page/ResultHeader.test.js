import React from "react";
import renderer from 'react-test-renderer';
import ResultHeader from './../../../components/page/ResultHeader';

describe('ResultHeader', () => {
    it("testing with snapshot", () => {
        const tree = renderer.create(<ResultHeader/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})