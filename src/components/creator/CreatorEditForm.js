import React from 'react'
import ReactFileStack from 'filestack-react'

const CreatorEditForm = ({
  handleChange,
  handleSubmit,
  data,
  errors
}) => {
  const { bio } = data
  return(
    <form onSubmit={handleSubmit}>
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

export default CreatorEditForm
