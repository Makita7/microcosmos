import { SalesProd } from './BiocosmeticaProd'

function SalesdeBaño() {
    return (
        <div className='smallercont jabones'>
            <h3>Sales de Baño Premium</h3>
            <p>
                Combinan variedad de sales con diferentes aceites esenciales y vegetales y en algunos casos flores y hierbas para relajar sitema nervioso al momento del baño.<br/>
                Las sales son revitalizantes, relajantes, desintoxican la piel generando suavidad y regeneración celular por las propiedades de los diferentes compuestos que contienen.<br/>
                Pueden utilizarse en bañeras, pediluvios y maniluvios, teniendo en cuenta que si se utiliza en jacuzzis, no deberán encenderse los jets debido a que podrían dañarlos
            </p>
            <div className="cardCont padBottom">
                {
                    SalesProd.map(p =>
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

export default SalesdeBaño