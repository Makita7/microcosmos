import LogoF from '../assets/logofooter.png';
import SocialMedia from './SocialMedia';


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
                <SocialMedia/>
            </div>
        </footer>
    );
}

export default Footer;