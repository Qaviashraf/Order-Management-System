import { useEffect, useState } from "react";
import { CustomerData } from "./CstmrData";
import "./Order.css";
import axios from 'axios';


export const Customers = () => {
  axios.defaults.withCredentials = true;
  const [user, setUser] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem('id');
    axios
      .get(`https://order-management-system-api.vercel.app/user/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const query =searchText.toLowerCase()
    const filtered = user ? user.orders.filter(order => order.customer_name.includes(query)) : [];
    setFilteredOrders(filtered);
  }, [user, searchText]);

  if (loading) {
    return (
      <div className="items-center h-screen ml-96 mt-72 pl-44 text-3xl">
        <img className="h-28" src="https://i.gifer.com/ZKZg.gif" ></img>
        <p >Loading...</p>
      </div>
    );
  }

  const customerOrdersMap = filteredOrders.reduce((map, order) => {
    if (!map.has(order.email)) {
      map.set(order.email, 1);
    } else {
      map.set(order.email, map.get(order.email) + 1);
    }
    return map;
  }, new Map());

  const uniqueCustomers = Array.from(new Set(filteredOrders.map(order => order.email))).map(email => {
    const order = filteredOrders.find(order => order.email === email);
    return {
      name: order ? order.customer_name : '',
      email: order ? order.email : '',
      number: order ? order.mobile_number : '',
      address: order ? order.address : '',
      orderCount: customerOrdersMap.get(email) || 0,
    };
  });





  return (
    <div className="w-full dark:bg-slate-700 m-2 border-black border-2 rounded-2xl shadow-xl shadow-black">
      <div className="flex ">
        <div className="dark:border-white m-2  px-0.5  border-black border-2  rounded-3xl h-fit ">
          <input
            type="text"
            placeholder="Enter Customer name"
            className="dark:bg-slate-700 dark:text-white ml-1 pl-2 h-7  outline-none"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="dark:border-black my-0.5 p-2 px-6  text-white cursor-pointer bg-gray-800 rounded-3xl border-2 hover:bg-gray-700  hover:border-black ">
            Search
          </button>
        </div>
      </div>

      <div>
        <table className=" dark:border-white my-5 mx-auto rounded-xl border-collapse shadow-md border-8 border-black-100 truncate max-w-7xl bg-slate-200">
          <thead className="text-lg bg-purple-800 text-white ">
            <tr>
              <th className="border-collapse  border border-black-100 p-2 ">
                Customer Name
              </th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Number of Orders</th>
            </tr>
          </thead>
          <tbody>
            <CustomerData customers={uniqueCustomers} />
          </tbody>
        </table>
      </div>
    </div>
  );
};
