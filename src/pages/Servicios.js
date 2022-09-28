import Banner from '../components/Banner';
import Img from '../assets/serviciosBanner.png'
import AromaterapiaMasajesNoBanner from './AromaterapiaMasajes-noBanner';

function Servicios() {
  return (
    <div>
      <Banner alt='sobre nosotros banner' src={Img} title='Servicios' white='white'/>
      <AromaterapiaMasajesNoBanner/>
    </div>
  )
}

export default Servicios;