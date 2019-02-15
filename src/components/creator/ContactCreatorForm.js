import React from 'react'

const ContactCreatorForm = ({ btnColour, btnText, handleChange, handleSubmit, data, errors }) => {
  return(
    <form onSubmit={handleSubmit}>
      <label className="label">Contact me</label>
      <div className="field">
        <label className="label">Your name</label>
        <input
          className="input"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <small className="help is-danger">{errors.name}</small>
      </div>
      <div className="field">
        <label className="label">Your email</label>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        {errors.email && <small className="help is-danger">{errors.email}</small>}
      </div>
      <div className="field">
        <label className="label">Your message</label>
        <textarea
          className="textarea"
          name="body"
          placeholder="Message to the creator, e.g. 'I'm interested in purchasing this item'"
          value={data.body}
          onChange={handleChange}
        />
        {errors.body && <small className="help is-danger">{errors.body}</small>}
      </div>
      <button className={`button is-${btnColour}`}><span>{btnText} </span></button>
    </form>
  )
}

export default ContactCreatorForm
