import { useEffect, useState } from "react";
import { CustomerData } from "./CstmrData";
import "./Order.css";
import { ExampleData } from "../ExampleData";
// import { useNavigate } from 'react-router-dom'
// import './EditModal.css'

export const Customers = () => {
  const [orders, setOrders] = useState([]);
  const [findOrders, setFindOrders] = useState([]);
  // const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const user = ExampleData.find((userData) => userData.id === id);
  const extractedOrders = user.orders;
  const uniquecustomer = [];
  const seenemail = new Set();

  extractedOrders.forEach((order) => {
    if (!seenemail.has(order.email)) {
      seenemail.add(order.email);
      uniquecustomer.push(order);
    }
  });

  const getData = () => {
    try {
      const res = { data: ExampleData };
      if (res.data.length > 0) {
        // const customers = <UniqueCustomer orders={extractedOrders} />;
        // const pendingorders = extractedOrders.filter((item) => item.status.toLowerCase() ==="pending")
        setOrders(uniquecustomer);
        setFindOrders(uniquecustomer);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const CrOrderPage = () => {
  //   navigate('/AddOrders')
  // }

  const Filter = (e) => {
    let query = e.target.value;
    query = query.toLowerCase();
    setFindOrders(
      orders.filter((item) => item.customer_name.toLowerCase().includes(query))
    );
  };

  return (
    <div className="w-full dark:bg-slate-700 m-2 border-black border-2 rounded-2xl shadow-xl shadow-black">
      <div className="flex ">
        <div className="dark:border-white m-2  px-0.5  border-black border-2  rounded-3xl h-fit ">
          <input
            type="text"
            placeholder="Enter Customer name"
            className="dark:bg-slate-700 dark:text-white ml-1 pl-2 h-7  outline-none"
            onChange={Filter}
          />
          <button className="dark:border-black my-0.5 p-2 px-6  text-white cursor-pointer bg-gray-800 rounded-3xl border-2 hover:bg-gray-700  hover:border-black ">
            Search
          </button>
        </div>

        {/* <div className="w-fit h-fit m-3 ml-96 p-2 px-6 text-white bg-gray-800 rounded-3xl border-2 hover:bg-gray-700 hover:border-black">
          <button onClick={CrOrderPage}>Create Order</button>
        </div> */}
      </div>

      <div>
        <table className=" dark:border-white my-5 mx-auto rounded-xl border-collapse shadow-md border-8 border-black-100 truncate max-w-7xl">
          <thead className="text-lg bg-purple-800 text-white">
            <tr>
              <th className="border-collapse  border border-black-100">
                Customer Name
              </th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <CustomerData CstmrData={findOrders} setCstmrData={setFindOrders} />
          </tbody>
        </table>
      </div>
    </div>
  );
};
