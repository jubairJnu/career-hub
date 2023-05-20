import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import '../AllCss/Project.css'
const Header = () => {
  return (
    <nav className='navbar container flex'>
      <h3>Career Zone</h3>
      <div>
      <Link to = '/'>Home</Link>
      <Link to = '/statics'>Statics</Link>
      <Link to = '/applied'>Applied Job</Link>
      <Link to = '/blog'>Blog</Link>
      </div>
      <button>Start Applying</button>
    </nav>
  );
};

export default Header;