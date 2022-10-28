import Banner from '../components/Banner';
import Img from '../assets/homeBanner.png';
import LogoBanner from '../assets/logoBanner.png';
import {Link} from 'react-router-dom';
/*SECTION IMAGES*/
import Aceites from '../assets/aceitesymantecas.png';
import Infusiones from '../assets/infusiones-te.png';
import Aromaterapia from '../assets/aromaterapia.png';
import Biocosmetica from '../assets/biocosmetica.png';
import Educacion from '../assets/educacion-mic.png';

function BigSections({to, alt, src, title}){
  return(
    <Link to={to}>
      <img className='BigDescription' alt={alt} src={src} />
      <p className='smallTitle'>{title}</p>
    </Link>
  );
}
function SmallSections({to, alt, src, title}){
  return(
    <Link to={to}>
      <img className='SmallDescription services' alt={alt} src={src} />
      <p className='smallTitle'>{title}</p>
    </Link>
  );
}
function SmallSectionsTwo({to, alt, src, title}){
  return(
    <Link to={to}>
      <img className='SmallDescription services' alt={alt} src={src} />
      <p className='smallTitle smallTitleFix'>{title}</p>
    </Link>
  );
}

function Home() {
  return (
    <div className='main home'>
      <Banner alt='home banner' src={Img} logo={LogoBanner}/>
      <div className='container'>
        <h3 className='titleHome padTop'>productos</h3>
        <div>
          <div className='flex spaceEvenly'>
            <BigSections to='aceites' alt='aceites y mantecas' src={Aceites} title='aceites y mantecas' />
            <BigSections to='infusiones' alt='Infusiones y Té' src={Infusiones} title='Infusiones y Té' />
          </div>
        </div>
        <h3 className='titleHome padTop'>servicios</h3>
        <div>
          <div className='flex spaceEvenly padBottom'>
            <SmallSectionsTwo to='aromaterapia-masajes' alt='aromaterapia' src={Aromaterapia} title='aromaterapia y Masajes' />
            <SmallSections to='biocosmetica' alt='biocosmetica' src={Biocosmetica} title='biocosmetica' />
            <SmallSections to='educacion' alt='educacion mic' src={Educacion} title='educacion mic' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home