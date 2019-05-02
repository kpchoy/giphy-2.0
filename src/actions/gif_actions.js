import {
  apiFetchGifs
} from '../utils/api_util';

export const RECEIVE_ALL_GIFS = "RECEIVE_ALL_GIFS";

const receiveAllGifs = (gifs) => ({
  type: RECEIVE_ALL_GIFS,
  gifs,
})


export const fetchGifs = (query) => {
  return apiFetchGifs(query).then(response => dispatch => {
    const dataObj = {};
    response.data.data.forEach(gif => dataObj[gif.id] = gif);
    return dispatch(receiveAllGifs(dataObj));
  })
}