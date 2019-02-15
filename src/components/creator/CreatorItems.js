import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from '../common/StarRatings'

const CreatorItems = ({ items, selected, handleClick }) => {
  const sortedItems = items.sort((a, b) => {
    const aDate = new Date(a.createdAt),
      bDate = new Date(b.createdAt)
    return bDate - aDate
  })
  return(
    <div className="column">
      <Link
        to={`/items/${items[selected]._id}`}
        className="profileImageLarge image"
        style={{
          backgroundImage: `url(${items[selected].image})`
        }}>
        <div id="creatorItemDescription">
          <h3 className="title">{items[selected].name}</h3>
          <StarRatings width={items[selected].averageRating} />
        </div>
      </Link>
      <div className="profileImagesSmall columns is-mobile">
        {
          sortedItems.map( (item, i) =>
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
