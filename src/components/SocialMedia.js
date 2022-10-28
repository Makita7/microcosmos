import {AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';

function SocialMedia() {
    return (
        <div className='NotCell'>
            <a className='icon' href='mailto:neuquina007@gmail.com'><AiOutlineMail size={32}/></a>
            <a className='icon' href='https://facebook.com/'><AiOutlineFacebook size={32}/></a>
            <a className='icon' href='https://wa.me/5492995289706?text='><BsWhatsapp size={30}/></a>
            {/* <a className='icon' href=''><AiOutlineInstagram size={32}/></a> */}
        </div>
    );
}

export default SocialMedia;