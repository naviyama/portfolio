const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
})

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: 'Portfolio Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      console.log('Error:', error)
      return res.status(500).send('Error sending email')
    }
    console.log('Email sent:', info.response)
    res.status(200).send('Email sent')
  })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})