
import Header from './Components/Header.js'
import { Routes, Route  } from 'react-router-dom'
import Otp from './Components/Otp.js'
import SignIn from './Components/SignIn.js'

import PortalMenu from './PortalMenu.js';
import Dashboard from './Dashboard.js';
import Settings from './Settings.js';

import classes from './App.css'
import ChangeNameForm from './Components/ChangeNameForm.js';
import ChangePP from './Components/ChangePP.js';
import ChangeEmail from './Components/ChangeEmail.js';

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


    {/* Route to settings */}
    <Route path='/changename' element={
      <div>
        <PortalMenu/>
        <Settings form={<ChangeNameForm/>} />
        
      </div>
    }/>

    {/* Route to change profile picture */}
    <Route path='/changeprofilepicture' element={
       <div>
        <PortalMenu/>
        <Settings form={<ChangePP/>} />
        
      </div>
    }/>
    <Route path='/changeemail' element={
       <div>
       <PortalMenu/>
       <Settings form={<ChangeEmail/>} />
     </div>
    }/>
</Routes>
      
    </div>
  );
}

export default App;
