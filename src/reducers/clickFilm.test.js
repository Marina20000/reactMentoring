import reducer from './clickFilm';

describe('clickFilm reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {   film:{}  }
        )
    })

    it('should handle AFTER_FILM_CLICKED', () => {
        expect(
            reducer([], {  type: 'AFTER_FILM_CLICKED', film:'AAA'})
        ).toEqual(
            { film:'AAA' }
        )
    })
})