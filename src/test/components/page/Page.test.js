import React from "react";
import renderer from 'react-test-renderer';
import { Page } from './../../../components/page/Page';


const prettyFormat = require('pretty-format');
describe('Page', () => {
    let getData = jest.fn();
    let changePage =jest.fn();
    let actions = {getData: getData, changePage:changePage};
    let _props = {data:[],film:{},changePage:false, actions:actions};
    it("testing with snapshot", ()=>{
        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({}));
        const page = shallow(<Page {..._props} />);       
        expect(page).toMatchSnapshot();
    })
})
