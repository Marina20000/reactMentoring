export default function getFilms(state = { data: [] }, action) {
  switch (action.type) {
    case 'GET_DATA': {
      return { ...state, data: action.data };
    }
    default:
      return state;
  }
}

