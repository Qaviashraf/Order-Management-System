import React, { useEffect, useState } from 'react'
import './EditModal.css'
import { ImCancelCircle } from 'react-icons/im'

function EditModal({ closeModal, edit }) {

    const { order_id, customer_name, mobile_number, email, address, product, status, deliveryDate } = edit;

    const [editrecords, setEditrecords] = useState({
        Id: order_id,
        c_name: customer_name,
        number: mobile_number,
        email: email,
        address: address,
        product: product,
        status: status,
        deliveryDate: deliveryDate
    })

    // const [date, setDate] = useState();

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, [])

    const onChange = (e) => {
        const { name, value } = e.target;
        setEditrecords(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <>

            <div className='modal-wrapper' onClick={closeModal}></div>

            <div className='modal-container w-[70%]'>
                <div className='flex justify-end my-2'>
                    <button onClick={closeModal} className='opacity-40 hover:opacity-10 text-2xl'><ImCancelCircle /></button>
                </div>
                <div className=''>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='ml-6 font-bold'>Order Id</label>
                        <input type="text" name="Id" onChange={onChange} value={editrecords.Id} disabled className='border-2 border-black m-2 p-1 mx-auto rounded w-[90%] outline-none' placeholder='Enter' />

                        <label htmlFor="" className='ml-6 font-bold'>Customer Name</label>
                        <input type="text" name="c_name" onChange={onChange} value={editrecords.c_name} className='border-2 border-black m-2 p-1 mx-auto rounded w-[90%] outline-none' placeholder='Enter' />

                        <label htmlFor="" className='ml-6 font-bold'>Mobile Number</label>
                        <input type="text" name="number" onChange={onChange} value={editrecords.number} className='border-2 border-black m-2 p-1 mx-auto rounded w-[90%] outline-none' placeholder='Enter' />

                        <label htmlFor="" className='ml-6 font-bold'>Email</label>
                        <input type="email" name="email" onChange={onChange} value={editrecords.email} className='border-2 border-black m-2 p-1 mx-auto rounded w-[90%] outline-none' placeholder='Enter' />

                        <label htmlFor="" className='ml-6 font-bold'>Address</label>
                        <input type="text" name="address" onChange={onChange} value={editrecords.address} className='border-2 border-black m-2 p-1 mx-auto rounded w-[90%] outline-none' placeholder='Enter' />

                        <label htmlFor="" className='ml-6 font-bold'>Product</label>
                        <input type="text" name="product" onChange={onChange} value={editrecords.product} className='border-2 border-black m-2 p-1 mx-auto rounded w-[90%] outline-none' placeholder='Enter' />

                        <label htmlFor="" className='ml-6 font-bold'>Status</label>
                        {/* <input type="text" name="status" onChange={onChange} /> */}
                        <select value={editrecords.status} onChange={onChange} className='border-2 border-black m-2 p-1 mx-auto rounded w-[90%] outline-none'>
                            <option value="">Select</option>
                            <option value="Pending">Pending</option>
                            <option value="Delivered">Delivered</option>
                        </select>

                        <label htmlFor="" className='ml-6 font-bold'>Delivery Date</label>
                        <input type="date" name="deliveryDate" onChange={onChange} value={editrecords.deliveryDate} className='border-2 border-black m-2 p-1 mx-auto rounded w-[90%] outline-none' placeholder='Enter' />
                    </div>
                </div>
                <div className='m-1 flex justify-center'>
                    <button className='bg-black text-white p-1 py-2 px-2 rounded font-bold hover:opacity-20'>Update</button>
                </div>
            </div>

        </>
    )
}

export default EditModal