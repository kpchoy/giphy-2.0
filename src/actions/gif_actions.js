import {
  apiFetchGifs
} from '../utils/api_util';

export const RECEIVE_ALL_GIPHS = "RECEIVE_ALL_GIPHS";

const receiveAllGifs = (gifs) => ({
  type: RECEIVE_ALL_GIPHS,
  gifs,
})


export const fetchGifs = (query) => {
  return apiFetchGifs(query).then(response => dispatch => {
    const dataObj = {};
    response.data.data.forEach(gif => dataObj[gif.id] = gif);
    return dispatch(receiveAllGifs(dataObj));
  })
}