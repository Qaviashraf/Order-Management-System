import { useEffect, useState } from 'react'
import OrderData from './OrderData'
import './Order.css'
import { ExampleData } from '../ExampleData'
import { useNavigate } from 'react-router-dom'
import './EditModal.css'

export const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [findOrders, setFindOrders] = useState([]);
  const navigate = useNavigate();

  //fetch Data
  const userId = localStorage.getItem('id');
  const getData = (id) => {
    try {
      const user = ExampleData.find(item => item.id === id);
      if (user) {
        const extractedOrders = user.orders;
        setOrders(extractedOrders);
        setFindOrders(extractedOrders);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getData(userId)
  }, []);


  //lINK TO ADD ORDER ROUTES
  const CrOrderPage = () => {
    navigate('/AddOrders')
  }

  const Filter = (e) => {
    setFindOrders(orders.filter((item) => item.order_id.includes(e.target.value)));
  }

  return (
    <div className='m-2 border-black border-2 rounded-2xl shadow-xl shadow-black'>
      <div className="flex justify-center">

        <div className="m-2 mr-96 px-0.5  border-black border-2  rounded-3xl h-fit ">
          <input type="text" placeholder="Search Order By Id" className="ml-1 pl-2 h-7  outline-none" onChange={Filter} />
        </div>

        <div className="w-fit h-fit m-3 ml-96 p-2 px-6 text-white bg-gray-800 rounded-3xl border-2 hover:bg-gray-700 hover:border-black">
          <button onClick={CrOrderPage}>Create Order</button>
        </div>
      </div>

      <div>
        <table className='my-5 mx-auto rounded-xl border-collapse shadow-md border-8 border-black-100 truncate max-w-7xl'>
          <thead className='text-lg bg-purple-800 text-white'>
            <tr>
              <th>Order Id</th>
              <th>Customer Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Product</th>
              <th>Status</th>
              <th>Delivery Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <OrderData Order={findOrders} setOrders={setFindOrders} />
          </tbody>
        </table>

      </div>

    </div>
  )
}