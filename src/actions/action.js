const API = 'http://react-cdp-api.herokuapp.com/movies';

export const getData = () => dispatch => {
    fetch(API).then(response => response.json())
       .then(response => dispatch(afterGetData(response)))
      .catch(function(error){console.log("ERROR")})
}

export function afterGetData(response) {
    return {
      type: 'GET_DATA',
      data: response.data
    }
  }

export const filterByDataOrGenre = (filter) => dispatch => {
  fetch(API+'?searchBy='+filter).then(response=>response.json())
  .then(response => dispatch(afterFilterData(response)
))
}

export function afterFilterData(response){
  return {
    type: 'GET_FILTER_BY_DATA_OR_GENRE',
    film:response
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