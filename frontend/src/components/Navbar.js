import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar navbar-expand-sm justify-content-center navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>
        Grocery Basket
      </Link>
      <ul className='navbar-nav navbar-nav-horizontal'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Lists
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/items' className='nav-link'>
            Items
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
