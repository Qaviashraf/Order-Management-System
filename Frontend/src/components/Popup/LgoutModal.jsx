import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// ICON
import { ImCancelCircle } from 'react-icons/im'

export const LogoutModal=({closeModal}) =>{
    const navigate = useNavigate();
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return() => {
        document.body.style.overflowY = 'scroll';    
        }
    },[])
    const returnlogin = () => {
        navigate('/')
      }


return (
    <>

    <div className='modal-wrapper' onClick={closeModal}></div>
    
    <div className='modal-container w-[70%]'>
        <div className='flex justify-end my-2'>
        <button onClick={closeModal} className='opacity-40 hover:opacity-10 text-2xl'><ImCancelCircle/></button>
        </div>
        
            <div className='flex flex-col items-center'>
            <p> Are You Want to Logout</p>
        
        <div className='m-5 flex justify-around'>
        <button className='mr-5 w-20 bg-black text-white p-1 px-2 rounded font-bold hover:opacity-20' onClick={returnlogin}>Yes</button>
        <button onClick={closeModal} className=' bg-black text-white p-1 px-2 rounded font-bold hover:opacity-20'>Cancel</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default LogoutModal