import React from "react";
import {sun} from "./Sun.jsx";
import {moon} from "./Moon.jsx";
import "./DarkMode.css";
import { document } from "postcss";

const DarkMode = (theme) => {
    // const setDarkMode = ()=>{
    //     document.querySelector("body").setAttribute("data-theme", "dark")
    //     }
    // const setLightMode = ()=>{
    //     document.querySelector("body").setAttribute("data-theme", "light")
    //     }
    //     const toggleTheme = ()=>{
    //         if (e.target.checked) {setDarkMode();}
    //         else {setLightMode();}
    //         }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={theme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <sun />
                <moon />
            </label>
        </div>
    );
};

export default DarkMode;
