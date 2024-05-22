import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import './login.css'
import {signIn } from '../../Redux/auth/action'
import { useNavigate } from 'react-router-dom';
import slider from '../../Assets/Slide.png'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/footer'
import Navbar from '../../Components/Navbar/Navbar';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash } from "react-icons/fa6";


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ''
        });
    }

    const eyeToggle = () => {
        setShowPassword(!showPassword);
    }

    const validateForm = () => {
        let valid = true;
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    };

    const Submithandler = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const response = await dispatch(signIn(formData));
            if (response.status) {
                setFormData({ email: '', password: '' });
                navigate('/admin');
                toast("Login Successfully!");
            } else {
                alert("Wrong password or email");
            }
        }
    };


    // const Submithandler = async (e) => {
    //     e.preventDefault();
    //     dispatch(signIn(formData));
    //     const response = await dispatch(signIn(formData));
    //     if (response.status) {
    //         setFormData({ email: '', password: '' });
    //         navigate('/admin');
    //         toast("Login Successfully!");
    //     }
    //     if (!response.status) {
    //         alert("wrong password OR email")
    //     }
    // };


    return (

        <>
            <Navbar />
            <div className='register-container'>
                <div className='register-image'>
                    <img src={slider} alt="" />
                </div>
                <div className='rigester-medmax-width'>
                    <p className='register-acntcrt'>Login in to Topshop</p>
                    <p className='register-acntcrt-entr'>Enter Your details below</p>

                    <form className='register-frm' onSubmit={Submithandler}>
                        <div className='hide-show-funct'>
                            <input
                                name='email'
                                type="email"
                                id='text-pas'
                                placeholder='enter email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                              {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className='hide-show-funct'>
                            <input
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                id='text-pas'
                                placeholder='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <span className='design-eyetoggle' onClick={() => eyeToggle()}><FaEyeSlash />
                            </span>
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <button className='register-btn' type="submit">Log IN</button>
                    </form>

                    <div style={{ textAlign: 'center' }}>
                        <span className='register-already-actn'>Don't have an account?  </span>
                        <Link to='/signup'>
                            <span style={{ color: 'gray', textDecoration: 'underline' }}>Register</span>
                        </Link><br />
                        <Link to ='/forgot-password'>
                        <span className='forget-pass'>Forgot password ?</span>
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default Login