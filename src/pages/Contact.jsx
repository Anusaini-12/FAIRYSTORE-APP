import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TextField from '@mui/material/TextField';
import "./Contact.css";
import Button from '@mui/material/Button';
import Footer from '../components/Footer';
import emailjs from "emailjs-com";



const Contact = () => {

  const [contactData, setContactData] = useState({
    firstname: "",
    lastname: "", 
    email: "",
    msg: ""
  });

  const handleChange = (e) => {
    setContactData((prevData) => (
      {...prevData, [e.target.name]: e.target.value}
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactData);
    
    // setContactData({
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   msg: ""
    // });

    emailjs.send(
    "service_ksva7nl",     
    "template_f63hpim",   
    contactData,           
    "EfbxTqGZn9kjae1y8"      
    )
    .then((result) => {
    alert("Message sent successfully!");
    setContactData({ 
      firstname: "", 
      lastname: "",
      email: "", 
      msg: "" }); 
    })
    .catch((error) => {
    alert("Failed to send message. Please try again.");
    console.error(error);
    });
  };

  return (
      <>
       <Navbar />

      <div className="contact-page">
       <div className="contact-main-section">
        <p>All your favorite books in one place.</p>
        <h1>Contact Now!</h1>
        <a href="/" className='go-to-back'>Back To Home</a>
       </div>
       
       <div className="contact-info-section">
        <div className="contact-info">
           <h1>Get In Touch</h1>
           <p>For any help, support, or inquiry - please fill out the contact form or get in touch through the following contact information.</p>
           <p>E-mail:  <strong>fairyStore.app@gmail.com</strong></p>
           <h2>Follow Us</h2>

           <div className="contact-social-icons">
            <FacebookIcon className='social-icon'/>
            <InstagramIcon className='social-icon'/>
            <TwitterIcon className='social-icon'/>
            <YouTubeIcon className='social-icon'/>
           </div>
        </div>
       
        <div className="contact-form">
           <h1>Contact Form</h1>
           <p>Send your message or question our way!</p>

           <form onSubmit={handleSubmit}>

               <TextField
                 fullWidth
                 required
                 placeholder="First Name"
                 name='firstname'
                 value={contactData.firstname}
                 onChange={handleChange}
               />

               <TextField
                 fullWidth
                 required
                 placeholder="Last Name"
                 name='lastname'
                 value={contactData.lastname}
                 onChange={handleChange}
               />

                <TextField
                 fullWidth
                 required
                 placeholder="Email"
                 type="email"
                 name="email"
                 value={contactData.email}
                 onChange={handleChange}
               />
                <TextField
                fullWidth
                 multiline
                 rows={4}
                 required
                 placeholder="Your Message"
                 name='msg'
                 value={contactData.msg}
                 onChange={handleChange}
               />
                <Button 
                type="submit"
                variant="contained" 
                style={
                  {backgroundColor: "#547792 "}
                }>
                Submit
                </Button>
           </form>
        </div>
       </div>
      </div>
      <Footer />
      </>
  )
}

export default Contact
