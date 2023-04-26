import './App.css'
import Header from './Components/Header/Header'
import Mostrador from './Components/Mostrador/Mostrador'
import User from './Components/User/User'
import MostradorSelect from './Components/MostradorSelect/MostradorSelect'
import Register from './Components/Register/Register'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
     <User></User>
     <Header></Header>

     <Routes>
      <Route path='/' element={<Mostrador></Mostrador> }></Route>
      <Route path='/:selection' element={<MostradorSelect></MostradorSelect> }></Route>
      <Route path='/register' element={<Register></Register> }></Route>
     </Routes>
    </>
  )
}

export default App
