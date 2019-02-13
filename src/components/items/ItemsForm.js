import React from 'react'

import Select from 'react-select'
import { withRouter } from 'react-router-dom'
import makeAnimated from 'react-select/lib/animated'
import CategoriesData from '../common/CategoriesData'
import ReactFileStack from 'filestack-react'

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
              options={CategoriesData}
              onChange={handleSelect}
              components={makeAnimated()}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="field">
            <label className="label">Image</label>
            <ReactFileStack
              apikey={process.env.FILESTACK_KEY}
              mode={'pick'}
              onSuccess={(res) => handleChange({
                target: {
                  name: 'image',
                  value: res.filesUploaded[0].url
                }})}
              onError={(err) => console.log(err)}
              buttonText={'Add Image'}
              buttonClass={'button is-dark'}
            />
            {errors.image && <small className="help is-danger">An image is required</small>}
          </div>
          <div className="regButton">
            <button className="button is-black">Submit</button>
            <div className="thumbnail is-square" style={{
              backgroundImage: `url(${data.image})`
            }}></div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default withRouter(ItemsForm)
