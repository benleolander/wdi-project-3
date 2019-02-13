import React from 'react'

import Select from 'react-select'
import { withRouter } from 'react-router-dom'
import makeAnimated from 'react-select/lib/animated'

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

const ItemsForm = ({ data, errors, handleChange, handleSubmit, handleSelect }) => {
  return(
    <main className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Post A New Item</h2>
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={handleChange}
            />
            {errors.name && <small className="help is-danger">A name is required</small>}
          </div>
          <div className="field">
            <label className="label">Image</label>
            <input
              className="input"
              name="image"
              placeholder="Image URL"
              value={data.image}
              onChange={handleChange}
            />
          </div>
          {errors.image && <small className="help is-danger">An image is required</small>}
          <div className="field">
            <label className="label">Description</label>
            <textarea
              className="input"
              name="description"
              placeholder="A detailed description of your item"
              value={data.description}
              onChange={handleChange}
            />
            {errors.description && <small className="help is-danger">A description is required</small>}
          </div>
          <div className="field">
            <label className="label">Categories</label>
            <Select
              isMulti
              clearValue
              name="categories"
              options={categories}
              onChange={handleSelect}
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

export default withRouter(ItemsForm)
