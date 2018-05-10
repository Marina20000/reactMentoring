import React from "react";
import renderer from 'react-test-renderer';
import Header from './../../../components/page/Header';

describe('Header', () => {
    it("testing with snapshot", ()=>{
        const tree = renderer.create(<Header/>).toJSON();
      expect(tree).toMatchSnapshot();
    })
})