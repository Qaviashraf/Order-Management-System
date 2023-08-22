import React, { useState, useEffect } from 'react';
import axios from 'axios';
// ICON
import { MdDeleteOutline } from 'react-icons/Md'


export const Notifications = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem('id');

        // Fetch user data using id from the backend
        axios.get(`http://localhost:3001/user/${id}`)
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
        if (user) {
            const todayUTC = new Date().toISOString().split('T')[0]; // Get today's date in UTC
            const status = 'Pending';
            const todaysOrders = user.orders.filter(order => {
                const orderDateUTC = new Date(order.deliveryDate).toISOString().split('T')[0];
                return orderDateUTC === todayUTC && order.status === status;
            });
            setNotifications(todaysOrders);
        }
    }, [user]);

    const handleDelete = (orderId) => {
        const updatedNotifications = notifications.filter(order => order.order_id !== orderId);
        setNotifications(updatedNotifications);
    };

    if (loading) {
        return <div className="items-center h-screen ml-96 mt-72 pl-52 text-3xl">
        <img className="h-28" src="https://i.gifer.com/ZKZg.gif" ></img>
        <p >Loading...</p>
        </div>
    }




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