import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo_web_welder.png';
import BurgerMenu from '../../assets/svg/burger-menu.svg';
import CrossSvg from '../../assets/svg/cross.svg';

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavVisible(false);
  }, [location]);

  return (
    <header className='header'>
      <Link to='/' className='header_logo'>
        <img src={logo} alt='logo'/>
      </Link>
      <div className={`header_nav-wrapper ${isNavVisible ? 'is-visible' : ''}`}>
        <button 
          className='header_toggle' 
          onClick={() => setIsNavVisible(!isNavVisible)}
          aria-label="Toggle navigation"
        >
          {isNavVisible ? (
            <img src={CrossSvg} alt="Toggle navigation" />
          ) : (
            <img src={BurgerMenu} alt="Toggle navigation" />
          )}
        </button>
        <nav className={`header_nav ${isNavVisible ? 'is-visible' : ''}`}>
          <Link to='/Portfolio'>Portfolio</Link>
          <Link to='/Contact'>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;