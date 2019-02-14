import React from 'react'
import ReactFileStack from 'filestack-react'

const RegisterForm = ({
  handleChange,
  handleSubmit,
  data,
  errors
}) => {
  const { username, email, password, passwordConfirmation, bio } = data
  return(
    <form onSubmit={handleSubmit}>
      <h2 className="title">Register</h2>
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input
            className="input"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
          {errors.username && <small className="help is-danger">{errors.username}</small>}
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <small className="help is-danger">{errors.email}</small>}
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        {errors.password && <small className="help is-danger">{errors.password}</small>}
      </div>
      <div className="field">
        <label className="label">Password Confirmation</label>
        <input
          className="input"
          type="password"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label className="label">Bio</label>
        <textarea
          className="textarea"
          name="bio"
          placeholder="Please add a bio"
          value={bio}
          onChange={handleChange}
        />
        {errors.bio && <small className="help is-danger">Please write a small bio about yourself</small>}
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
              onError={(err) => console.log(err)}
              buttonText={'Add Profile pic'}
              buttonClass={'filestack-btn button is-info'}
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default RegisterForm
