import React from 'react'
import './index.css'
import { useDispatch } from 'react-redux'
import { addProducts } from '../../Redux/products/action';

function Addproduct() {
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    category: '',
    title: '',
    price: '',
    description: '',
    plp: '',
    brand_namez: '',
    discountedPriceText: '',
    actualPriceText: '',
    discount_price_box: '',
    image: '',
  })



  const handleChange = (e) => {
    setData((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProducts(data))
    console.log('Data:', data);
  }

  return (
    <>
      <div className="container-addproduct">
        <h1 className='addproduct-title'>Add Products</h1>
        <form className='addproduct-form' onSubmit={handleSubmit}>
          <div className='add-admin-prd-rww'>
            <select
              name='category'
              className='addproduct-input-drp'
              value={data.category}
              onChange={handleChange}
            >
              <option value='' disabled>Select Category</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="covers">Mobile Cover</option>

            </select>
            <input
              name='image'
              type="text"
              className='addproduct-input'
              id="title"
              placeholder=" enter image url"
              value={data.image}
              onChange={handleChange}
            />
          </div>
          <div className='add-admin-prd-rww'>
            <input
              name='title'
              type="text"
              className='addproduct-input'
              id="title"
              placeholder="enter title"
              value={data.title}
              onChange={handleChange}
            />
            <input
              name='brand_namez'
              type="text"
              className='addproduct-input'
              id="author"
              placeholder="enter brand_namez"
              value={data.brand_namez}
              onChange={handleChange}
            />
          </div>
          <div className='add-admin-prd-rww'>
            <input
              name='plp'
              type="text"
              className='addproduct-input'
              id="title"
              placeholder="enter size "
              value={data.plp}
              onChange={handleChange}
            />
            <input
              name='price'
              type="text"
              className='addproduct-input'
              id="image"
              placeholder=" enter price"
              value={data.price}
              onChange={handleChange}
            />
          </div>
          <div className='add-admin-prd-rww'>
            <input
              name='actualPriceText'
              type="text"
              className='addproduct-input'
              id="image"
              placeholder="enter actualPriceText"
              value={data.actualPriceText}
              onChange={handleChange}
            />
            <input
              name='discount_price_box'
              type="text"
              className='addproduct-input'
              id="image"
              placeholder="enter discount_price_box"
              value={data.discount_price_box}
              onChange={handleChange}
            />
          </div>
          <div className='add-admin-prd-rww'>
            <input
              name='discountedPriceText'
              type="text"
              className='addproduct-input'
              id="image"
              placeholder="enter discountedPriceText"
              value={data.discountedPriceText}
              onChange={handleChange}
            />
            <input
              name='description'
              type="text"
              className='addproduct-input'
              id="author"
              placeholder="enter description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <button className='addproduct-button' >submit</button>
        </form>
      </div>

    </>
  )
}

export default Addproduct