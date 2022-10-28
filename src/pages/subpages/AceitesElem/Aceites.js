import {ListAceites} from './ListAceites';
import AceitesImg from './Aceites.jpg';

function Aceites() {
    return (
        <>
            <div className='smallercont aceites'>
                <h3>Aceites</h3>
                <p>
                    Nuestros aceites son profesionales y de grado terapéuticos ya que son sometidos a pruebas de laboratorio para asegurarnos de que recibas la mejor calidad en tus tratamientos. <br/>
                    Buscamos y seleccionamos los mejores aceites y los envasamos con el amor, la calma y la dedicación que queremos transmitirte.
                </p>
            </div>
            <img alt='AceitesImg' src={AceitesImg} className='AceitesImg' />
            <div>
                <div className="cardCont padBottom">
                    {
                        ListAceites.map(a =>
                            <div className="cardTwo" key={a.id}>
                                <div className="innerPadCard flex">
                                    {/* <div className='pad-right'>
                                        <img alt={a.title} src={a.img}/>
                                    </div> */}
                                    <div>
                                        <h5>{a.title}</h5>
                                        <p>{a.description}</p>
                                    </div>
                                </div>
                            </div>
                            )
                    }
                </div>
            </div>
        </>
    );
}

export default Aceites;