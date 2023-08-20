import React, { useState } from 'react'
import "./Order.css"
import { AiFillEdit, AiFillDelete } from "react-icons/Ai"
import EditModal from './EditModal'
import DeleteModal from './DeleteModal';

function OrderData({ Order, setOrders }) {

  const [sendId, setSendid] = useState(0)
  //pagination
  const itemPerPage = 8;
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

  // Delete
  const handleDelete = (id) => {
    const toBeDeletedIndex = Order.findIndex((item) => item.order_id === id)
    Order.splice(toBeDeletedIndex, 1)
    setOrders([...Order])
    setdelModal(false)
    setSendid(0);
  }

  //Modal dialog Box
  const openEditmodel = (orderDetail) => {
    setModaldata(orderDetail)
    setShowModal(true)
  }


  const deleteModal = (id) => {
    setdelModal(true)
    setSendid(id)
  }

  //Pagination
  const handlePageChange = (PageNumber) => {
    setCurrentPage(PageNumber)
  }

  return (
    <>
      {
        row.map((order, index) => {
          const { order_id, customer_name, mobile_number, email, address, product, status, deliveryDate } = order;

          return (
            <tr className='dark:text-white  ' key={index}>
              <td>{order_id}</td>
              <td>{customer_name}</td>
              <td>{mobile_number}</td>
              <td>{email}</td>
              <td>{address}</td>
              <td>{product}</td>
              <td><p className={status === 'Delivered' ? 'deliver' : 'pending'}>{status}</p></td>
              <td>{deliveryDate}</td>

              <td>
                <button onClick={() =>
                  openEditmodel(order)
                } className='hover:text-gray-400 text-2xl'><AiFillEdit />
                </button>
              </td>

              <td onClick={() => {
                //  deleteOrder(order_id)
                deleteModal(order_id)
              }}>
                <button className='hover:text-gray-400 text-2xl'><AiFillDelete /></button>
              </td>

            </tr>
          )
        })
      }
      <tr>
        <td className='border-none' colSpan={10}>
          {showmodal && <EditModal closeModal={closeModal} edit={modaldata} />}
        </td>
      </tr>

      <tr>
        <td colSpan={10} className='border-none'>
          {delmodal && <DeleteModal closedelModal={closedelModal} propsId={sendId} onDelete={handleDelete} />}
        </td>
      </tr>

      <tr>
        <td colSpan={10} className='border-none'>
          <div className='mt-2 flex justify-end mt-[-40px]'>

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