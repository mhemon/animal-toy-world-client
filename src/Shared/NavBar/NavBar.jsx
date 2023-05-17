import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const NavBar = () => {
    const items = <>
        <li><Link to="/">Home</Link> </li>
        <li> <Link to="/about">All Toys</Link> </li>
        <li> <Link to="/about">My Toys</Link> </li>
        <li> <Link to="/about">Add A Toy</Link> </li>
        <li> <Link to="/about">Blogs</Link> </li>
        {/* {user?.email ? <>
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
        </>
            : <li> <Link to="/login">Login</Link> </li>
        } */}
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <Link to="/" className="text-xl flex justify-center items-center">
                    <div className='w-16'>
                        <img className='w-full' src={logo} alt="" />
                    </div>
                    <p className="btn btn-ghost normal-case text-xl">Animal Toy World</p>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="tooltip tooltip-bottom" data-tip="hello">
                <div className="avatar">
                    <div className=" w-12 me-2 rounded-full">
                        <img src="https://images.unsplash.com/profile-1556011314127-d55a7ede3346?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;