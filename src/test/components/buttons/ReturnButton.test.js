import React from "react";
import ReturnButton from './../../../components/buttons/ReturnButton';

describe('returnButton', () => {
    it('shallow returnButton', () => {
        const returnButton = shallow(<ReturnButton/>);
        const button = returnButton.find('button');
        expect(button).toHaveLength(1);
        expect(button.hasClass('returnButton')).toBe(true);
        expect(returnButton.props().children).toEqual('SEARCH');
    });
})