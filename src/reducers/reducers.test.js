import reducer from './reducers';

describe('reducers reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {   data: []  }
        )
    })

    it('should handle GET_DATA', () => {
        expect(
            reducer([], {  type: 'GET_DATA', data: ['AAA']})
        ).toEqual(
            { data: ['AAA'] }
        )
    })
})