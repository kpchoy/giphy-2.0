import {
  RECEIVE_ALL_GIFS
} from '../actions/gif_actions'

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_GIFS:
      return {
        gifs: action.gifs
      }
    default:
      return state;
  }
};