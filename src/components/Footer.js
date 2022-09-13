import LogoF from '../assets/logofooter.png';
import {AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';

function Footer() {
    return (
        <footer className=''>
            <div className='FCol'>
                <img className='logoF' alt="logo footer" src={LogoF} />
            </div>
            <div className='FCol'>
                <p className='text-center'>Todos los derechos reservados Microcosmos 2022 © Copyright</p>
            </div>
            <div className='FCol end'>
                <a className='icon' href=''><AiOutlineMail size={32}/></a>
                <a className='icon' href=''><AiOutlineFacebook size={32}/></a>
                <a className='icon' href=''><BsWhatsapp size={30}/></a>
                <a className='icon' href=''><AiOutlineInstagram size={32}/></a>
            </div>
        </footer>
    );
}

export default Footer;