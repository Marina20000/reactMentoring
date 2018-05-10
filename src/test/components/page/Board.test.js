import React from "react";
import renderer from 'react-test-renderer';
import Board from './../../../components/page/Board';

describe('Board', () => {
    it("testing with snapshot", ()=>{
        const tree = renderer.create(<Board/>).toJSON();
      expect(tree).toMatchSnapshot();
    })
})