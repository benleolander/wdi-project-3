import React from 'react'
import axios from 'axios'

import ItemImage from './ItemImage'
import SearchBar from '../common/SearchBar'

class ItemsIndex extends React.Component {
  constructor(){
    super()

    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }


  componentDidMount(){
    axios.get('/api')
      .then(res => this.setState({ data: res.data }))
  }

  handleChange({ target: { value, name }}){
    this.setState({ [name]: value })
  }

  filterResults(){
    if(this.state.search === '') return this.state.data
    return this.state.data.filter(item =>
      item.name
        .toLowerCase()
        .replace(/ /g , '')
        .includes(this.state.search) ||
      item.creator.username
        .toLowerCase()
        .replace(/ /g, '')
        .includes(this.state.search)
    )
  }

  render(){
    return (
      <div>
        <SearchBar
          handleChange={this.handleChange}
          search={this.state.search}
        />
        <div className="indexDiv columns is-gapless is-mobile is-multiline">
          {
            !this.state.data ||
            this.filterResults().map(item =>
              <ItemImage key={item._id} item={item} />
            )
          }
        </div>
      </div>
    )
  }

}

export default ItemsIndex
