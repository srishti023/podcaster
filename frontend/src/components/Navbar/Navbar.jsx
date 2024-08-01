import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [MobileNav, setMobileNav] = useState(false);
    const closeMobileNav = () => setMobileNav(false);
    const navLinks = [
        {
            name:"Home",
            path:"/",
        },
        {
            name:"Categories",
            path:"/categories",
        },
        {
            name:"All Podcasts",
            path:"/all-podcasts",
        },
        {
            name:"Profile",
            path:"/profile",
        },
    ]
  return(
  <nav className='px-4 md:px-8 lg:px-12 py-2 relative'>
    <div className='flex items-center justify-between'>
        <div className='logo brand-name w-2/6 flex items-center gap-4'>
            <img src="http://cdn-icons-png.flaticon.com/128/9043/9043096.png" alt="Podcaster" className='h-12'/>
            <Link to="/" className='text-2xl font-bold'>Podcaster</Link>
        </div>
        <div className='hidden w-2/6 lg:flex items-center justify-center'>
            {navLinks.map((items,i)=>(
                <Link key={i} to={items.path} className="ms-12 hover:font-semibold transition-all duration-300 cursor-pointer">
                    {items.name}
                </Link>
            ))}
        </div>
        <div className='hidden w-2/6 lg:flex items-center justify-end'>
                <Link className='px-6 py-3 border-black rounded-full'>Login</Link>
                <Link className='px-6 py-3 bg-black text-white rounded-full ms-4'>Signup</Link>
        </div>
        <div className='w-4/6 flex items-center justify-end lg:hidden z-50'>
            <button className={`text-4xl ${MobileNav ? "rotate-360" : "rotate-180"} transition-all duration-300`} onClick={()=>setMobileNav(!MobileNav)}>
            {MobileNav ? <RxCross2/> : <IoReorderThreeOutline />}
            </button>
        </div>
    </div>

    {/* MobileNav */}
    <div className={`fixed top-0 left-0 w-full h-screen bg-blue-100 ${MobileNav? "translate-y-0" : "translate-y-[-100%]"} transition-transform duration-500 ease-in-out`}>
        
        <div className='h-full flex flex-col items-center justify-center'>
        {navLinks.map((items,i)=>(
                <Link key={i} to={items.path} className="mb-12 text-2xl hover:font-semibold transition-all duration-300" onClick={closeMobileNav}>
                    {items.name}
                </Link>
            ))}
            <Link to="/login" className="mb-12 text-2xl hover:font-semibold transition-all duration-300" onClick={closeMobileNav}>
                Login
            </Link>
            <Link to="/signup" className="mb-12 text-2xl hover:font-semibold transition-all duration-300">
                Signup
            </Link>
        </div>
    </div>
  </nav>
  );
};

export default Navbar;