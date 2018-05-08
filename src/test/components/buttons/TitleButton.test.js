import React from "react";
import TitleButton from './../../../components/buttons/TitleButton';

describe('titleButton', () => {
    it('mount titleButton', () => {
        const titleButton = mount(<TitleButton />);
        const button = titleButton.find('button');
        expect(button).toHaveLength(1);
        expect(button.hasClass('noneSelected')).toBe(true);
        expect(titleButton.state().active).toEqual(false);
        titleButton.simulate('click');
        expect(titleButton.state().active).toEqual(true);
        expect(titleButton.find('button').hasClass('selected')).toBe(true);
    });
})