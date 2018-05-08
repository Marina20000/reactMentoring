import React from "react";
import SearchButton from './../../../components/buttons/SearchButton';

describe('searchButton', () => {
    it('shallow searchButton', () => {
        const searchButton = shallow(<SearchButton/>);
        const button = searchButton.find('button');
        expect(button).toHaveLength(1);
        expect(button.hasClass('searchButton')).toBe(true);
        expect(searchButton.props().children).toEqual('SEARCH');
    });
})