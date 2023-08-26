import React, { useState } from "react";
import "./Order.css";

export function CustomerData({ customers }) {

  //pagination
  const itemPerPage = 8;
  const numberOfPages = Math.ceil(customers.length / itemPerPage);
  const pageIndex = Array.from(
    { length: numberOfPages },
    (_, indx) => indx + 1
  );
  const [currentPage, setCurrentPage] = useState(0);
  const row = customers.slice(
    currentPage * itemPerPage,
    (currentPage + 1) * itemPerPage
  );

  //Pagination
  const handlePageChange = (PageNumber) => {
    setCurrentPage(PageNumber);
  };

 
  return (
    <>
      {customers.map((customer, index) => (
        <tr key={index}>
          <td>{customer.name}</td>
          <td>{customer.number}</td>
          <td>{customer.email}</td>
          <td>{customer.address}</td>
          <td>{customer.orderCount}</td>
        </tr>
      ))}

    </>
  );
}

export default CustomerData;
