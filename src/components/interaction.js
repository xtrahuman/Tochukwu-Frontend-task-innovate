import React from 'react';

const Navbar = () => (
  <div className='navbar-container'>
      <ul className='navbar d-flex'>
          {navs.map(({error_date}) =>
            <li key={error_date}>{error_date}</li>
          )}
          
      </ul>
  </div>
);

export default Navbar;