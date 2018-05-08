import React from "react";
import renderer from 'react-test-renderer';
import Footer from './../../../components/page/Footer';

describe('Footer', () => {
    it("testing with snapshot", ()=>{
        const tree = renderer.create(<Footer/>).toJSON();
      expect(tree).toMatchSnapshot();
    })
})