import { ProdCapilar } from './BiocosmeticaProd'
import ImgCapilar from './img/CuidadoCapilar.jpg';

function Capilar() {
    return (
        <div className='smallercont jabones'>
            <h3>Capilar</h3>
            <img alt="imagen capilares" src={ImgCapilar} className="ImgFixMorePages" />
            <div className="cardCont padBottom">
                {
                    ProdCapilar.map(p =>
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

export default Capilar