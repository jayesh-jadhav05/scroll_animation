import logo from '../../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <MenuIcon style={{ color: 'blue', fontSize: '2rem' }} />
            <img src={logo} alt='logo' className='logo' />
            <div className='menu-links'>
                <p>About</p>
                <p>Work</p>
                <p>Contact Us</p>
            </div>
        </div>
    )
};

export default Header;