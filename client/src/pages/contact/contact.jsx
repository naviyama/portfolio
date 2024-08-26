import './contact.css'

import { useState } from 'react'
import './Contact.css'


const Contact = () => {
  const [ contactInfo, setContactInfo ] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [ successMessage, setSuccessMessage ] = useState('')

  const handleChange = (e) => {
    const {name, value} = e.target;
    setContactInfo((prev) => ({
      ...prev, 
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactInfo),
      });
      
      if(response.ok){
        setSuccessMessage('Message sent successfully!')
        setContactInfo({
          name: '',
          email: '',
          message: '',
        })
      } else {
        setSuccessMessage('Error sending message')
      } 
    }catch (error){
        setSuccessMessage('Error sending message')
    }
  }
  

  return (
    <section id='contact'>
      <div className='section-wrapper'>
        <h3 className='section-title'>
          Contact
        </h3>
        <p className='contact-text'>Please fill in your information below and I look forward to hearing from you!</p>

        <form onSubmit={handleSubmit} className='contact-form'>
          <label htmlFor="name">
            Name
            <span className='required'>*</span>
          </label>
          <input 
            name="name" 
            type="text" 
            value={contactInfo.name}
            onChange={handleChange}
            required='required'
          />

          <label htmlFor="email">
            Email
            <span className='required'>*</span>
          </label>
          <input 
            name="email" 
            type="email" 
            value={contactInfo.email} 
            onChange={handleChange}
            required='required'
          />

          <label htmlFor="message">
            Message
            <span className='required'>*</span>
          </label>
          <textarea 
            name="message" 
            value={contactInfo.message} 
            onChange={handleChange}
            required='required'
          ></textarea>

          <button className='send-btn'>Send Email</button>
          {successMessage && <p className='success-message'>{successMessage}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact