// ICONS
import { Link } from "react-router-dom";
import { SiGoogletagmanager } from 'react-icons/Si'
import { LuLayoutDashboard } from 'react-icons/Lu'
import { TbListDetails } from 'react-icons/Tb'
import { PiUserFocusThin } from 'react-icons/Pi'
import { AiFillSetting } from 'react-icons/Ai'
import { BsBell } from 'react-icons/Bs'
import { AiOutlineLogout } from 'react-icons/Ai'


export const Sidebar = () => {

  return (
    <div className="flex flex-col pb-64 pt-12 p-8 m-2 w-fit bg-gray-900 text-white rounded-xl shadow-2xl shadow-black">
      <div className="">

        <div className='flex justify-center'>
          <SiGoogletagmanager className='p-2 text-5xl' />
          <div className="text-xl font-bold mb-9 p-2">My Orders</div>
        </div>

        <div className="flex flex-col space-y-2">

          <Link to="/Dashboard" className="flex cursor-pointer pt-1 pb-0.5 hover:bg-gray-800 rounded">
            <LuLayoutDashboard className="m-2 mr-4 text-xl" />
            <div className="text-lg ">
              Dashboard
            </div>
          </Link>

          <Link to="/Orders" className="flex cursor-pointer pt-1 pb-0.5 hover:bg-gray-800  rounded">
            <TbListDetails className="m-2 mr-4 text-xl" />
            <div className="text-lg">
              Orders
            </div>
          </Link>

          <Link to="/Customers" className="flex cursor-pointer pt-1 pb-0.5 hover:bg-gray-800  rounded">
            <PiUserFocusThin className="m-2 mr-4 text-xl" />
            <div className="text-lg">
              Customers
            </div>
          </Link>

          <Link to="/Notifications" className="flex cursor-pointer pt-1 pb-0.5 hover:bg-gray-800  rounded">
            <BsBell className="m-2 mr-4 text-xl" />
            <div className="text-lg">
              Notifications
            </div>
          </Link>

          <Link to="/Setting" className="flex cursor-pointer pt-1 pb-0.5 hover:bg-gray-800  rounded">
            <AiFillSetting className="m-2 mr-4 text-xl" />
            <div className="text-lg">
              Settings
            </div>
          </Link>

          <Link to="/" className="flex cursor-pointer pt-1 hover:bg-gray-800  rounded">
            <AiOutlineLogout className="m-2 mr-4 text-xl" />
            <div className="text-lg">
              Logout
            </div>
          </Link>

        </div>
      </div>
    </div>
  )

}