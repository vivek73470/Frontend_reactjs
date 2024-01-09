import React from 'react'
import '../css/arrival.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function NewArrivals() {
    const [homeData, setHomeData] = useState([]);

    async function getData() {
        try {
            let res = await fetch(`http://localhost:3500/mensdata?_limit=5`);
            let data = await res.json();
            console.log(data)
            setHomeData(data);
            console.log(homeData)
            console.log("abc")

        }
        catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className='newarrivals-container'>
                <div className='newarrivals-wrap'>
                    <div className='newarrivals-heading'>
                        <h2>New Arrivals</h2>
                    </div>
                    <Link to="/mencloths">
                        <div className='arrival-design-data'>
                            {homeData.length > 0 && homeData.map((elem) =>
                                <div key={elem.id}>
                                    <img src={elem.productImgTagSrc} alt='' />
                                </div>
                            )}
                        </div>
                    </Link>
                    <div className='gangs'>
                        <div className='gangstext'>
                            <h2>The GANG'S FAVOURITE</h2>
                        </div>
                        <Link to="/mencloths">
                            <div className='gangs-Image-arrival'>
                                <div>
                                    <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-clearance-zone-1670505866.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-trendy-jogs-common-1670506775.jpg" alt="" />
                                </div>
                            </div>
                            <div className='gangs-Image-arrival'>
                                <div>
                                    <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-windcheaters-m-1670248088.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.bewakoof.com/uploads/grid/app/full-sleeve-mid-sie-banner-1671179452.jpg" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewArrivals