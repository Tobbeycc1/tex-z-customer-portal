
import Header from './Components/Header.js'
import { Routes, Route  } from 'react-router-dom'
import Otp from './Components/Otp.js'
import SignIn from './Components/SignIn.js'


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
</Routes>
      
    </div>
  );
}

export default App;
