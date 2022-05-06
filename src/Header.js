import Logo from './logo.png';
import React, { useDebugValue } from 'react';
import Avatar from './avatar.png';
import {BellIcon, ChatIcon, ChevronDownIcon, LoginIcon, PlusIcon, SearchIcon, UserIcon} from '@heroicons/react/solid';
import ClickOutHandler from 'react-clickout-handler';
import Button from "./Button";
import {useState} from 'react';

function Header(){
  const [userDropdownVisibilityClass,setUserDropdownVisibilityClass] = useState('hidden');
  function toggleUserDropdown() {
    if (userDropdownVisibilityClass === 'hidden') {
      setUserDropdownVisibilityClass('block');
    } else {
      setUserDropdownVisibilityClass('hidden');
    }
  }
    return (
    <header className ="w-full bg-reddit_dark p-2">
    <div className="mx-4 flex relative">
        <img src={Logo} alt="" className="w-8 h-8 mr-4"/>
        
        <form action="" className="bg-reddit_dark-brighter px-3 flex rounded-md border border-reddit_border mx-4 flex-grow">
          <SearchIcon className="text-gray-300 h-6 w-6 mt-1"/>
          <input type="text" className="bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white" placeholder="Search"/>
        </form>

        {/* <button className="px-2 py-1"><BellIcon className="text-gray-300 w-6 h-6 mx-2"/></button>
        <button className="px-2 py-1"><ChatIcon className="text-gray-300 w-6 h-6 mx-2"/></button>
        <button className="px-2 py-1"><PlusIcon className="text-gray-300 w-6 h-6 mx-2"/></button> */}
       <div className="mx-2">
       <Button outline className="mr-1">Login</Button>
       <Button className="mr-2">Sign Up</Button>
       </div>

        <ClickOutHandler onClickOut={() => setUserDropdownVisibilityClass('hidden')}>

        <button className =" rounded-md flex ml-4 border border-gray-700 " onClick={() => toggleUserDropdown()}>
        <UserIcon className='w-8 h-8 text-gray-400 m-1'/>
        {/* <div className='w-8 h-8 bg-gray-600 rounded-md'>
          {/* <img src={Avatar} alt="" style={{filter:'invert(100%)'}} className="block w-8 h-8"/> 
          </div> */}
          <ChevronDownIcon className="text-gray-500 w-6 h-6 mt-2 m-1 "/>
        </button>
        </ClickOutHandler>

        <div className={'absolute right-0 top-8 bg-reddit_dark border border-gray-700 z-10 rounded-md text reddit_text overflow-hidden'+userDropdownVisibilityClass}>
    <button className='block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm'>
      <LoginIcon className='w-5 h-5 mr-2'/>
      Log In / Sign Up
    </button>
    </div>
    </div>
    </header>
);
}
export default Header;