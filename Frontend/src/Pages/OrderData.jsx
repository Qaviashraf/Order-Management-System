import React, { useState } from 'react'
import "./Order.css"
import { AiFillEdit, AiFillDelete } from "react-icons/Ai"
import EditModal from './EditModal'


function OrderData({ Order, setOrders }) {

  //pagination
  const itemPerPage = 9;
  const numberOfPages = Math.ceil(Order.length / itemPerPage);
  const pageIndex = Array.from({length: numberOfPages}, (_, indx) => indx + 1)
  const [currentPage, setCurrentPage] = useState(0)
  const row = Order.slice(currentPage * itemPerPage, (currentPage + 1) * itemPerPage);

  //Modal
  const [showmodal, setShowModal] = useState(false)
  const [modaldata, setModaldata] = useState('')
  const closeModal = () => {setShowModal(false)}

  //Delete
  const deleteOrder = (id) => {
    const toBeDeletedIndex = Order.findIndex((item) => item.order_id === id)
    Order.splice(toBeDeletedIndex, 1)
    setOrders([...Order])
  }


  const openEditmodel = (orderDetail) => {
    setModaldata(orderDetail)
    setShowModal(true)
  } 

  //Pagination
  const handlePageChange = (PageNumber) => {
    setCurrentPage(PageNumber)
  }

  return (
    <>
      {
        row.map((order,index) => {
          const { order_id, customer_name, mobile_number, email, address, product, status, deliveryDate } = order;

          return (
            <tr key={index}>
              <td>{order_id}</td>
              <td>{customer_name}</td>
              <td>{mobile_number}</td>
              <td>{email}</td>
              <td>{address}</td>
              <td>{product}</td>
              <td>{status}</td>
              <td>{deliveryDate}</td>
              
              <td>
                <button onClick={()=>                
                  openEditmodel(order)
              } className='hover:text-gray-400 text-2xl'><AiFillEdit/>
              </button>
              </td>
              <td onClick={() => {
                deleteOrder(order_id)
              }}>
                <button className='hover:text-gray-400 text-2xl'><AiFillDelete/></button>
               </td>
            </tr>
          )
        })
      }
            <tr className=''>
              <td colSpan={10}>
            {showmodal && <EditModal closeModal={closeModal} edit={modaldata}/>}
              </td>
            </tr>
            <tr className=''>
              <td colSpan={10}>
            <div className='mt-2 flex justify-end'>
                
                <button onClick={()=> handlePageChange(currentPage - 1)} className='bg-black text-white mx-1 px-2 text-2xl hover:opacity-30' disabled={currentPage < 1}>&lt;</button>

                <div>
                {pageIndex.slice(Math.max(0, currentPage - 3), Math.min(numberOfPages, currentPage + numberOfPages))
                .map( page => 
                <button onClick={()=>handlePageChange(page - 1)} key={page} className='border border-black text-xs p-2 mx-1 hover:border-2'>{page}</button>
                )}
                </div>
                
                <button onClick={()=> handlePageChange(currentPage + 1)} className='bg-black text-white mx-1 px-2 text-2xl hover:opacity-30' disabled={currentPage >= numberOfPages -1}>&gt;</button>
                
               
            </div>
              </td>  
            </tr>

    </>
  )
}

export default OrderData