import { ExampleData } from '../ExampleData'
import React, { useState } from 'react';
// ICON
import { MdDeleteOutline } from 'react-icons/Md'


export const Notifications = () => {

    const id = localStorage.getItem('id');
    const user = ExampleData.find(userData => userData.id === id);
    const allOrders = user.orders;
    const today = new Date().toISOString().split('T')[0];
    const status = "Pending";
    const todaysOrders = allOrders.filter(order => order.deliveryDate === today && order.status === status);

    const [notifications, setNotifications] = useState(todaysOrders);
    const handleDelete = (orderId) => {
        const updatedNotifications = notifications.filter(order => order.order_id !== orderId);
        setNotifications(updatedNotifications);
    };



    return (
        <div className="dark:bg-slate-700 dark:text-white  m-2 pb-96 px-0.5 w-4/5 text-slate-800 border-black border-2  rounded-3xl h-fit ">
            <div className="m-4 ">
                <h1 className="text-5xl font-bold ">Notifications</h1>
                <p className="mt-2 text-lg font-medium">We wil help you out to deliver all the orders.</p>
            </div>
            {notifications.map((order) => (
                <div className='flex justify-between m-2 ml-4  p-2 border-black border-2 rounded-lg bg-slate-800 text-white text-base font-medium'
                    key={order.order_id}>
                    <p>Order number : {order.order_id} is {order.status} and has a delivery date of {order.deliveryDate}.</p>
                    <MdDeleteOutline className=' text-2xl cursor-pointer'
                        onClick={() => handleDelete(order.order_id)} />
                </div>
            ))}

        </div>
    )
}