const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

function sendMail(to, subject, body) {
  transporter.sendMail({
    to,
    from: process.env.EMAIL_USER,
    subject,
    text: body
  })
    .then(mail => console.log('Email Sent', mail))
    .catch(err => console.log(err))
}

function sendContactMail(creator, formData) {
  console.log('this is creator', creator)
  return sendMail(creator.email, console.log('this is creator.email', creator.email), 'Created- A user has contacted you!', `Hi ${creator.username},

  A user has reached out to you on Created! Please see their message below, then respond back to ${formData.email} at your earliest convenience.

  User Name: ${formData.name}
  User Message: ${formData.body}

  Regards,

  The Created Team`)
}

module.exports = {
  sendMail,
  sendContactMail
}
