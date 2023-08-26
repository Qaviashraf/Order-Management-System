import React, { useEffect, useState } from 'react'
import ResetModal from './ResetModal';
import axios from 'axios';
//ICON
import { ImCancelCircle } from 'react-icons/im'


export const PasswordModal = ({ closeModal }) => {
    const [show, setshow] = useState(false);
    const [password, setpassword] = useState('')
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const id = localStorage.getItem('id');

        axios.get(`http://localhost:3001/user/${id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const close = () => {
        setshow(false);
    };
    const handleClick = () => {
        if (user.password === password) {
            setshow(true);
            setError(null);
        } else {
            setError("Please enter correct password");
        }
    };

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, [])


    return (
        <>

            <div className='modal-wrapper' onClick={closeModal}></div>

            <div className='modal-container w-[70%]'>
                <div className='flex justify-end my-2'>
                    <button onClick={closeModal} className='opacity-40 hover:opacity-10 text-2xl'><ImCancelCircle /></button>
                </div>
                <div className=''>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='ml-6 font-bold'>Enter Your Password</label>
                        <input type="Password" name="Password" className='border-2 border-black m-2 p-1 mx-auto rounded w-[90%] outline-none' placeholder='Password'
                            onChange={e => setpassword(e.target.value)} />
                        {error && <div className="text-red-500 m-2 pl-4">{error}</div>} 
                    </div>
                    <div className='m-1 flex justify-center'>
                        <button onClick={handleClick} className='bg-black text-white p-1 px-2 rounded font-bold hover:opacity-20'>Proceed</button>
                    </div>
                    <div>{show && <ResetModal closeModal={close} user={user} />}</div>
                </div>
            </div>
        </>
    )
}

export default PasswordModal