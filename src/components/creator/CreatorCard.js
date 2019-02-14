import React from 'react'
import { Link } from 'react-router-dom'

const CreatorCard = ({ creator }) => {
  return (
    <Link to={`/creators/${creator._id}`}>
      <div
        className="image is-square"
        style={{ backgroundImage: `url(${creator.image})` }}
      >
      </div>
    </Link>
  )
}

export default CreatorCard
