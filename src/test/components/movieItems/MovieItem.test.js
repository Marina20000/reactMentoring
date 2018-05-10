import React from "react";
import MovieItem from './../../../components/movieItems/MovieItem';

describe('MovieItem', () => {
    it('mount MovieItem', () => {
        let params  = {
            poster_path:'',
            title:'',
            release_date:'',
            genres:''
        }
        const movieItem = mount(<MovieItem params={params}/>);
               
        const movieImage = movieItem.find('MovieImage');
        expect(movieImage).toHaveLength(1);
        const img = movieImage.find('img');
        expect(img).toHaveLength(1);
        expect(img.hasClass('movieImage')).toBe(true);

        const movieDescription = movieItem.find('MovieDescription');
        expect (movieDescription).toHaveLength(1);
        const div = movieDescription.find('div');
        expect(div).toHaveLength(4);
    });
})

