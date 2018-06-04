
export default function changePage(state = { showPage2: false }, action) {
  switch (action.type) {
    case 'CHANGE_PAGE': {
      return { ...state, showPage2: !state.showPage2 };
    }
    default:
      return state;
  }
}
