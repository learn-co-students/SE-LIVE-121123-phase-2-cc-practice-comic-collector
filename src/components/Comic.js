import { useState } from 'react'

function Comic({ id, image_url, issue, title }) {

  return (
    <div className="comic-item">

      {/* The image should render if the details aren't displayed */}
      <img src={image_url} alt={`Cover for ${title}`} />

      {/* The details should render if the image isn't displayed */}
      <h3>{title}</h3>
      <h4>{`Issue No. ${issue}`}</h4>
      <button>Remove</button>

    </div>
  )

}

export default Comic
