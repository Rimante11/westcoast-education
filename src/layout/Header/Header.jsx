import Navbar from '../Navbar/Navbar';
import logo from '../Header/logo.png';

const Header = () => {
    return ( 
        <header className="header">
            <div className="headerDiv logoText">
                <img src={logo} alt="logo" className='schoolLogo' />
                <h1 className="headerText header__heading">Westcoast Education</h1>
            </div>
            <div className='headersDiv'>
                <Navbar />
            </div>
        </header>
     );
}
 
export default Header;