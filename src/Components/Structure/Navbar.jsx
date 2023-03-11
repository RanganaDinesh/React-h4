import React from "react";
import { Outlet, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="navbar" id='dinubg'>
        <ul>
          <li>
            <NavLink className="links" to="/" style={{marginRight:'500px'}}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="/StudentsBuild" style={{marginRight:'500px'}}>
              Students
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="/Contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;