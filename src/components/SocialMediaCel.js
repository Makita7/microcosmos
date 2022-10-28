import {AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';

const FaceBook = 'https://m.facebook.com/profile.php?id=100085575399658&eav=AfYpOMpsYfmMX4uBPRZnR2sK_5IFf1Wp24Bm1p3J3KnsxYwjDEUhN7xxNgpdQXF9y9E&tsid=0.9356544011772432&source=result';
const Insta = 'https://www.instagram.com/microcosmosapp/';

function SocialMediaCel() {
    return (
        <div className='OnlyCell'>
            <a className='icon' href='mailto:microcosmosapp@gmail.com'><AiOutlineMail size={20}/></a>
            <a className='icon' href={FaceBook} ><AiOutlineFacebook size={20}/></a>
            <br/>
            <a className='icon' href='https://wa.me/5492995289706?text='><BsWhatsapp size={20}/></a>
            <a className='icon' href={Insta} ><AiOutlineInstagram size={20}/></a>
        </div>
    );
}

export default SocialMediaCel;