import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navList navbar__list'>
        <li className='navbar__list-item'>
          <Link className='navLi navbar__link' to='/'>Hem</Link>
        </li>
        <li>
          <Link className='navLi navbar__link' to='/courses'>Kurser</Link>
        </li>
        <li>
          <Link className='navLi navbar__link' to='/teachers'>Lärare</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;