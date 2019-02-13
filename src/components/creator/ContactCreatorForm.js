import React from 'react'

const ContactCreatorForm = ({ handleChange, handleSubmit, data, errors, success }) => {
  return(
    <form onSubmit={handleSubmit}>
      <h2 className="title">Contact Creator</h2>
      <div className="field">
        <label className="label">Name</label>
        <input
          className="input"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <small>{errors.name}</small>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <input
          className="input"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        {errors.email && <small>{errors.email}</small>}
      </div>
      <div className="field">
        <label className="label">Message</label>
        <textarea
          className="textarea"
          name="body"
          placeholder="Message to the creator, e.g. 'I'm interested in purchasing this item'"
          value={data.body}
          onChange={handleChange}
        />
        {errors.body && <small>{errors.body}</small>}
      </div>
      <button className="button is-black">Submit</button>
      {success && <small>{success}</small>}
    </form>
  )
}

export default ContactCreatorForm
