import React from 'react'
import '../../css/adminmen.css'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeDot from '../../Assets/three dots.png'


function AdminMobile() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [apiData, setApiData] = useState({});
    const [showSubLinks, setShowSubLinks] = useState(null);
    const navigate =useNavigate()

    async function getData() {
        try {
            let res = await fetch(`${BASE_URL}/mobiles`);
            let data = await res.json();
            setApiData(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    async function DeleteProduct(id) {
        try {
            let res = await fetch(`${BASE_URL}/mobiles/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            let data = await res.json();
            console.log(data);
            getData(); //fetch updated data after deletion
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const handleThreeDotClick = (index) => {
        setShowSubLinks((prev) => (prev === index ? null : index));
    };




  return (
   <>

     <div className='Adminmen-product-screen'>
                <h2 className='adminmen-prdct-gap'>Mobile Covers</h2>
                <div className='Adminmen-product-screen-wrapper'>
                    {apiData.length > 0 && apiData.map((elem, index) => (
                        <div className='admin-men-prdct' key={index}>
                                <div id='three-dot-rell' onClick={() => handleThreeDotClick(index)}> 
                            <img src={ThreeDot} alt='' />
                            {showSubLinks === index && (
                                        <div className='showthree-options'>
                                            <button onClick={() => navigate(`/edit-mobile-product/${elem.id}`)} className='show-three-optionsbutton'>Edit</button>
                                            
                                            {/* Button with Inline Function
                                            It directly calls DeleteProduct(elem.id) when the button is clicked. */}
                                            <button onClick={() => { DeleteProduct(elem.id) }} className='show-three-optionsbutton'>Delete</button>
                                            <button onClick={() => navigate(`/singlemen/${elem.id}`)} className='show-three-optionsbutton'>View</button>
                                        </div>
                                    )}
                            </div>
                            <img src={elem.productImgTagSrc} alt='' />
                            <p className='admin-product-brandname'>{elem.brand_namez}</p>
                            <p className='admin-product-title-name'>{elem.clr_shade_4}</p>
                            <button onClick={()=>navigate(`/singlemobile/${elem.id}`)}>View details</button>
                        </div>
                    ))}

                </div>

            </div>
              
   </>
  )
}

export default AdminMobile