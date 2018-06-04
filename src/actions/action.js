const API = 'http://react-cdp-api.herokuapp.com/movies';

export const getData = (filter) => dispatch => {
  let condition = !!filter ? '?' + filter : ''
  fetch(API + condition).then(response => response.json())
    .then(response => dispatch(afterGetData(response)))
    .catch(function (error) { console.log("ERROR=" + error) })
}

export function afterGetData(response) {
  return {
    type: 'GET_DATA',
    data: response.data,
  }
}

export const movieClick = id => (dispatch, getState) => {
  dispatch(afterFilmClicked(getFilmByID(id, getState)));
  dispatch(afterChangePage());
}

export function afterFilmClicked(film){
  return{
    type: 'AFTER_FILM_CLICKED',
    film
  }
}

const getFilmByID = (id, getState) => {
  console.log("getState",getState())
  let movies = !!getState().getFilms?getState().getFilms.data:undefined;
  let film =!!movies? movies.filter(item => item.id==id):undefined
  return !!film ? film[0] : {};
}

export const changePage = () => dispatch => {
  dispatch(afterChangePage());
}

export function afterChangePage(){
  return {
    type: 'CHANGE_PAGE'
  }
}

// export const findMoviesFromApi = () => {
//   return {
//     type: "PROMISE_EXTRACT",
//     payload: {
//       actions: ["FIND_MOVIE_START", "FIND_MOVIE_SUCCESS", "FIND_MOVIE_FALLBACK"],
//       data: fetch(API).then(response => response.json())
//     }
//   }
// }