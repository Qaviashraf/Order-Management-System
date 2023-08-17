import React, { useEffect, useState } from 'react'
// import './PswdModal.css'
import { ImCancelCircle } from 'react-icons/im'

export const PasswordModal=({closeModal}) =>{

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return() => {
        document.body.style.overflowY = 'scroll';    
        }
    },[])

    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     setEditrecords(prevState => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // }

return (
    <>

    <div className='modal-wrapper' onClick={closeModal}></div>
    
    <div className='modal-container w-[70%]'>
        <div className='flex justify-end my-2'>
        <button onClick={closeModal} className='opacity-40 hover:opacity-10 text-2xl'><ImCancelCircle/></button>
        </div>
        <div className=''>
            <div className='flex flex-col'>
            <label htmlFor="" className='ml-6 font-bold'>Enter Your Password</label>
            <input type="Password" name="Password"   className='border-2 border-black m-2 p-1 mx-auto rounded w-[90%] outline-none' placeholder='Password'/>
            
        </div>
        <div className='m-1 flex justify-center'>
        <button className='bg-black text-white p-1 px-2 rounded font-bold hover:opacity-20'>Proceed</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default PasswordModal