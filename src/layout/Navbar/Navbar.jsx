import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navList navbar__list'>
        <li className='navbar__list-item'>
          <Link className='navLi navbar__link' to='/'>Home</Link>
        </li>
        <li>
          <Link className='navLi navbar__link' to='/courses'>Courses</Link>
        </li>
        <li>
          <Link className='navLi navbar__link' to='/teachers'>Teachers</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;