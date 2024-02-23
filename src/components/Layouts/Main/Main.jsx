import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <Footer></Footer>
    <Outlet></Outlet>
    </>
  )
}

export default Main