
import {  Routes, Route } from "react-router-dom"

// PAGES
import {Login} from './Pages/Login'
import {SignIn} from './Pages/SignIn'
import {Dashboard} from './Pages/Dashboard'
import {Orders} from './Pages/Orders'
import {Customers} from './Pages/Customers'
import {Setting} from './Pages/Setting'

// COMPONENTS
import {Sidebar} from './components/Sidebar'

function App() {
  
  return (
    
      

      <div className='flex'>
        
        <Sidebar/>
       <Routes>
       
        <Route path="/" element={ <Dashboard/>  } />
        <Route path="/Orders" element={ <Orders/> } />
        <Route path="/Customers" element={ <Customers/> } />
        <Route path="/Setting" element={ <Setting/> } />
        <Route path="/Login" element={ <Login/> } />
        <Route path="/SignIn" element={ <SignIn/> } />
      </Routes>


      </div>
    
  )
}

export default App
