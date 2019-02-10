import React from 'react'

const CreatorCard = ({ creator }) => {
  return (
    <div className="card">
      <header className="card-header">
        <h3 className="card-header-title">More about {creator.username}</h3>
      </header>
      <div className="card-image">
        <figure className="image is-square">
          <img src={creator.image} alt={`${creator.username}'s Profile Image`} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          Creator bio, optional? Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
        </div>
      </div>
    </div>
  )
}

export default CreatorCard
