import React from "react";
import RatingButton from './../../../components/buttons/RatingButton';

describe('ratingButton', () => {
    it('shallow ratingButton', () => {
        const ratingButton = shallow(<RatingButton/>);
        const button = ratingButton.find('button');
        expect(button).toHaveLength(1);
        
        expect(ratingButton.props().children).toEqual('rating');
    });
})