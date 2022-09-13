import Banner from '../components/Banner';
import Img from '../assets/serviciosBanner.png'

function Servicios() {
  return (
    <div>
      <Banner alt='sobre nosotros banner' src={Img} title='Servicios' white='white'/>
    </div>
  )
}

export default Servicios;