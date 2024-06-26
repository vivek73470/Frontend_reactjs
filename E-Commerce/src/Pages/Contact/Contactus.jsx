import React from 'react'
import './contact.css'
import { useState } from 'react'
import Footer from '../../Components/Footer/footer';
import Navbar from '../../Components/Navbar/Navbar';



function Contactus() {
  const [submitted, setSubmitted] = useState('');
  const initState ={
    name: "",
    email: "",
    phone: "",
    message: ""
  }
const[formData,setFormData]= useState(initState);

const handleChange = (e) =>{
  const{name,value}=e.target;
  setFormData((prevformData) =>({
    ...prevformData,
    [name]:value
    
  }));


}

const handleSubmit =(e)=>{
  e.preventDefault();
  setFormData(initState);
  setSubmitted("Thank you for contacting us! We'll get back to you soon.")
  setTimeout(()=>{
    setSubmitted('')
  },3000)

}
  return (
    <>

    <Navbar/>

    <div className='contact-screen'>
      <span className='contact-getin'><h2>Get in Touch with us</h2></span>
      <div className="contact-form">
        <h4 className='contact-drop'>Drop us a message</h4>
        <form className='contact-frmm' onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
               />
          </div>
          <div className="form-group">
          
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
               />
          </div>
          <div className="form-group">
          
            <input
              name="phone"
              type="tel"
              id="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              />
          </div>
          <div className="form-group">
           
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              >
              </textarea>
          </div>
          <input type="submit" className='contact-bnt' value="Submit"/>
          {submitted && <p className='contact-after-submitt'>{submitted}</p>}
        </form>
      </div>
      
      </div>
      <Footer />
    </>
  )
}

export default Contactus