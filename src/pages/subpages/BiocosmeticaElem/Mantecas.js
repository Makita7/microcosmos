import { Mantecas as MantecasProd } from "./BiocosmeticaProd";

function Mantecas() {
    return (
        <div className='smallercont tonicos'>
        <h3>Mantecas Corporales y Labiales</h3>
        <p>
            Te ofrecemos tres productos elaborados a base de mantecas de altísima calidad naturales aromatizadas, enriquecidas con aceites esenciales y grasos que las hacen perfectas para cuidar tu piel. <br/>
            Las mismas son ricas en vitaminas y ácidos grasos favoreciendo así la hidratación, nutrición y humectación de tu piel.
        </p>
        <div className="cardCont padBottom">
            {
                MantecasProd.map(p =>
                    <div className="card" key={p.id}>
                        <div className="innerPadCard">
                            <img className="mantecasImg" alt={p.title} src={p.img}/>
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

export default Mantecas