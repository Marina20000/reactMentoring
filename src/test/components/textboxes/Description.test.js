import React from "react";
import Description from './../../../components/textboxes/Description';

describe('description', () => {
    it('shallow description', () => {
        const description = shallow(<Description/>);
        const div = description.find('div');
        expect(div).toHaveLength(1);
        expect(div.hasClass('description')).toBe(true);
        expect(description.props().children).toEqual(description.props.description);
    });
})
