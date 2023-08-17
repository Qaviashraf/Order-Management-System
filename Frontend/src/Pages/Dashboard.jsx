import { ExampleData } from '../ExampleData'
import { Link } from "react-router-dom";
import { BsBell } from 'react-icons/Bs'
import { LineGraph } from '../components/LineGraph'
import { PieGraph } from '../components/PieGraph'
import { useNavigate } from 'react-router-dom';


export const Dashboard = () => {

    const id = localStorage.getItem('id');
    const user = ExampleData.find(userData => userData.id === id);
    const allOrders = user.orders;

    const totalOrders = allOrders.length;
    const pendingOrders = allOrders.filter(order => order.status === 'Pending').length;
    const deliveredOrders = allOrders.filter(order => order.status === 'Delivered').length;


    const getTodaysOrders = () => {
        const today = new Date().toISOString().split('T')[0];
        const status = "Pending";
        return allOrders.filter(order => order.deliveryDate === today && order.status === status);
    };
    const todaysOrders = getTodaysOrders();

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Notifications', { state: { todaysOrders } });
    };

    return (


        <div className="dark:bg-slate-700 m-2 border-black border-2 rounded-2xl  w-4/5 h-full shadow-xl shadow-black">

            <div className="flex dark:text-white m-2 w-fit text-xl font-semibold tracking-widest text-gray text-slate-800">
                <img style={{ width: 50, height: 50 }} src="https://hansjoerg.me/img/avatar.png" alt="" />
                <h1 className='mt-4 ml-2 mr-96 pr-36'>Hi,{user.firstname} {user.lastname}</h1>
                <Link
                    to="/Notifications"
                    onClick={handleClick}>
                    <BsBell className='ml-96 mt-4 text-2xl' />
                </Link>
                <span className='bg-red-700 rounded-full h-fit w-fit text-xs text-white  px-1.5 py-0.5'>{todaysOrders.length}</span>
            </div>


            <div className='flex justify-center '>

                <div className=' border-black border-4 rounded-3xl m-10 pl-10 pt-8 w-72 h-48 bg-slate-300 text-4xl text-bold '>
                    <h1 className='ml-2'>Total Orders </h1>
                    <h1 className='ml-20 mt-4'>{totalOrders}</h1>
                </div>

                <div className=' border-black border-4 rounded-3xl m-10 pl-2 pt-8 w-72 h-48 bg-gray-400 text-4xl text-bold'>
                    <h1 className='m-0'>Delivered Orders </h1>
                    <h1 className='ml-28 mt-4'>{deliveredOrders}</h1>
                </div>

                <div className=' border-black border-4 rounded-3xl m-10 pl-2 pt-8 w-72 h-48 bg-slate-400 text-4xl text-bold'>
                    <h1 className='ml-2'>Pending Orders </h1>
                    <h1 className='ml-28 mt-4'>{pendingOrders}</h1>
                </div>

            </div>

            <div className='flex'>
                <LineGraph />
                <PieGraph />
            </div>
        </div>
    )
}