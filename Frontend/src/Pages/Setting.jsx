import { useEffect, useState } from 'react'

import DarkMode from '../components/DarkMode/DarkMode.jsx';

export const Setting = ( ) => {
    const [show, setshow] = useState(false);
    const [theme, settheme] = useState("light")
    // useEffect(()=>{
    //     if (window.matchMedia('(prefers-color-scheeme: dark)').matches){
    //         settheme('dark')
    //     }
    //     else{
    //         settheme('light')
    //     }
    // },
    // [])
    useEffect(()=>{
        if (theme==="dark") {
            document.documentElement.classList.add('dark')
       }
       else {
        document.documentElement.classList.remove('dark') 
        }
    },
    [theme])
        
        
        
            const toggleTheme = ()=>{
            settheme(theme==="dark" ? "light" : "dark")
            }
    return(
         <div className=" dark:bg-slate-700  m-2 border-black border-2 rounded-2xl w-4/5  shadow-xl shadow-black">
           <div className='m-8'> 
           <div className=' dark:text-white flex justify-between mb-2 font-bold'><h1 className='text-5xl '>Setting</h1>
           <input className=' dark:text-black h-8 bg-slate-200 h-9 py-3 pl-5 mr-32 mt-4 focus:bg-white
           border-black border-2 rounded-2xl' type="text" placeholder="search" /></div>
            <p className='font-bold dark:text-white'>Manage your account settings and preferences</p>
            </div>
            <div className='m-10 font-bold'>
            <div>
                 <h1 className=' dark:text-white text-3xl mt-5'>Edit Profiile</h1>
                        <div className='text-xl ml-4  '>
                        
                                
                                
                                    
                                       <div  className='flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer' >
                                         <p >Change your Password </p><p className='mr-5'>+</p>

                                            
                                         </div>
                                        <div className='flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer' >
                                            <p >Change your Username</p> <p className='mr-5'>+</p></div>
                                        <div className='flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer' >
                                            <p >Change other Details </p><p className='mr-5'>+</p></div>
                                    
                                    

                                
                        
                            
                            
                    
                        </div>
                  </div>  
                  <div>
                 <h1 className='dark:text-white text-3xl mt-5'>General</h1>
                        <div className='text-xl ml-4  '>
                        
                                
                                
                                    
                                       <div className='flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer' >
                                         <p > Languages</p><p className='mr-5 text-base' >English ^</p></div>
                                        <div className='flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer' >
                                            <p >Dark Theme</p> <button   onClick={toggleTheme} className='mr-5 border-0'><DarkMode theme={toggleTheme}/></button></div>
                                        <div className='flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer' >
                                            <p >Log Out </p><p className='mr-5'>+</p></div>
                                    
                                    

                                
                        
                            
                            
                    
                        </div>
                  </div>
                
                  </div>
                

            </div>
            
    )
}