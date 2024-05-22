import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './password.css'
import { Changepassword } from '../../Redux/auth/action'
import slider from '../../Assets/Slide.png'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/footer'
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa6";

function Password() {
    const passId = useSelector((store) => store.AuthReducer.RequestPass)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[showPassword,setShowPassword] = useState(false);
    const [passData, setPassData] = useState({ password: '' })



    const handlePass = (e) => {
        setPassData({
            ...passData,
            [e.target.name]: e.target.value

        })
    }

    const handlePassword = (e) => {
        e.preventDefault();
        const { id } = passId;
        passId.password = passData.password
        dispatch(Changepassword(id, passId))
        navigate('/login')

    }

    const eyeToggle =()=>{
        setShowPassword(!showPassword)
    }

    return (
        <>
            <Navbar />
            <div className='register-container'>
                <div className='register-image'>
                    <img src={slider} alt="" />
                </div>
                <div className='rigester-medmax-width'>
                    <p className='register-acntcrt'>Confirm password</p>
                    <p className='register-acntcrt-entr'  style={{paddingBottom:'16px'}}>Enter new password </p>
                    <form onSubmit={handlePassword}>
                    <div className='padding-cont-required'>
                        <div className='hide-show-funct'>
                            <input
                                name='password'
                                type={showPassword ? 'text' :'password'}
                                id='text-pas'
                                value={passData.password}
                                onChange={handlePass}
                                required
                            />
                                <span className='design-eyetoggle' onClick={() => eyeToggle()}><FaEyeSlash />
                            </span>
                        </div>
                        </div>
                        <button className='register-btn' type="submit">Update</button>


                    </form>

                    <div style={{ textAlign: 'center' }}>
                        <Link to='/login'>
                            <span style={{ color: 'gray', textDecoration: 'underline' }}>Back to login</span>
                        </Link><br />

                    </div>
                </div>

            </div>
            <Footer />


        </>
    )
}

export default Password