import React from 'react'

class SearchBar extends React.Component {
  constructor(){
    super()

    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target: { value, name }}){
    this.setState({ [name]: value })
  }

  render(){
    return(
      <div className="field">
        <div className="control">
          <input
            className="input"
            name="search"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar
