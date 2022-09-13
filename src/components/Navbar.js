
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Navbar() {
    return (
        <nav>
            <Link className='middle' to ='/'><img alt='logo' className='logo' src={Logo}/></Link>
            <div className='middle navbar'>
                <Link to='/sobrenosotros' >Sobre Nosotros</Link>
                <Link to='/educacion' >Educación</Link>
                <Link to='/productos' >Productos</Link>
                <Link to='/servicios' >Servicios</Link>
                <Link to='/contacto' >Contacto</Link>
            </div>
        </nav>
    );
}

export default Navbar;