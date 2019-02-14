import React from 'react'

const StarRatings = ({ width }) => {
  return (
    <div className="star-ratings-css">
      <div
        className="star-ratings-css-top"
        style={{ width: `${width * 20}%` }}
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
  )
}

export default StarRatings
