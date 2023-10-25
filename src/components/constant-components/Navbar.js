import { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
    <nav className="bg-main-green ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex ">
            <img src="img/logo.png" className="h-12 mr-3" alt="" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-gray-100">Flashlearn</span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-lg font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            
            <li>
              <Link to="#" className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-main-yellow-hover hover:text-gray-700 md:p-2">Find Flashcards</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-main-yellow-hover hover:text-gray-700 md:p-2">About us</Link>
            </li>
            <li>
              <Link to="/login" className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-main-yellow-hover hover:text-gray-700 md:p-2 border-2">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     );
}
 
export default Navbar;