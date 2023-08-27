import React, { useState } from 'react'
import "./Order.css"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import EditModal from './EditModal'
import DeleteModal from './DeleteModal';
import axios from 'axios'

function OrderData({ Order, setOrders }) {

  axios.defaults.withCredentials = true ;
  const [sendData, setSenddata] = useState()
  //pagination
  const itemPerPage = 9;
  const numberOfPages = Math.ceil(Order.length / itemPerPage);
  const pageIndex = Array.from({ length: numberOfPages }, (_, indx) => indx + 1)
  const [currentPage, setCurrentPage] = useState(0)
  const row = Order.slice(currentPage * itemPerPage, (currentPage + 1) * itemPerPage);

  //Modal
  const [showmodal, setShowModal] = useState(false)
  const [modaldata, setModaldata] = useState('')
  const [delmodal, setdelModal] = useState(false)

  //Modal Functions
  const closeModal = () => { setShowModal(false) }
  const closedelModal = () => { setdelModal(false) }

  const handleDelete = async (orderId) => {
    const userId = localStorage.getItem('id')
    try {
      const res = await axios.delete(`https://order-management-system-api.vercel.app/users/${userId}/orders/${orderId}`);
      setdelModal(false);
      setSenddata('');
      setOrders(prevOrders => prevOrders.filter(prevOrder => prevOrder.order_id !== orderId))
    } catch (error) {
      console.log(error);
    }
  };

  //Modal dialog Box
  const openEditmodel = (orderDetail) => {
    setModaldata(orderDetail)
    setShowModal(true)
  }

  const fetchdata = async () => {
    try {
      const id = localStorage.getItem('id');
      const resp = await axios.get(`https://order-management-system-api.vercel.app/user/${id}`);
      
      if(resp.data.orders){
        const extractedOrders = resp.data.orders;
        setOrders(extractedOrders);
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const handleUpdate = async (order) => {
    try{
      const userId = localStorage.getItem('id');
      const res = await axios.put(`https://order-management-system-api.vercel.app/${userId}/orders/${order.order_id}`, order)
      fetchdata();
      closeModal();
    }catch(e){
      console.log(e);
    }
    // console.log(order.order_id);
  }


  const deleteModal = (order) => {
    setdelModal(true)
    setSenddata(order)
  }

  //Pagination
  const handlePageChange = (PageNumber) => {
    setCurrentPage(PageNumber)
  }

  const maxStringAddress = 23;
  const maxStringEmail = 15;
  const maxStringName = 15;
  const maxStringProduct = 14;
  const maxStringnum = 14;

  return (
    <>
      {
        row.map((order, index) => {
          const { order_id, customer_name, mobile_number, email, address, product, status, delivery_date
          } = order;

          return (
            <tr  key={index}>
              <td className='cursor-pointer'>{order_id}</td>
              <td className='cursor-pointer' title={customer_name}>{customer_name.length > maxStringName ? customer_name.substring(0, maxStringName) + '...' : customer_name}</td>
              <td className='cursor-pointer' title={mobile_number}>{mobile_number.length > maxStringnum ? mobile_number.substring(0, maxStringnum) + '...' : mobile_number}</td>
              <td className='cursor-pointer' title={email}>{email.length > maxStringEmail ? email.substring(0, maxStringEmail) + '...' : email}</td>
              <td className='cursor-pointer' title={address}>{address.length > maxStringAddress ? address.substring(0, maxStringAddress) + '...' : address}</td>
              <td className='cursor-pointer' title={product}>{product.length > maxStringProduct ? product.substring(0, maxStringProduct) + '...' : product}</td>
              <td className='cursor-pointer' title={status}><p className={status === 'Delivered' ? 'deliver' : 'pending'}>{status}</p></td>
              <td className='cursor-pointer'>{(delivery_date).toString().split('T')[0]}</td>

              <td>
                <button onClick={() =>
                  openEditmodel(order)
                } className='hover:text-gray-400 text-2xl'><AiFillEdit />
                </button>
              </td>

              <td onClick={() => {
                  // deleteModal(order_id)
                  deleteModal(order.order_id)
              }}>
                <button className='hover:text-gray-400 text-2xl'><AiFillDelete /></button>
              </td>

            </tr>
          )
        })
      }
      <tr>
        <td className='border-none' colSpan={10}>
          {showmodal && <EditModal closeModal={closeModal} edit={modaldata} handleUpdate={handleUpdate}/>}
        </td>
      </tr>

      <tr>
        <td colSpan={10} className='border-none'>
          {delmodal && <DeleteModal closedelModal={closedelModal} propsOrder={sendData} onDelete={handleDelete} />}
        </td>
      </tr>

      <tr>
        <td colSpan={10} className='border-none'>
          <div className='mt-4 flex justify-end mt-[-25px] mr-16'>

            <button onClick={() => handlePageChange(currentPage - 1)} className='bg-black text-white mx-1 px-2 text-2xl hover:opacity-30' disabled={currentPage < 1}>&lt;</button>

            <div>
              {pageIndex.slice(Math.max(0, currentPage - 3), Math.min(numberOfPages, currentPage + numberOfPages))
                .map(page =>
                  <button onClick={() => handlePageChange(page - 1)} key={page} className='dark:text-white border border-black text-xs p-2 mx-1 hover:bg-black hover:text-white'>{page}</button>
                )}
            </div>

            <button onClick={() => handlePageChange(currentPage + 1)} className='bg-black text-white mx-1 px-2 text-2xl hover:opacity-30' disabled={currentPage >= numberOfPages - 1}>&gt;</button>

          </div>
        </td>
      </tr>

    </>
  )
}

export default OrderData