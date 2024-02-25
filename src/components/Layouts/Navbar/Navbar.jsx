import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="bg-appBackground flex justify-end h-10 items-center border-l-2 text-white">
       <div className="flex gap-5 px-5">
      <NavLink>Portfolio</NavLink>
      <NavLink>Resume</NavLink>
      <NavLink>Ham</NavLink>
       </div>
    </div>
  
  )
}

export default Navbar