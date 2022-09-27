import { ProdCapilar } from './BiocosmeticaProd'

function Capilar() {
    return (
        <div className='smallercont jabones'>
            <h3>Capilar</h3>
            <div className="cardCont padBottom">
                {
                    ProdCapilar.map(p =>
                        <div className="card" key={p.id}>
                            <div className="innerPadCard">
                                <img alt={p.title} src={p.img}/>
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