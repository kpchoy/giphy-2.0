import {
  apiFetchGifs
} from '../utils/api_util';

export const RECEIVE_ALL_GIFS = "RECEIVE_ALL_GIFS";

const receiveAllGifs = (gifs) => ({
  type: RECEIVE_ALL_GIFS,
  gifs,
})


export const fetchGifs = (query) => dispatch => {


  return apiFetchGifs(query).then(response => {
    const dataObj = {};
    response.data.data.forEach(gif => dataObj[gif.id] = gif);

    debugger


    return dispatch(receiveAllGifs(dataObj));
  })
}