import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
// ICONS
import { ImCancelCircle } from 'react-icons/im'
import { CiUser } from 'react-icons/Ci'
import { MdEmail } from 'react-icons/Md'
import { BiSolidLock } from 'react-icons/Bi'


export const ResetModal = ({ closeModal, user }) => {

    axios.defaults.withCredentials = true ;
    const navigate = useNavigate();

    const [firstname, setFirstName] = useState(user.firstname);
    const [lastname, setLastName] = useState(user.lastname);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleproceed = async () => {
        if (!firstname || !lastname || !email || !password || !confirmPassword) {
            console.log('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            console.log('Passwords do not match.');
            return;
        }

        try {
            const updatedUser = {
                firstname,
                lastname,
                email,
                password
            };

            const id = localStorage.getItem('id');

            const response = await axios.put(`https://order-management-system-api.vercel.app/users/${id}`, updatedUser); // Use the correct route here
            console.log(response.data);

            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            alert('Updated successful!');
            navigate('/Setting');
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, [])
    const returnsetting = () => {
        navigate('/Setting')
    }

    return (
        <>

            <div className='modal-wrapper' onClick={returnsetting}></div>

            <div className='modal-container w-[100%]'>
                <div className='flex justify-end my-2'>
                    <button onClick={closeModal} className='opacity-40 hover:opacity-10 text-2xl'><ImCancelCircle /></button>
                </div>
                <div className="mb-4">
                    <p className='mb-4 text-lg font-medium'>Update Your Desired Feild</p>
                    <div className='flex justify-start ml-4 text-sm font-medium mb-1'>
                        <label  >First Name</label>
                        <label className='ml-40'>Last Name</label>
                    </div>
                    <input className=" w-1/2 p-2 border rounded-3xl "
                        type="text"
                        value={firstname}
                        placeholder='Enter your first name'
                        onChange={e => setFirstName(e.target.value)} />
                    <input className=" w-1/2 p-2 border rounded-3xl"
                        type="text"
                        value={lastname}
                        placeholder='Enter your last name'
                        onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="flex justify-start  text-sm font-medium mb-1 ml-6">Email</label>
                    <div className='flex justify-center items-center'>
                        <MdEmail className='mr-2 text-xl' />
                        <input className=" w-full p-2 border rounded-3xl"
                            type="email"
                            value={email}
                            placeholder='Enter your email'
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="flex justify-start text-sm font-medium mb-1 ml-6">Password</label>
                    <div className='flex justify-center items-center'>
                        <BiSolidLock className='mr-2 text-xl' />
                        <input className="w-full p-2  rounded-3xl"
                            type="text"
                            value={password}
                            placeholder='Enter your password'
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <BiSolidLock className="mr-2 text-xl" />
                        <input
                            className="w-full p-2 rounded-3xl"
                            type="text"
                            placeholder="Confirm your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className='m-1 flex justify-center'>
                    <button className='bg-black text-white p-1 px-2 rounded font-bold hover:opacity-20'
                        onClick={handleproceed}>Proceed</button>
                </div>
            </div>

        </>
    )
}

export default ResetModal