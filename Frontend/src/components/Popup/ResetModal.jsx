import React, { useEffect, useState } from 'react'
// import './PswdModal.css'
import { ImCancelCircle } from 'react-icons/im'
import { CiUser } from 'react-icons/Ci'
import { MdEmail } from 'react-icons/Md'
import { BiSolidLock } from 'react-icons/Bi'
import { useNavigate } from 'react-router-dom'


export const ResetModal=({closeModal}) =>{
    const navigate = useNavigate();
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return() => {
        document.body.style.overflowY = 'scroll';    
        }
    },[])
    const returnsetting = () => {
        navigate('/Setting')
      }

    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     setEditrecords(prevState => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // }

return (
    <>

    <div className='modal-wrapper' onClick={returnsetting}></div>
    
    <div className='modal-container w-[100%]'>
        <div className='flex justify-end my-2'>
        <button onClick={returnsetting} className='opacity-40 hover:opacity-10 text-2xl'><ImCancelCircle/></button>
        </div>
        <div className="mb-4">
                     <p className='mb-4 text-lg font-medium'>Update Your Desired Feild</p>
                    <div className='flex justify-start ml-4 text-sm font-medium mb-1'>
                        <label  >First Name</label>
                        <label className='ml-40'>Last Name</label>
                    </div>
                    <input className=" w-1/2 p-2 border rounded-3xl "
                        type="text"
                        placeholder='Enter your first name'
                        value=""
                        onChange={e => setFirstName(e.target.value)} />
                    <input className=" w-1/2 p-2 border rounded-3xl"
                        type="text"
                        placeholder='Enter your last name'
                        value=""
                        onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="flex justify-start  text-sm font-medium mb-1 ml-6">Email</label>
                    <div className='flex justify-center items-center'>
                        <MdEmail className='mr-2 text-xl' />
                        <input className=" w-full p-2 border rounded-3xl"
                            type="email"
                            placeholder='Enter your email'
                            value=""
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="flex justify-start text-sm font-medium mb-1 ml-6">Password</label>
                    <div className='flex justify-center items-center'>
                        <BiSolidLock className='mr-2 text-xl' />
                        <input className="w-full p-2  rounded-3xl"
                            type="password"
                            placeholder='Enter your password'
                            value=""
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <BiSolidLock className="mr-2 text-xl" />
                        <input
                            className="w-full p-2 rounded-3xl"
                            type="password"
                            placeholder="Confirm your password"
                            value=""
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
        <div className='m-1 flex justify-center'>
        <button className='bg-black text-white p-1 px-2 rounded font-bold hover:opacity-20'>Proceed</button>
        </div>
    </div>
    
    </>
  )
}

export default ResetModal