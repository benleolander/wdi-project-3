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

  uniformString(string){
    return (
      string
        .toLowerCase()
        .replace(/ /g, '')
    )
  }

  filterResults(){
    if(this.state.search === '') return this.state.data
    const search = this.uniformString(this.state.search)
    return this.state.data.filter(item =>
      this.uniformString(item.name).includes(search) ||
      this.uniformString(item.creator.username).includes(search) ||
      this.uniformString(item.categories.join(',')).includes(search)
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
