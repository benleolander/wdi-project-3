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
    .then(info => console.log('Email Sent', info))
    .catch(err => console.log(err))
}

function sendContactEmail(user) {
  return sendMail(creator.email, 'Created- A user has contact you!', `Hi ${creator.username},

  A user has reached out to you on Created! Please see their message below, then respond back to ${user.email} at your earliest convenience.

  User Name: ${user.name}
  User Message: ${user.body}

  Regards,

  The Created Team`)
}

module.exports = {
  sendMail,
  sendContactEmail
}
