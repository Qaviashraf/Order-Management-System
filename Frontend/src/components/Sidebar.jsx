// ICONS
import { Link } from "react-router-dom";
import { SiGoogletagmanager } from 'react-icons/Si'
import { LuLayoutDashboard } from 'react-icons/Lu'
import { TbListDetails } from 'react-icons/Tb'
import { PiUserFocusThin } from 'react-icons/Pi'
import { AiFillSetting } from 'react-icons/Ai'



export const Sidebar = () => {


  if (window.location.pathname==="/Login" | window.location.pathname==="/SignIn" ) return null; 



  return (
    <div className="flex flex-col  pb-96 pt-16 p-8 m-2 w-fit bg-gray-900 text-white rounded-xl  shadow-2xl shadow-black ">
      <div className="mb-2">

        <div className='flex justify-center '>
          <SiGoogletagmanager className='p-2 text-5xl' />
          <div className="text-xl font-bold mb-9 p-2">My Orders</div>
        </div>

        <div className="flex flex-col space-y-2">

          <Link to="/" className="flex cursor-pointer hover:bg-gray-800 rounded">
            <LuLayoutDashboard className="m-2 mr-4 text-xl" />
            <div className="text-lg ">
              Dashboard
            </div>
          </Link>

          <Link to="/Orders" className="flex cursor-pointer hover:bg-gray-800  rounded">
            <TbListDetails className="m-2 mr-4 text-xl" />
            <div className="text-lg">
              Orders
            </div>
          </Link>

          <Link to="/Customers" className="flex cursor-pointer hover:bg-gray-800  rounded">
            <PiUserFocusThin className="m-2 mr-4 text-xl" />
            <div className="text-lg">
              Customers
            </div>
          </Link>

          <Link to="/Setting" className="flex cursor-pointer hover:bg-gray-800  rounded">
            <AiFillSetting className="m-2 mr-4 text-xl" />
            <div className="text-lg">
              Settings
            </div>
          </Link>

        </div>
      </div>
    </div>
  )

}