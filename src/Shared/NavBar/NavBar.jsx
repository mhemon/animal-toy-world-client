import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext)
    const items = <>
        <li><Link to="/">Home</Link> </li>
        <li> <Link to="/alltoys">All Toys</Link> </li>
        {user && <li> <Link to="/mytoys">My Toys</Link> </li>}
        {user && <li> <Link to="/addtoys">Add A Toy</Link> </li>}
        <li> <Link to="/blogs">Blogs</Link> </li>
    </>
    const handleLogout = () => {
        logout()
        .then(() => {})
        .catch(error => toast.error(error.message))
    }
    const location = useLocation();
    console.log(location.pathname);
    
    useEffect(() => {
        document.title = `Animal Toy World | ${location.pathname.slice(1) || 'Home'}`;
      }, [location]);

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
                {user ? <>
                    <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <div className="avatar hidden md:block">
                            <div className=" w-12 me-2 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="btn btn-outline btn-error px-2">Logout</button>
                </> : <>
                <Link to='/login'><button className='btn btn-sm btn-primary md:btn md:btn-primary rounded-lg'>Login</button></Link>
                </>}
            </div>
        </div>
    );
};

export default NavBar;