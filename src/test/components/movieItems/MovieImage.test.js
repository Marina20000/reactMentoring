import React from "react";
import MovieImage from './../../../components/movieItems/MovieImage';

describe('MovieImage', () => {
    it('mount MovieImage', () => {
        const movieImage = mount(<MovieImage/>);               
        const img = movieImage.find('img');
        expect(img).toHaveLength(1);
        expect(img.hasClass('movieImage')).toBe(true);
    });
})