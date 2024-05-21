import './App.css'
import NavBar from './Pages/Shared/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  )
}

export default App
