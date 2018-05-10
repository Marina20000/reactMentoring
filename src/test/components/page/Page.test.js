import React from "react";
import renderer from 'react-test-renderer';
import Page from './../../../components/page/Page';

describe('Page', () => {
    it("testing with snapshot", ()=>{
        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({}));
        const page = shallow(<Page/>);       
        const header = page.find('Header');
        expect (header).toHaveLength(1);
        const board = page.find('Board');
        expect(board).toHaveLength(1);
        const tree = renderer.create(<Page/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
