import {AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';

function SocialMedia() {
    return (
        <>
            <a className='icon' href=''><AiOutlineMail size={32}/></a>
            <a className='icon' href=''><AiOutlineFacebook size={32}/></a>
            <a className='icon' href=''><BsWhatsapp size={30}/></a>
            <a className='icon' href=''><AiOutlineInstagram size={32}/></a>
        </>
    );
}

export default SocialMedia;