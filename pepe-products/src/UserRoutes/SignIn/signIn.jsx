import React, { useState } from 'react';
import '../SignIn/sign.css';
import LoginImage from '../../Assets/login image.webp';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {
  const { toggleAuth } = React.useContext(AuthContext);
  const initState = {
    email: '',
    password: ''
  };

  const [formData, setFormData] = useState(initState);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value
    });
  };

  async function LoginToDashboard() {
    try {
      let isUserFound = false;
      let res = await fetch(`http://localhost:3500/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      let users = await res.json();

      // Check if provided credentials match any user data
      users.forEach((user) => {
        if (user.email === formData.email && user.password === formData.password) {
          isUserFound = true;
          toggleAuth();
          localStorage.setItem('userId', user.id)
          navigate(`/dashboard`);
          toast("Login Successfully!");
       

          


        }
      });

    } catch (err) {
      console.log(err);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault(e);
  
  };


  return (
    <>
     
      <div className='sign-incard'>
        <div className='sign-incard-left-side'>
          <div>
            <h2 className='signin-welcome-to'>Welcome to the world of Fashion Store!</h2>
          </div>
          <div className='sign-incard-left-side-image'>
            <img src={LoginImage} alt='' />
          </div>
        </div>
        <div className='login-card'>
          <div className='login-card-wrap'>
            <div className='login-card-adminsignin'>
              <div className='login-card-adminsignin-head'>
                <h1 className='welcome'>Admin SignIn !</h1>
              </div>
              <div className='login-card-adminsignup'>
                <p className='content'>Don't have account?</p>
                <Link to='/signup'>
                  <p className='content-signup'>Signup</p>
                </Link>
              </div>

            </div>

            <form className='content-form' onSubmit={handleSubmit}>
              <div className='content-form-input-wid'>
                <input
                  name='email'
                  type='email'
                  placeholder='Email'
                  className='form-content-input'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='content-form-input-wid'>

                <input
                  name='password'
                  type='password'
                  placeholder='Password'
                  className='form-content-input'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-button'>
                <button id='btn-frm' onClick={() => LoginToDashboard()}>Submit</button>
              </div>
            </form>
          </div>
        </div>
 
      </div>
     
     
    </>
  );
};

export default SignIn;
