export default function getFilterByDataOrGenre(state = { film:{} }, action){
  switch (action.type){
    case 'GET_FILTER_BY_DATA_OR_GENRE': {
      console.log("action", action)
      return { ...state, film: action.film };
    }
    default:
    return state;
  }
}
