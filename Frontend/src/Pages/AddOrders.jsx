import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const AddOrders = () => {

  const [createdata, setCreateData] = useState({
    customer_name: '',
    mobile_number: '',
    email: '',
    address: '',
    category: '',
    product: '',
    status: '',
    delivery_date: ''
  });

  const navigate = useNavigate();

  const onchange = (e) => {
    const { name, value } = e.target;
    setCreateData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const submit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('id');
    const { customer_name, mobile_number, email, address, category, product, status, delivery_date } = createdata;
    try {
      if (!customer_name || !mobile_number || !email || !address || !category || !product || !status || !delivery_date) {
        alert("All fields are required");
        return
      }
      const res = await axios.post(`http://localhost:3001/users/${userId}/orders`, {
        customer_name,
        mobile_number,
        email,
        address,
        status,
        delivery_date,
        category,
        product
      })
      if (res.status === 201) {
        alert("Successfully registered");
        navigate('/orders');
      }
      else {
        alert("Error")
      }
    } catch (e) {
      console.log(e);
    }
  }


  return (

    <div className='m-2 border-black border-2 rounded-2xl shadow-xl shadow-black w-full'>
      <div className='h-full flex justify-center'>
        <div className='border-2 border-black mt-4 p-3 rounded-xl w-[50%] h-fit bg-gray-900 text-white'>
          <h1 className='flex justify-center text-3xl font-semibold tracking-wide m-2'>Create Order</h1>
          <form action="">
            <div className=''>
              <label className='m-2 ml-8  font-bold '>Customer Name:</label>
              <input name='customer_name' onChange={onchange} className='pl-1 text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none' type="text" />
            </div>
            <div>
              <label className='m-2 ml-8  font-bold '>Mobile Number:</label>
              <input name='mobile_number' onChange={onchange} className='pl-1 text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none' type="text" />
            </div>
            <div>
              <label className='m-2 ml-8 font-bold '>Email:</label>
              <input name='email' onChange={onchange} className='pl-1 text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none' type="text" />
            </div>
            <div>
              <label className='m-2 ml-8 font-bold '>Address:</label>
              <input name='address' onChange={onchange} className='pl-1 text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none' type="text" />
            </div>
            <div>
              <label className='m-2 ml-8 font-bold '>Category:</label>
              <input name='category' onChange={onchange} className='pl-1 text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none' type="text" />
            </div>
            <div>
              <label className='m-2 ml-8 font-bold '>Product:</label>
              <input name='product' onChange={onchange} className='pl-1 text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none' type="text" />
            </div>
            <div>
              <label className='m-2 ml-8 font-bold '>Status:</label>
              <select name='status' onChange={onchange} className='pl-1 text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none'>
                <option value="">Select</option>
                <option value="Pending">Pending</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <div>
              <label className='m-2 ml-8 font-bold '>Delivery Date:</label>
              <input name='delivery_date' onChange={onchange} className='pl-1 text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none text-xl' type="date" />
            </div>
            <div className='flex justify-center'>
              <button onClick={submit} className='flex justify-center  bg-white text-black p-2 px-4 font-bold rounded-3xl hover:bg-slate-700 hover:text-white'>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

