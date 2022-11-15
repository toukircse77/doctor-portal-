import React from 'react';
import { Link } from 'react-router-dom';
import UserContext, { AuthContext } from '../Context/UserContext';

const Navbar = () => {
  const {user, userLogOut} = UserContext(AuthContext);

  const logOutBtn = () =>{
    userLogOut()
    .then(()=>{
      alert("logout successfully")
    }).catch(error => console.error(error))
}
    const menuItem = <React.Fragment>
        <Link to="/home"><li><a href="#">Home</a></li></Link>
        <Link to="/about"><li><a href="#">About</a></li></Link>
        <Link to="/appoinment"><li><a href="#">Appoinment</a></li></Link>
        <Link to="/reviews"><li><a href="#">Reviews</a></li></Link>
        <Link to="/contactUs"><li><a href="#">Contact Us</a></li></Link>
        <Link to="/login"><li><a href="#">Login</a></li></Link>
        <Link to="/register"><li><a href="#">SignUp</a></li></Link>
        <Link to='/' onClick={logOutBtn} ><li><a href="#">Logout</a></li></Link>
        {
           user?.uid ? <p>{user.displayName}</p> : <>"no user"</>
        }
        
    </React.Fragment>
    return (
        <div className='h-[64px]'>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <a href='#' className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;