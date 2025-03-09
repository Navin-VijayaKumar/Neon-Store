import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formEndpoint = "https://api.web3forms.com/submit"; // Web3Forms API
    const formDataWithKey = {
      ...formData,
      access_key: "your_web3forms_access_key" // Replace with actual key
    };

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataWithKey),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    }
  };


  return (
    <div className="contact-con">
       <Link to='/slider'>
        
        <div className="shop-now-sec">
          <p>Shop Now</p>
        </div>
        </Link>
        <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have any questions? Feel free to reach out!</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-details">
        <p>Email: navinv.22cse@kongu.edu</p>
        <p>Phone: +91 8940773056</p>
      </div>

      <div className="social-links">
        <a href="https://facebook.com/neonstore" target="_blank">Facebook</a>
        <a href="https://twitter.com/neonstore" target="_blank">Twitter</a>
        <a href="https://instagram.com/neonstore" target="_blank">Instagram</a>
      </div>
    </div>
    </div>
  )
}

export default Contact
