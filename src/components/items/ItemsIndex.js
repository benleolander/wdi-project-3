import React from 'react'
import axios from 'axios'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated'
import CategoriesData from '../common/CategoriesData'

import ItemImage from './ItemImage'
import SearchBar from '../common/SearchBar'

class ItemsIndex extends React.Component {
  constructor(){
    super()

    this.state = {
      search: '',
      categories: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }


  componentDidMount(){
    console.log('mounting')
    axios.get('/api/items')
      .then(res => this.setState({ data: res.data.reverse() }))
  }

  handleChange({ target: { value, name }}){
    this.setState({ [name]: value })
  }

  handleSelect(e){
    const categories = (e.map(select => select.value))
    this.setState({ categories })
  }

  uniformString(string){
    return (
      string
        .toLowerCase()
        .replace(/ /g, '')
    )
  }

  compareCategories(){
    if(this.state.categories.length === 0) return this.state.data
    return this.state.data.filter(item => {
      return this.state.categories.every(category => {
        return item.categories.includes(category)
      })
    })
  }

  filterResults(){
    if(this.state.search === '') return this.compareCategories()
    const search = this.uniformString(this.state.search)
    return this.compareCategories().filter(item =>
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
        <div className="field">
          <div className="control">
            <Select
              isMulti
              clearValue
              options={CategoriesData}
              components={makeAnimated()}
              onChange={this.handleSelect}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Filter by category..."
            />
          </div>
        </div>
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
