import { UPDATE_HITS, CLEAR_HITS } from "../actions/actions";

const initialState = {
  hits: [],
};

function hitReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_HITS:
      return {
        hits: action.hits
      };
    case CLEAR_HITS:
      return {
        hits: []
      };
      
    default:
      return state;
  }
}
export default hitReducer;