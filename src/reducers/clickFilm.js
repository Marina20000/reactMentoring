export default function clickFilm(state = { film:{} }, action){
  switch (action.type){
    case 'AFTER_FILM_CLICKED': {
      return { ...state, film: action.film };
    }
    default:
    return state;
  }
}

