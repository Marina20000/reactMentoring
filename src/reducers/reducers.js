export default function page(state = { data: [] }, action) {
  switch (action.type) {
    case 'GET_DATA': {
      return { ...state, data: action.data };
    }
    default:
      return state;
  }

}

