import Banner from '../components/../../components/Banner';
import Img from '../assets/../../assets/bannerTe.png';
import Te from '../subpages/InfusionesElem/Te';

function InfusionesTe() {
    return (
        <div>
            <Banner alt='sobre nosotros banner' src={Img} title='Infusiones y té' white='white'/>
            <Te/>
        </div>
    );
}

export default InfusionesTe;