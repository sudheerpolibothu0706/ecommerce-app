import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { shopContext } from "../context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartCount } = useContext(shopContext);
  return (
    <div>
      {/* Normal Navbar (hidden when menuOpen is true) */}
      <div className={`flex justify-around items-center py-5 font-medium ${menuOpen ? 'hidden' : 'flex'}`}>
        <Link to={'/'}>
          <img src={assets.logo} className='sm:top-[35px] sm:left-[49px] w-[166px] h-[47px] top-[29px] left-[166px]' alt="Logo" />
        </Link>

        <ul className='hidden sm:flex flex-row gap-5 text-sm'>
          <NavLink to={'/'} className='flex flex-col items-center text-gray-600'>
            <p>HOME</p>
            <hr className='w-2/4 border-b-2 bg-gray-700 hidden' />
          </NavLink>
          <NavLink to={'/collection'} className='flex flex-col items-center text-gray-700'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-b-2 bg-gray-700 hidden' />
          </NavLink>
          <NavLink to={'/aboutus'} className='flex flex-col items-center text-gray-700'>
            <p>ABOUT US</p>
            <hr className='w-2/4 border-b-2 bg-gray-700 hidden' />
          </NavLink>
          <NavLink to={'/contactus'} className='flex flex-col items-center text-gray-700'>
            <p>CONTACT US</p>
            <hr className='w-2/4 border-b-2 bg-gray-700 hidden' />
          </NavLink>
        </ul>

        <div className='flex flex-row gap-5'>
          <img src={assets.search_icon} className='w-5 h-5 cursor-pointer' alt="Search Icon" />
          <NavLink to={'/login'}>
            <img src={assets.profile_icon} className='w-5 h-5 cursor-pointer' alt="Profile Icon" />
          </NavLink>
          <div className='flex items-center relative cursor-pointer'>
            <NavLink to={'/cart'}>
              <img src={assets.cart_icon} className='w-5 h-5 cursor-pointer' alt="Cart Icon" />
              <span className='text-xs absolute bottom-[-8px] rounded-full bg-black text-white right-[-5px] p-0.5'>{getCartCount()}</span>
            </NavLink>
          </div>
        </div>

        {/* Menu icon to open the full-screen menu */}
        <img
          src={assets.menu_icon}
          onClick={() => setMenuOpen(true)}
          className='block sm:hidden w-7 h-5 cursor-pointer'
          alt="Menu Icon"
        />
      </div>

      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Cross icon to close the menu */}
        <img
          src={assets.cross_icon}
          onClick={() => setMenuOpen(false)}
          className='absolute top-8 left-2 w-6 h-6 cursor-pointer'
          alt="Close Icon"
        />

        {/* Navigation links */}
        <ul className='flex flex-col gap-4 mt-20 w-full'>
          <NavLink
            to={'/'}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-gray-600 text-xl w-full text-center py-2 ${isActive ? 'bg-black text-white' : 'hover:bg-gray-200'}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to={'/collection'}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-gray-600 text-xl w-full text-center py-2 ${isActive ? 'bg-black text-white' : 'hover:bg-gray-200'}`
            }
          >
            COLLECTION
          </NavLink>
          <NavLink
            to={'/aboutus'}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-gray-600 text-xl w-full text-center py-2 ${isActive ? 'bg-black text-white' : 'hover:bg-gray-200'}`
            }
          >
            ABOUT US
          </NavLink>
          <NavLink
            to={'/contactus'}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-gray-600 text-xl w-full text-center py-2 ${isActive ? 'bg-black text-white' : 'hover:bg-gray-200'}`
            }
          >
            CONTACT US
          </NavLink>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
