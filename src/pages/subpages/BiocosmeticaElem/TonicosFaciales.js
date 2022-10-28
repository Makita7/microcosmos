import { Serums, Tonicos } from "./BiocosmeticaProd";
import ImgTonicos from './img/TonicosFaciales.jpg';

function TonicosFaciales() {
    return (
        <div className='smallercont tonicos'>
        <h3 >Tónicos Faciales </h3>
        <p>
            Hidratar tu cuerpo con la debida cantidad de agua de acuerdo a tu peso es esencial para disfrutar de una piel sana y funcional. Pero, incluso si estás bebiendo suficiente cantidad, tu piel pierde humedad mediante la pérdida transepidérmica de agua (denominado TEWL por sus siglas en inglés) a través del estrato córneo, la capa externa de la piel. Si no nos hidratamos adecuadamente, la piel se puede secar, tensar o tener un aspecto opaco. Los tónicos faciales Aguas Microcosmos® ayudan a reforzar la función de barrera de la piel y, por lo tanto, disminuir el TEWL. <br/>
            Las propiedades de fortalecimiento de nuestras aguas Microcosmos® pueden proporcionar a la piel muchos beneficios, entre ellos, reforzar la barrera natural contra las agresiones diarias.
        </p>
        <img alt="imagen tonicos faciales" src={ImgTonicos} className="ImgFixMorePages" />
        <div className="cardCont padBottom">
            {
                Tonicos.map(p =>
                    <div className="card" key={p.id}>
                        <div className="innerPadCard">
                            {/* <img alt={p.title} src={p.img}/> */}
                            <h5>{p.title}</h5>
                            <p>{p.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
        <h3>Serums faciales Kintsugi</h3>
        <p>
            El 'kintsugi' es una técnica centenaria de Japón que consiste en reparar las piezas de cerámica rotas con oro en polvo mezclado con resinas que hacen del objeto reparado una pieza de un valor mucho más elevado que antes de ser quebrado.
        </p>
        <p>
            Esta técnica se ha convertido en parte de la filosofía de nuestra familia Microcosmos® entendiendo que frente a las adversidades y errores en la vida, hay que saber recuperarse y sobrellevar las cicatrices que las mismas nos puedan dejar.
        </p>
        <p>
            Metafóricamente frente al paso de los años nuestra piel precisa de cuidados especiales que resignifique las marcas de la piel aportando valor a los años vividos y al paso de ellos por nuestra piel
        </p>
        <p>
            Tres variedades que se adaptan a todo tipo de piel ya que están formulados a base de aceites vegetales versátiles de altísima calidad y pureza
        </p>
        <div className="cardCont padBottom">
            {
                Serums.map(p =>
                    <div className="card" key={p.id}>
                        <div className="innerPadCard">
                            {/* <img alt={p.title} src={p.img}/> */}
                            <h5>{p.title}</h5>
                            <p>{p.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
    )
}

export default TonicosFaciales