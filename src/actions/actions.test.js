import * as actions from './action';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    const store = mockStore({});

    it('after get data test', () => {
      const response = {data:'aaa'}
      const expectedAction = {
        type: 'GET_DATA',
        data: response.data
      }
      expect(actions.afterGetData(response)).toEqual(expectedAction)
    })

    it ('after film clicked test', () => {
        const film = {}
        const expectedAction = {
          type: 'AFTER_FILM_CLICKED',
          film
        }
        expect(actions.afterFilmClicked(film)).toEqual(expectedAction)
    })

    it ('after change page test', () => {
        const expectedAction = {
            type: 'CHANGE_PAGE'
          }
          expect(actions.afterChangePage()).toEqual(expectedAction)
    })

    it ('movie click test', () => {
        let getFilms={data:[]}
        store.getState = jest.fn();
        store.getState.mockReturnValueOnce({getFilms:getFilms})

        store.dispatch(actions.movieClick(1));
        const dispatchedActions = store.getActions();
        expect(dispatchedActions).toEqual([{"film": {}, "type": "AFTER_FILM_CLICKED"}, {"type": "CHANGE_PAGE"}]);
    })
  })

// export const movieClick = id => (dispatch, getState) => {
//     dispatch(afterFilmClicked(getFilmByID(id, getState)));
//     dispatch(afterChangePage());
//   }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Function that hits network we'd like to mock

// Located in "content_api.js"

// export const get = function(query) {

//     return fetch(`${apiEndpoint}?url=${query}`)  
//       .then(checkResponseParseAndCamelize);  
//    };
   
//    // Mocking the above "get" function and providing a response
//    jest.mock("../apis/content_api", function() {
//     return {
//       get: jest.fn((url) => {
//         return contentResponse;
//       })   
//     };
//    });