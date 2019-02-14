import React from 'react'
import { Link } from 'react-router-dom'

const CreatorItems = ({ items, selected, handleClick }) => {
  return(
    <div className="column">
      <Link
        to={`/items/${items[selected]._id}`}
        className="profileImageLarge image"
        style={{
          backgroundImage: `url(${items[selected].image})`
        }}>
      </Link>
      <div className="profileImagesSmall columns is-mobile">
        {items.map( (item, i) =>
          <div
            className="column is-2"
            key={item._id}
          >
            <div
              onClick={(e) => handleClick(e, i)}
              className="image is-square"
              style={{
                backgroundImage: `url(${item.image})`
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CreatorItems
