import React from 'react'
import { Link } from 'react-router-dom'

const ItemImage = ({ item }) => {
  return(
    <Link
      to={`/items/${item._id}`}
      className="itemDiv column is-one-fifth-desktop is-one-quarter-tablet is-one-third-mobile"
    >
      <div
        className="image is-square"
        style={ {backgroundImage: `url(${item.image})`} }
      >
        <div className="itemDescription is-square">
          <h3 className="title is-4">{item.name}</h3>
          <h3 className="subtitle is-5">by {item.creator.username}</h3>
          <div className="star-ratings-css">
            <div
              className="star-ratings-css-top"
              style={{ width: `${item.averageRating * 20}%` }}
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ItemImage
