import reducer from './changePage';

describe('changePage reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {  showPage2: false  }
        )
    })

    it('should handle CHANGE_PAGE', () => {
        expect(
            reducer([], {  type: 'CHANGE_PAGE' })
        ).toEqual(
            { showPage2: true }
        )
    })
})

