import React from "react";
import GenreButton from './../../../components/buttons/GenreButton';

const prettyFormat = require('pretty-format');

describe('genreButton', () => {
    it('mount genreButton', () => {
        const genreButton = mount(<GenreButton/>);
               
        const button = genreButton.find('button');
        expect(button).toHaveLength(1);
        expect(button.hasClass('noneSelected')).toBe(true);

        //button.props().onClick=jest.fn();
        //genreButton.props().toggleButton = jest.fn();
        expect(genreButton.state().active).toEqual(false);
        genreButton.simulate('click');
        expect(genreButton.state().active).toEqual(true);
        expect(genreButton.state().active).toEqual(true);
        expect(genreButton.find('button').hasClass('selected')).toBe(true);
    });
})

