import Banner from '../components/Banner';
import Img from '../assets/homeBanner.png';
import LogoBanner from '../assets/logoBanner.png';

function Home() {
  return (
    <div className='main'>
      <Banner alt='home banner' src={Img} logo={LogoBanner}/>
    </div>
  )
}

export default Home