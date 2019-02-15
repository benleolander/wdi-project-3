import React from 'react'

import Select from 'react-select'
import { withRouter } from 'react-router-dom'
import makeAnimated from 'react-select/lib/animated'
import CategoriesData from '../common/CategoriesData'
import ReactFileStack from 'filestack-react'
import selectStyles from '../common/SelectStyles'

const ItemsForm = ({ data, errors, handleChange, handleSubmit, handleSelect }) => {
  return(
    <main className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={handleChange}
            />
            {errors.name && <small className="help is-danger">{errors.name}</small>}
          </div>
          <div className="field">
            <label className="label">Description</label>
            <textarea
              className="textarea"
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
              styles={selectStyles}
              name="categories"
              options={CategoriesData}
              onChange={handleSelect}
              components={makeAnimated()}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="regButton">
            <button className="button is-info">Submit</button>
            <div className="filestackContainer">
              <div className="thumbnail is-square" style={{
                backgroundImage: `url(${data.image})`
              }}></div>
              <div className="field filestack">
                <ReactFileStack
                  apikey={process.env.FILESTACK_KEY}
                  mode={'pick'}
                  onSuccess={(res) => handleChange({
                    target: {
                      name: 'image',
                      value: res.filesUploaded[0].url
                    }})}
                  onError={(err) => console.error(err)}
                  buttonText={'Add item image'}
                  buttonClass={'filestack-btn button is-info'}
                />
                {errors.image && <small className="help is-danger">An image is required</small>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default withRouter(ItemsForm)
