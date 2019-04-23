import axios from 'axios';
import apiKey from '../keys/api_key';

export const apiFetchGifs = (query) => {
  return axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: `${apiKey.giphKey}`,
      q: query,
      limit: 50,
    }
  });
}