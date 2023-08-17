import React, { useState } from 'react'

export const AddOrders = () => {

  const [date, setDate] = useState();

  return (

    <div className='m-2 border-black border-2 rounded-2xl shadow-xl shadow-black w-full'>
      <div className='h-full flex justify-center'>
        <div className='border-2 border-black my-auto rounded w-[50%] bg-black text-white'>

          <form action="">
            <div className='mt-2'>
              <label className='m-2 ml-8  font-bold '>Customer Name:</label>
              <input className='text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none' type="text" />
            </div>
            <div>
              <label className='m-2 ml-8  font-bold '>Mobile Number:</label>
              <input className='text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none' type="text" />
            </div>
            <div>
              <label className='m-2 ml-8 font-bold '>Email:</label>
              <input className='text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none' type="text" />
            </div>
            <div>
              <label className='m-2 ml-8 font-bold '>Address:</label>
              <input className='text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none' type="text" />
            </div>
            <div>
              <label className='m-2 ml-8 font-bold '>Product:</label>
              <input className='text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none' type="text" />
            </div>
            <div>
              <label className='m-2 ml-8 font-bold '>Status:</label>
              <select className='text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none'>
                <option value="">Select</option>
                <option value="Pending">Pending</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <div>
              <label className='m-2 ml-8 font-bold '>Delivery Date:</label>
              <input className='text-black border-2 border-black flex mx-auto m-2 w-[90%] rounded outline-none text-xl' type="date" onChange={e => setDate(e.target.value)} />
            </div>
            <div className='flex justify-center'>
              <button className='flex justify-center m-3 bg-white text-black p-2 font-bold rounded-md hover:bg-black hover:text-white'>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

