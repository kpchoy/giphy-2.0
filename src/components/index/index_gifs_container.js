import {
  connect
} from 'react-redux';
import {
  fetchGifs
} from '../../actions/gif_actions';
import IndexGifs from './index_gifs.js';

const mstp = state => {
  return {
    gifs: state.gifs
  }
}

const mdtp = dispatch => ({
  fetchGifs: (query) => dispatch(fetchGifs(query))
})

export default connect(mstp, mdtp)(IndexGifs)