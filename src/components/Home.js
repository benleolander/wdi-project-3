import React from 'react'

import ItemsIndex from './items/ItemsIndex'
import SearchBar from './common/SearchBar'

const Home = () => {
  return(
    <section className="section">
      <div className="container">
        <SearchBar />
        <ItemsIndex />
      </div>
    </section>
  )
}

export default Home
