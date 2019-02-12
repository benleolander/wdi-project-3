import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'

const categories = [
  { value: 'wood', label: 'Wood' },
  { value: 'metal', label: 'Metal' },
  { value: 'creative', label: 'Creative' },
  { value: 'stairs', label: 'Stairs' },
  { value: 'chair', label: 'Chair' },
  { value: 'wicker', label: 'Wicker' },
  { value: 'lights', label: 'Lights' },
  { value: 'hanging', label: 'Hanging' },
  { value: 'kitchen', label: 'Kitchen' },
  { value: 'bedroom', label: 'Bedroom' },
  { value: 'rail', label: 'Rail' },
  { value: 'mounted', label: 'Mounted' },
  { value: 'bathroom', label: 'Bathroom' },
  { value: 'drawers', label: 'Drawers' },
  { value: 'storage', label: 'Storage' },
  { value: 'homemade', label: 'Homemade' },
  { value: 'stand', label: 'Stand' },
  { value: 'living', label: 'Living' },
  { value: 'steel', label: 'Steel' },
  { value: 'coats', label: 'Coats' },
  { value: 'art', label: 'Art' },
  { value: 'lamp', label: 'Lamp' },
  { value: 'relax', label: 'Relax' },
  { value: 'outdoors', label: 'Outdoors' },
  { value: 'flowers', label: 'Flowers' },
  { value: 'clock', label: 'Clock' },
  { value: 'bed', label: 'Bed' },
  { value: 'boxes', label: 'Boxes' },
  { value: 'chic', label: 'Chic' },
  { value: 'indoor', label: 'Indoor' },
  { value: 'lighting', label: 'Lighting' },
  { value: 'study', label: 'Study' },
  { value: 'sofa', label: 'Sofa' },
  { value: 'wooden', label: 'Wooden' },
  { value: 'mirror', label: 'Mirror' },
  { value: 'shelves', label: 'Shelves' },
  { value: 'outdoors', label: 'Outdoors' }
]


class ItemsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        image: '',
        description: '',
        categories: []
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleChange({ target: {name, value}}) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios
      .post(
        '/api/items/new',
        this.state.data,
        { headers: { Authorization: `Bearer ${Auth.getToken()}` } }
      )
      .then(res => console.log(res.data))
      .catch(err => alert(err.message))
    this.props.history.push('/')
  }

  handleSelect(e){
    const categories = (e.map(select => select.value))
    const data = { ...this.state.data, categories }
    this.setState({ data })
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Post A New Item</h2>
            <div className="field">
              <label className="label">Name</label>
              <input
                className="input"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Image</label>
              <input
                className="input"
                name="image"
                placeholder="Image URL"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Description</label>
              <textarea
                className="input"
                name="description"
                placeholder="A detailed description of your item"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Categories</label>
              <Select
                isMulti
                clearValue
                name="categories"
                options={categories}
                onChange={this.handleSelect}
                components={makeAnimated()}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </main>
    )
  }

}

export default withRouter(ItemsNew)
