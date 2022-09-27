import Banner from '../components/../../components/Banner';
import Img from '../assets/../../assets/bannerAceites.png'
import { Link, Outlet } from "react-router-dom";

function AceitesMantecas() {
    return (
        <>
            <Banner alt='sobre nosotros banner' src={Img} title='Aceites y mantecas'/>
            <div className="container biocosmetica main padTop">
                <div className="links">
                    <Link className="biocosmeticaLink" to='aceites'>Aceites</Link> |
                    <Link className="biocosmeticaLink" to='mantecas'>Mantecas</Link>
                </div>
                <br/>
                <Outlet/>
            </div>
        </>
    );
}

export default AceitesMantecas;