import React from 'react'
import axios from 'axios'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated'
import CategoriesData from '../common/CategoriesData'

import ItemImage from './ItemImage'
import SearchBar from '../common/SearchBar'
import selectStyles from '../common/SelectStyles'
import Loading from '../common/Loading'

class ItemsIndex extends React.Component {
  constructor(){
    super()

    this.state = {
      search: '',
      categories: [],
      sorting: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.sortIndex = this.sortIndex.bind(this)
  }


  componentDidMount(){
    axios.get('/api/items')
      .then(res => this.setState({ data: this.sortByDate(res.data) }))
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

  sortIndex(){
    if(!this.state.sorting){
      const data = this.state.data.sort((a, b) => {
        return b.averageRating - a.averageRating
      })
      this.setState({ data, sorting: !this.state.sorting })
    } else {
      const data = this.sortByDate(this.state.data)
      this.setState({ data, sorting: !this.state.sorting})
    }
  }

  sortByDate(data){
    return data.sort((a, b) => {
      const aDate = new Date(a.createdAt)
      const bDate = new Date(b.createdAt)
      return bDate - aDate
    })
  }

  render(){
    if(!this.state.data) return <Loading />
    return (
      <div>
        <SearchBar
          handleChange={this.handleChange}
          search={this.state.search}
        />
        <div className="field has-addons">
          <div className="control is-expanded">
            <Select
              isMulti
              clearValue
              styles={selectStyles}
              options={CategoriesData}
              components={makeAnimated()}
              onChange={this.handleSelect}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Filter by category..."
            />
          </div>
          <div
            id="sortButton"
            className="button"
            onClick={this.sortIndex}
          >
            <span
              id="newest"
              className={this.state.sorting ? 'displayed' : ''}
            >Sort by newest</span>
            <span
              id="rating"
              className={this.state.sorting ? '' : 'displayed'}
            >Sort by rating</span>
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
