import React from "react";
import renderer from 'react-test-renderer';
import SearchResultPanel from './../../../components/page/SearchResultPanel';

describe('SearchResultPanel', () => {
    it("testing with snapshot", () => {
        const tree = renderer.create(<SearchResultPanel/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

