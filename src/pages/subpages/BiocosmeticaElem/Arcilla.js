import { Arcillas } from "./BiocosmeticaProd";
import ArcillaImg from './img/arcillas-faciales.jpg';

function Arcilla() {
    return (
        <div className='smallercont arcilla padBottom'>
            <img className="ArcillaImg" src={ArcillaImg} alt="imagen arcillas faciales" />
            <h3>Génesis</h3>
            <p>
                La línea  de tierras, arcillas y polvos naturales Génesis Microcosmos® es un conjunto completo de compuestos presentes en la naturaleza que aportan a nuestra piel la pureza, elasticidad y propiedades necesarias para su cuidado amoroso.
            </p>
            <p>
                Sus propiedades astringentes, bactericidas y purificantes las hacen idóneas para tratar diferentes afecciones cutáneas como el acné, piel grasa etc.
            </p>
            <p>
                Además se agrega a la lista el carbón vegetal activado que  puede ser usado como exfoliante, en pastas dentales y jabones.
            </p>
            <div className="">
                {
                    Arcillas.map(p =>
                        <div className="contTwo" key={p.id}>
                            <li className="flex">
                                <h5>{p.title}</h5>
                                <p className="NotCell">{p.description}</p>
                            </li>
                                <p className="OnlyCell">{p.description}</p>
                        </div>
                    )
                }
            </div>
            <p className="ArcillaPFixPad">
                Su alto contenido en silicio es altamente beneficioso para pieles maduras y sensibles.
                <br/>
                Formular tus propias mascarillas faciales es una hermosa experiencia dale rienda suelta a la creatividad y enriquécelas con aceites esenciales, resinas y aceites vegetales y dale a tu piel lo que ella necesite cada día.
            </p>
        </div>
    )
}

export default Arcilla