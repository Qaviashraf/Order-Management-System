import React from 'react'
import "./Order.css"

function OrderData({ Order }) {
  return (
    <>
      {
        Order.map((order,index) => {
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
            </tr>
          )
        })
      }
    </>
  )
}

export default OrderData