import React from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
export const navs = [
    {
       name: '',
       data_date: 'Last Hour' 
    },
    {
       name: 'today',
       data_date: 'Today' 
    },
    {
        name: 'yesterday',
       data_date: 'Yesterday' 
    },
    {
        name: 'Last3days',
       data_date: 'Last 3 days' 
    },
]


const Navbar = () => {
    return (
  <div className='navbar-container'>
      <ul className='navbar d-flex'>
          {navs.map(({data_date,name}) =>
            <li key={data_date}>
            <NavLink className={(navData) => (navData.isActive ? 'active-link' : '')} to={`/${name}`}  >
            {data_date}
            </NavLink>
          </li>
          )}
          
      </ul>
  </div>
)
};

export default Navbar;