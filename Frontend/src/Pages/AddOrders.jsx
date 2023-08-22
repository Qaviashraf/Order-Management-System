import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const AddOrders = () => {

  const [createdata, setCreateData] = useState({
    order_id: '', // Id Auto-generated
    customer_name: '',
    mobile_number: '',
    email: '',
    address: '',
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

  useEffect(() => {
    let num = +(localStorage.getItem('orderlength'))
      setCreateData(prevState => ({
        ...prevState,
        order_id: num + 1,
      }))
  }, [])

  const submit = async (e) => {
    e.preventDefault();
    const { order_id, customer_name, mobile_number, email, address, product, status, delivery_date } = createdata;
    try {
      if (!order_id || !customer_name || !mobile_number || !email || !address || !product || !status || !delivery_date) {
        alert("All fields are required");
        return
      }
      const res = await axios.post("http://localhost:3001/createorder", {
        order_id,
        customer_name,
        mobile_number,
        email,
        address,
        status,
        delivery_date,
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
        <div className='border-2 border-black my-auto rounded w-[50%] bg-black text-white'>
          <form action="">
            <div className='mt-2'>
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
              <button onClick={submit} className='flex justify-center m-3 bg-white text-black p-2 font-bold rounded-md hover:bg-black hover:text-white'>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

