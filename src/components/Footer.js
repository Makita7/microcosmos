import LogoF from '../assets/logofooter.png';
import SocialMedia from './SocialMedia';
import SocialMediaCel from './SocialMediaCel';


function Footer() {
    return (
        <footer className=''>
            <div className='FCol'>
                <img className='logoF' alt="logo footer" src={LogoF} />
            </div>
            <div className='FCol'>
                <p className='text-center footerPFix'>Todos los derechos reservados Microcosmos 2022 © Copyright</p>
            </div>
            <div className='FCol end'>
                <SocialMedia/>
                <SocialMediaCel/>
            </div>
        </footer>
    );
}

export default Footer;