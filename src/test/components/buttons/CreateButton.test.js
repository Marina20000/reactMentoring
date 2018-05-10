import React from "react";
import CreateButton from './../../../components/buttons/CreateButton';

describe('createButton', () => {

    it('shallow createButton', () => {
        let active = false;
    let toggleButton = () => {
        active=!active 
   }; 

        const createButton = shallow(<CreateButton onClick={ toggleButton } className={ active ? 'selected' : 'noneSelected' } inscription='TITLE' />);               
        const button = createButton.find('button');
        expect(button).toHaveLength(1);
        expect(button.hasClass('noneSelected')).toBe(true);
        expect(active).toEqual(false);
        createButton.simulate('click');
        expect(active).toEqual(true);
    });
})