import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"


const AllRouter = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />}></Route>
   </Routes>
  )
}

export default AllRouter