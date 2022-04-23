
import Header from './Components/Header.js'
import { Routes, Route  } from 'react-router-dom'
import Otp from './Components/Otp.js'
import SignIn from './Components/SignIn.js'

import PortalMenu from './PortalMenu.js';
import Dashboard from './Dashboard.js';


function App() {
  return (
    <div>
      <Routes>
    <Route path='/' element={
      <div>
        <Header/>
        <SignIn/>
       
      </div>
    }/>
    <Route path='/otp' element={
      <div>
        <Header/>
        <Otp/>
      </div>
    }/>

    <Route path='/dashboard' element={
      <div>
        <PortalMenu/>
        <Dashboard/>
      </div>
    }></Route>
</Routes>
      
    </div>
  );
}

export default App;
