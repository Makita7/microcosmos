import Banner from '../components/Banner';
import Img from '../assets/productosBanner.png'
import { Link, Outlet } from "react-router-dom";

function Productos() {
  return (
    <div>
      <Banner alt='sobre nosotros banner' src={Img} title='productos' />
      <div className="container biocosmetica main padTop">
        <p className="smallercont">Diseñamos la  línea  Biocosmética Microcosmos® teniendo en cuenta los cuidados primarios de limpieza, tonicidad, humectación, nutrición e hidratación de la primer barrera  que protege nuestro organismo de los agentes externos. <br/>
          Vas a poder disfrutar de productos que nos fueron testeados en animales, veganos, libres de gluten y  respetuosos con el medio ambiente no solo por los ingredientes con las que están formulados, sino también porque evitamos empaques innecesarios para reducir la producción de basura aportando nuestro granito de arena. Nuestros envases contienen la mpinima cantidad de pl´stico posible y contamos también con repuestos sin envase. <br/>
          Nuestros productos Biocosmetica Microcosmos® es un mensaje de amor para cada cuidado básico. Sentilos
        </p>
        <br/>
        <div className="links">
          <Link className="biocosmeticaLink" to='te_infusiones'>Infusiones</Link> |
          <Link className="biocosmeticaLink" to='aceites'>Aceites</Link> |
          <Link className="biocosmeticaLink" to='jabones'>Jabones</Link> |
          <Link className="biocosmeticaLink" to='pastadental'>Pasta Dental</Link> |
          <Link className="biocosmeticaLink" to='mantecas'>Mantecas</Link> |
          <Link className="biocosmeticaLink" to='arcillas'>Arcillas</Link> |
          <Link className="biocosmeticaLink" to='tonicosfaciales'>Tonicos Faciales</Link> |
          <Link className="biocosmeticaLink" to='capilar'>Capilar</Link> |
          <Link className="biocosmeticaLink" to='sales'>Sales de Baño</Link>
        </div>
        <br/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Productos