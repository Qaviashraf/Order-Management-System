import { useEffect, useState } from 'react'
import { options } from "../DataSetting.jsx"
// console.log(options.heading)
export const Setting = () => {
    const [setting, setsetting] = useState(options);
    console.log(setting)
    return (
        <div className=" m-2 border-black border-2 rounded-2xl w-4/5  shadow-xl shadow-black">
            <div className='m-8'>
                <div className='flex justify-between mb-2 font-bold'><h1 className='text-5xl '>Setting</h1>
                    <input className='h-8 bg-slate-200 py-3 pl-5 mr-40 mt-5 focus:bg-white
           border-black border-2 rounded-2xl' type="text" placeholder="search" /></div>
                <p className='font-bold'>Manage your account settings and preferences</p>
            </div>
            <div className='m-10 font-bold'>
                {setting.map((setting, index) => {
                    return (
                        <div className='' key={index}>

                            <h1 className='text-3xl mt-5'>{setting.heading}</h1>
                            <div className='text-xl ml-4  '>
                                {setting.values.map((setting, index) => {
                                    return (
                                        <div className='flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer' key={index}>
                                            <ul >
                                                <li>{setting}</li>
                                            </ul>
                                            <p className='mr-5'>+</p>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }

                )}

            </div>
        </div>
    )
}