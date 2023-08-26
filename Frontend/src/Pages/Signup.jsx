import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

// ICONS
import { CiUser } from 'react-icons/Ci'
import { MdEmail } from 'react-icons/Md'
import { BiSolidLock } from 'react-icons/Bi'



export const Signup = () => {


    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignup = async () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/user/check-email', { email });

            if (response.data.exists) {
                setErrorMessage('Email is already registered.');
            } else {
                // If email is not registered, proceed with signup
                const newUser = {
                    firstName,
                    lastName,
                    email,
                    password
                };

                // Make API call to create the user
                await axios.post('http://localhost:3001/user', newUser);

                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setErrorMessage('');

                alert('Sign up successful!');
                navigate('/');
            }
        } catch (error) {
            console.error('Error checking email:', error);
        }
    };

    return (

        <div className="flex justify-around items-center mt-10 mb-10 min-w-full min-h-full">
            <div className=" w-full max-w-md p-6 bg-gray bg-slate-200 rounded-lg shadow-lg shadow-black">
                <CiUser className="mx-32 my-4 p-2 text-9xl rounded-full border-2 border-black" />
                <h1 className="flex justify-center text-3xl font-semibold mb-4 mr-4">Sign In</h1>
                <div className="mb-4">
                    <div className='flex justify-start ml-2 text-sm font-medium mb-1'>
                        <label  >First Name</label>
                        <label className='ml-32'>Last Name</label>
                    </div>
                    <input className=" w-1/2 p-2 border rounded-3xl "
                        type="text"
                        placeholder='Enter your first name'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)} />
                    <input className=" w-1/2 p-2 border rounded-3xl"
                        type="text"
                        placeholder='Enter your last name'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="flex justify-start  text-sm font-medium mb-1 ml-6">Email</label>
                    <div className='flex justify-center items-center'>
                        <MdEmail className='mr-2 text-xl' />
                        <input className=" w-full p-2 border rounded-3xl"
                            type="email"
                            placeholder='Enter your email'
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="flex justify-start text-sm font-medium mb-1 ml-6">Password</label>
                    <div className='flex justify-center items-center'>
                        <BiSolidLock className='mr-2 text-xl' />
                        <input className="w-full p-2  rounded-3xl"
                            type="password"
                            placeholder='Enter your password'
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <BiSolidLock className="mr-2 text-xl" />
                        <input
                            className="w-full p-2 rounded-3xl"
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}

                <button className="my-4 mx-32 py-2 px-6 bg-blue-400 text-white text-xl font-bold  rounded-3xl hover:bg-blue-600"
                    onClick={handleSignup}>
                    Sign In
                </button>
            </div>
            <img style={{ width: 700, height: 600 }} src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/0b9bde76339897.5c6696712766c.gif" alt="" />
        </div>
    )
}