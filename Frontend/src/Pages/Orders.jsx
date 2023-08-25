import React, { useEffect, useState } from 'react'
import OrderData from './OrderData'
import './Order.css'
import { useNavigate } from 'react-router-dom'
import './EditModal.css'
import { FcFilledFilter } from 'react-icons/fc'
import axios from 'axios'

export const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [findOrders, setFindOrders] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");

  const navigate = useNavigate();

  // Get DATA From API AND STORE INTO STATE
  const getData = async () => {
    try {
      const id = localStorage.getItem('id');
      const resp = await axios.get(`http://localhost:3001/user/${id}`);

      if (resp.data.orders) {
        const extractedOrders = resp.data.orders;
        setOrders(extractedOrders);
        setFindOrders(extractedOrders);
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  const CrOrderPage = () => {
    navigate('/AddOrders')
  }

  const Filter = (e) => {
    setFindOrders(orders.filter((item) => item.order_id.includes(e.target.value.toUpperCase())));
  };

  const applyFilter = () => {
    if (selectedFilter === "Pending") {
      setFindOrders(orders.filter((item) => item.status === "Pending"));
    } else if (selectedFilter === "Delivered") {
      setFindOrders(orders.filter((item) => item.status === "Delivered"));
    } else {
      setFindOrders(orders);
    }
  };

  useEffect(() => {
    applyFilter(); 
  }, [orders, selectedFilter]);

  return (
    <div className='m-2 border-black border-2 rounded-2xl shadow-xl shadow-black dark:bg-slate-700'>
      <div className="flex justify-between">
        <div className="m-2 dark:border-white px-0.5 border-black border-2 rounded-3xl h-fit">
          <input type="text" placeholder="Search By ID" className="dark:bg-slate-700  ml-1 pl-2 h-7  outline-none" onChange={Filter} />
          <button className="dark:border-black my-0.5 p-2 px-6  text-white cursor-pointer bg-gray-800 rounded-3xl border-2 hover:bg-gray-700  hover:border-black">Search</button>
        </div>
        <div className='flex items-center'>
          <div>
          <select name="filter"
            onChange={(e) => {
              setSelectedFilter(e.target.value);
              applyFilter();
            }} className='h-fit m-3 p-2 px-6 text-white bg-gray-800 rounded-3xl border-2 hover:bg-gray-700 hover:border-black text-[16px]'>
             <option value="">Filter</option>
             <option value="">Both</option>
            <option value="Pending">Only Pending Order</option>
            <option value="Delivered">Only Delivered Order</option>
          </select>
          </div>

        <div className="h-fit m-3 p-2 px-6 text-white bg-gray-800 rounded-3xl border-2 hover:bg-gray-700 hover:border-black">
          <button onClick={CrOrderPage}>Create Order</button>
        </div>
      </div>

      </div>

      <div>
        <table className='my-5 mx-auto rounded-xl border-collapse shadow-md border-8 border-black-100 truncate max-w-7xl'>
          <thead className=' text-lg bg-purple-800 text-white'>
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