import { NavLink } from 'react-router-dom';
import Logo from '../../Logo.jsx';

const Sidebar = () => {
  return (
    <>
      <div className="hidden wrapper md:flex flex-col gap-3 header w-[12rem] h-screen bg-appBackground">
        <div className="flex justify-center border-b-2">
          <Logo textSm="text-md" visibilityHidden="hidden"/>
        </div>

        <div className="sidebar-menu">
          <h1 className='text-center mb-4 text-white font-bold text-lg'>Main menu</h1>
          <div className='menu-list'>
            <ul className='px-4 text-white flex flex-col gap-5'>
              <NavLink>
                <span></span>
              <li className='border-b-2 pb-2 px-2 hover:bg-emerald-100 hover:text-black'>Personal details</li>
              </NavLink>
              <NavLink>
                <span></span>
                <li className='border-b-2 pb-2 px-2 hover:bg-emerald-100 hover:text-black'>Education</li>
              </NavLink>
              <NavLink>
                <span></span>
                <li className='border-b-2 pb-2 px-2 hover:bg-emerald-100 hover:text-black'>Experiences</li>
              </NavLink>
              <NavLink>
                <span></span>
                <li className='border-b-2 pb-2 px-2 hover:bg-emerald-100 hover:text-black'>Projects</li>
              </NavLink>
              <NavLink>
                <span></span>
                <li className='border-b-2 pb-2 px-2 hover:bg-emerald-100 hover:text-black'>Training</li>
              </NavLink>
              <NavLink>
                <span></span>
                <li className='border-b-2 pb-2 px-2 hover:bg-emerald-100 hover:text-black'>Skills</li>
              </NavLink>
              <NavLink>
                <span></span>
                <li className='border-b-2 pb-2 px-2 hover:bg-emerald-100 hover:text-black'>Language</li>
              </NavLink>
              <NavLink>
                <span></span>
                <li className='border-b-2 pb-2 px-2 hover:bg-emerald-100 hover:text-black'>Summery</li>
              </NavLink>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
