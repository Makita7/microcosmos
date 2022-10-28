import Img from '../../assets/masagesBanner.jpg'
import Banner from '../../components/Banner';
import { ListAromaterepia } from './AromaterapiaElem/ListAromaterapia'

function AromaterapiaMasajes() {
    return (
        <div className='padBottom'>
            <Banner alt='masajes banner' src={Img} title='Aromaterapia y Masajes'/>
            <div className="container biocosmetica main padTop aromaterapia">
                <h3 className='text-center'>Aromaterapia y Masajes</h3>
                <p className="smallercont">
                    Microcosmos® ha fusionado varias disciplinas que acompañan procesos de mejora de la salud integral
                    Amamos lo que hacemos y para ello hemos diseñado terapias exclusivas, respetuosas y amorosas con tu ser. <br/>
                    Tenemos en cuenta las recomendaciones del médico que esté tratando al paciente tus estados emocionales y de ánimo como así también las informaciones que vos puedas registrar tanto en el plano físico, mental y espiritual. <br/>
                    Se evalúan las necesidades que puedan vislumbrarse a través de una entrevista previa y se realiza el tratamiento que acompañe de manera más cercana tu proceso.
                    Estos son algunas de las terapias que ofrecemos para disminuir los excesos de estrés, aliviar dolores y así propiciar una conexión profunda, espíritu, alma y cuerpo.
                </p>
                <div className='smallercont masajes'>
                    <div className="cardCont padBottom">
                        {
                            ListAromaterepia.map(p =>
                                <div className="card" key={p.id}>
                                    <div className="innerPadCard">
                                        <h5 className='text-center'>{p.title}</h5>
                                        <li>{p.incluye1}</li>
                                        <li>{p.incluye2}</li>
                                        <li>{p.incluye3}</li>
                                        {p.incluye4 ? <li>{p.incluye4}</li> : ''}
                                        {p.detalle ? <p className='detailpad'>{p.detalle}</p> : ''}
                                        {p.incluye5 ? <li>{p.incluye5}</li> : ''}
                                        {p.incluye6 ? <li>{p.incluye6}</li> : ''}
                                        {p.incluye7 ? <li>{p.incluye7}</li> :''}
                                        {p.detalle2 ? <p className='detailpad'>{p.detalle2}</p> : ''}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <p className='text-center'><i><b>
                    Cualquiera de las cuatro opciones se realizan con aceites esenciales profesionales Microcosmos®
                </b></i></p>
                <ul className='list blossom'>
                    <p className='title'>Además contamos con </p>
                    <li className='blossom'>Servicios de te a Domicilio para Festejos de Cumpleaños</li>
                    <li className='blossom'>Spa a domicilio</li>
                    <li className='blossom'>Terapias Japonesas de pies - (incluye, baño de espuma, experiencia sensorial con piedras, aromas, aceites y exfoliación completa) </li>
                    <li className='blossom'>Sesiónes de Coaching Integrativo</li>
                </ul>
                    <p className='padTop padBottom smallercont'>
                        A partir del mes de Diciembre del 2022 podés reservar tus sesiones para potenciar y ampliar tus posibilidades a una vida con menos estrés y más felicidad
                        Además si es que aún no has encontrado el sentido a tu vida, juntos sumergirnos en la búsqueda de tu Ikigai  personal (Ver articulo sobre Ikigai)
                    </p>
                    <h5 className='text-center titles'>
                        “Ayer es pasado, mañana es futuro y hoy es todo lo que podemos disfrutar y aprovechar”. <br/>
                        VIVIR PRESENTE
                    </h5>
            </div>
        </div>
    );
}

export default AromaterapiaMasajes;