import React from 'react';
const navs = [
    {
       error_date: 'Last Hour' 
    },
    {
       error_date: 'Today' 
    },
    {
       error_date: 'Yesterday' 
    },
    {
       error_date: 'Last 3 days' 
    },
]
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