import { useEffect, useState } from "react";
import {PasswordModal} from "../components/Popup/PswdModal.jsx";
import DarkMode from "../components/DarkMode/DarkMode.jsx";
import {LogoutModal} from "../components/Popup/LgoutModal.jsx"

export const Setting = () => {
  const [show, setshow] = useState(false);
  const closeModal = () => {setshow(false);}
  const handleClick = () => {
    setshow(true);
  };
  const [show1, setshow1] = useState(false);
  const closeModal1 = () => {setshow1(false);}
  const handleClick1 = () => {
    setshow1(true);
  };
  const [theme, settheme] = useState("light");
  useEffect(() => {
    settheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className=" dark:bg-black  m-2 border-black border-2 rounded-2xl w-4/5  shadow-xl shadow-black">
      <div className="m-8">
        <div className=" dark:text-white flex justify-between mb-2 font-bold">
          <h1 className="text-5xl ">Setting</h1>
          <input
            className=" dark:text-black h-8 bg-slate-200 py-3 pl-5 mr-40 mt-5 focus:bg-white
           border-black border-2 rounded-2xl"
            type="text"
            placeholder="search"
          />
        </div>
        <p className="font-bold dark:text-white">
          Manage your account settings and preferences
        </p>
      </div>
      <div className="m-10 font-bold">
        <div>
          <h1 className=" dark:text-white text-3xl mt-5">Edit Profiile</h1>
          <div onClick={handleClick} className="text-xl ml-4  ">
            <div
              className="flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer "
              
            >
              <p className="hover:opacity-10">Change your Password </p>
              <p className="mr-5 hover:opacity-10">+</p>
            </div>
            
            <div className="flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer">
              <p className="hover:opacity-10">Change your Username</p> <p className="mr-5 hover:opacity-10">+</p>
            </div>
            <div className="flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer">
              <p className="hover:opacity-10">Change other Details </p>
              <p className="mr-5 hover:opacity-10">+</p>
            </div>
          </div>
          <div>
            {show && <PasswordModal closeModal={closeModal} />}</div>
        </div>
        <div>
          <h1 className="dark:text-white text-3xl mt-5">General</h1>
          <div className="text-xl ml-4  ">
            <div className="flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer">
              <p className="hover:opacity-10"> Languages</p>
              <p className="mr-5 text-base hover:opacity-10">English ^</p>
            </div>
            <div className="flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer">
              <p className="hover:opacity-10">Dark Theme</p>
              <div onClick={toggleTheme} className="mr-5 border-0">
                <DarkMode theme={toggleTheme} />
              </div>
            </div>
            <div onClick={handleClick1} className="flex justify-between bg-slate-200 m-2 p-3 shadow-lg cursor-pointer">
              <p className="hover:opacity-10">Log Out </p>
              <p className="mr-5 hover:opacity-10">+</p>
            </div>
            <div>
            {show1 && <LogoutModal closeModal={closeModal1} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
