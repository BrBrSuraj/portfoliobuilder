import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from '../pages/Home/Home.jsx'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import Main from "../components/Layouts/Main/Main.jsx"
import Dashboard from "../pages/Dashboard/Dashboard.jsx"
import Profile from "../pages/Profile/Profile.jsx"



const AllRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Register />}></Route>

    <Route path="/dashboard" element={<Main></Main>}>
        <Route path="" element={<Dashboard></Dashboard>}></Route>
        <Route path="profile" element={<Profile></Profile>}></Route>
    </Route>
    
    </>
    
  )
)

export default AllRouter
