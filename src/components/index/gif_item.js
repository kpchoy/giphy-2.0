import React from 'react';

function gifItem({ gif }) {
  return (
    <img
      className="gif-item"
      src={gif.images.fixed_width.webp}
      id={gif.id}
      alt="gif_img"
    />
  )
}

export default gifItem;