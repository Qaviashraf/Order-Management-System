import React, { useEffect } from 'react'
import './DeleteModal.css'
import { ImCancelCircle } from 'react-icons/im'

function DeleteModal({ closedelModal, propsOrder, onDelete }) {

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    }
  }, [])

  return (
    <>
      <div className='modal-wrap' onClick={closedelModal}></div>
      <div className='modal-cont w-[50%]'>
        <div className='flex justify-between py-2'>
          <p className='text-2xl font-bold opacity-40'>Confirm Delete</p>
          <button className='opacity-40 hover:opacity-20 text-xl' onClick={closedelModal}><ImCancelCircle /></button>
        </div>
        <hr />
        <div className='py-5'>
          <p className='text-xl opacity-60'>Are You Sure For Delete This Record</p>
        </div>
        <hr />
        <div className='flex justify-between py-4'>
          <button className='rounded p-2 bg-gray-300 hover:opacity-40' onClick={closedelModal}>Cancel</button>
          <button className='rounded p-2 bg-red-500 hover:opacity-40 text-white' onClick={() => onDelete(propsOrder)} >Delete</button>
        </div>
      </div>
    </>
  )
}

export default DeleteModal