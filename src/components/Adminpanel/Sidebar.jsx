import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
        Registrations
       <ul>
        <a href='/c'><li>Category</li></a>
        <a href='/s'><li>SubCategory</li></a>
        <a href='/i'><li>Item</li></a>
       </ul>
       View
       <ul>
       <a href="/viewdetails"><li>Category View</li></a>
       <a href="/sview"><li>Subcategory View</li></a>
       <a href="/itview"><li>Item View</li></a>
      </ul>
      
    </div>
  );
};

export default Sidebar;