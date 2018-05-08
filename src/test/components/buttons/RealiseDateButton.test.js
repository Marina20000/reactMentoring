import React from "react";
import ReliaseDateButton from './../../../components/buttons/ReliaseDateButton';

describe('reliaseDateButton', () => {
    it('shallow reliaseDateButton', () => {
        const reliaseDateButton = shallow(<ReliaseDateButton/>);
        const button = reliaseDateButton.find('button');
        expect(button).toHaveLength(1);
        expect(button.hasClass('reliaseDateButton')).toBe(true);
        expect(reliaseDateButton.props().children).toEqual('reliase date');
    });
})