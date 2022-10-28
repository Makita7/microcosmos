import {AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';

function SocialMediaCel() {
    return (
        <div className='OnlyCell'>
            <a className='icon' href='mailto:neuquina007@gmail.com'><AiOutlineMail size={20}/></a>
            <a className='icon' href='https://facebook.com/'><AiOutlineFacebook size={20}/></a>
            <a className='icon' href='https://wa.me/5492995289706?text='><BsWhatsapp size={20}/></a>
            {/* <a className='icon' href=''><AiOutlineInstagram size={20}/></a> */}
        </div>
    );
}

export default SocialMediaCel;