import Banner from '../components/Banner';
import Img from '../assets/productosBanner.png'

function Productos() {
  return (
    <div>
      <Banner alt='sobre nosotros banner' src={Img} title='productos' />
    </div>
  )
}

export default Productos