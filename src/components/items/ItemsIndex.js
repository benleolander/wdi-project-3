import React from 'react'
import axios from 'axios'

import ItemImage from './ItemImage'
import SearchBar from '../common/SearchBar'

class ItemsIndex extends React.Component {

  componentDidMount(){
    axios.get('/api')
      .then(res => this.setState({ data: res.data }))
  }

  render(){
    return (
      <div>
        <SearchBar />
        <div className="indexDiv columns is-gapless is-mobile is-multiline">
          {
            !this.state ||
            this.state.data.map(item =>
              <ItemImage key={item._id} item={item} />
            )
          }
        </div>
      </div>
    )
  }

}

export default ItemsIndex
