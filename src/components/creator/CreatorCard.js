import React from 'react'
import { Link } from 'react-router-dom'

const CreatorCard = ({ creator }) => {
  return (
    <Link to={`/creators/${creator._id}`}>
      <div className="card creatorProfile">
        <header className="card-header">
          <h3 className="card-header-title">More about {creator.username}</h3>
        </header>
        <div className="card-image">
          <figure
            className="image is-square"
            style={{ backgroundImage: `url(${creator.image})` }}
          >
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            Creator bio, optional? Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CreatorCard
