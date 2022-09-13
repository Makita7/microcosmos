
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Header() {
    return (
        <nav>
            <Link className='middle' to ='/'><img className='logo' src={Logo}/></Link>
            <div className='middle navbar'>
                <Link to='/sobre-nosotros' >Sobre Nosotros</Link>
                <Link to='/educacion' >Educación</Link>
                <Link to='/productos' >Productos</Link>
                <Link to='/services' >Services</Link>
                <Link to='/contacto' >Contacto</Link>
            </div>
        </nav>
    );
}

export default Header;