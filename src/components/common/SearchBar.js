import React from 'react'

const SearchBar = ({ search, handleChange }) => {
  return(
    <div className="field">
      <div className="control">
        <input
          className="input"
          type="text"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default SearchBar
