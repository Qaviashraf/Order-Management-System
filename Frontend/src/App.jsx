
import {  Routes, Route } from "react-router-dom"
import { useLocation } from 'react-router-dom';


// PAGES
import {Login} from './Pages/Login'
import {SignIn} from './Pages/SignIn'
import {Dashboard} from './Pages/Dashboard'
import {Orders} from './Pages/Orders'
import {Customers} from './Pages/Customers'
import {Setting} from './Pages/Setting'
import {AddOrders} from './Pages/AddOrders'
import { Notifications } from "./Pages/Notifications";

// COMPONENTS
import {Sidebar} from './components/Sidebar'


function App() {

  
  const location = useLocation();
  const hideSidebar = location.pathname === '/' || location.pathname === '/SignIn';
  
  
  
  return (
    
      <div className='dark:bg-slate-500 flex  h-full pt-2 pb-2'>
        
        {!hideSidebar && <Sidebar/>}
       <Routes>
       
        <Route path="/Dashboard" element={ <Dashboard/>  } />
        <Route path="/Orders" element={ <Orders/> } />
        <Route path="/Customers" element={ <Customers/> } />
        <Route path="/Setting" element={ <Setting/> } />
        <Route path="/" element={ <Login/> } />
        <Route path="/SignIn" element={ <SignIn/> } />
        <Route path="/AddOrders" element={ <AddOrders/> }/>
        <Route path="/Notifications" element={ <Notifications /> }/>

      </Routes>

      </div> 
  )
}

export default App
