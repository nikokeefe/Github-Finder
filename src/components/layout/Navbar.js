import React from 'react';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({title}) => {  
  return (
    <nav className="navbar bg-primary">
      <h1>
        <FaGithub /> {title}
      </h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github-Finder'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar;
