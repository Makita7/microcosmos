import { TeListProd } from "./TeListProd"
import ImgTés from './TeaStrands.jpg';

function te() {
    return (
        <div className="container biocosmetica main padTop padBottom">
            <div className='smallercont infusiones'>
                <h3>AromaTÉterápia</h3>
                <p>
                    Este es un concepto que hemos creado para dar nombre a la practica del disfrute, consciente, de una taza de té o infusión aromática, recibiendo los beneficios que nos aporta el sostener una taza calentita, inhalar sus aromas y degustar sus sabores. <br/>
                    La combinación de hierbas y Camelia Sinensis (nombre científico de la planta del Té) aportan al organismos diferentes beneficios de consumir el té infusionado contribuye a combatir las enfermedades cardiovasculares debido a su alto contenido de antioxidantes, facilita la disminución de los triglicéridos, así como la del colesterol malo (LDL). Es diurético y saciante, perfecto para tomar entre horas, además de que favorece a la reducción de la grasa corporal. En cada variedad combinamos las propiedades del té con las de flores, semillas, cortezas, hierbas y frutas.
                </p>
                <h4 className="text-center">Nuestros Blends de Té</h4>
                <img alt="infusiones y tés en hebras" src={ImgTés} className="InfusionesImg" />
                <div className="cardCont padBottom">
                    {
                        TeListProd.map(p =>
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
                <p className="c"><i>
                    Desde Microcosmos® te acompañamos en el caminar presentes, y nos encantaría que nuestros productos más que productos inhertes puedan transmitir los mensajes que La Vida por medio de la naturaleza te regalan cada dia y puedas tener una vida de calma, amor y paz.
                </i></p>
            </div>
        </div>
    )
}

export default te