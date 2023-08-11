// ICONS
import { CiUser } from 'react-icons/Ci'
import { MdEmail } from 'react-icons/Md'
import { BiSolidLock } from 'react-icons/Bi'


export const Login = () => {
    return (
        <div className="flex justify-around items-center mt-10 min-w-full min-h-full">
            <div className=" w-full max-w-md p-6 bg-gray bg-slate-200 rounded-lg shadow-lg shadow-black">
                
            <CiUser className="mx-32 my-4 p-2 text-9xl rounded-full border-2 border-black"/>
                <h1 className="flex justify-center text-3xl font-semibold mb-4 mr-4">Login</h1>
                <div className="mb-4">
                    <label className= "flex justify-start  text-sm font-medium mb-1 ml-6">Email</label>
                    <div className='flex justify-center items-center'>
                    <MdEmail className='mr-2 text-xl'/>
                    <input className=" w-full p-2 border rounded-3xl" type="email" placeholder='Enter your email' />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="flex justify-start text-sm font-medium mb-1 ml-6">Password</label>
                    <div className='flex justify-center items-center'>
                    <BiSolidLock className='mr-2 text-xl'/>
                    <input className="w-full p-2  rounded-3xl" type="password" placeholder='Enter your password' />
                    </div>
                </div>
                <button className="my-4 mx-36 py-2 px-6 bg-blue-400 text-white text-xl font-bold rounded-3xl hover:bg-blue-600">
                    Login
                </button>
            </div>
            <img style={{width:700 ,height:600}} src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/0b9bde76339897.5c6696712766c.gif" alt="" />
        </div>
    );
};
