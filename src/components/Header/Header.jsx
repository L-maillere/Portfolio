import logo from '../../assets/logo_web_welder.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Link to='/' className='header_logo'>
        <img src={logo} alt='logo'/>
      </Link>
      <nav className='header_nav'>
        <Link to='/Portfolio'>Portfolio</Link>
        <Link to='/Contact'>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;