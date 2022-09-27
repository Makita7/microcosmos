import { Link, Outlet } from "react-router-dom";


function Biocosmetica() {
    return (
        <div className="container biocosmetica main">
            <h1 className="text-center">Biocosmética</h1>
            <p className="smallercont">Diseñamos la  línea  Biocosmética Microcosmos® teniendo en cuenta los cuidados primarios de limpieza, tonicidad, humectación, nutrición e hidratación de la primer barrera  que protege nuestro organismo de los agentes externos. <br/>
            Vas a poder disfrutar de productos que nos fueron testeados en animales, veganos, libres de gluten y  respetuosos con el medio ambiente no solo por los ingredientes con las que están formulados, sino también porque evitamos empaques innecesarios para reducir la producción de basura aportando nuestro granito de arena. Nuestros envases contienen la mpinima cantidad de pl´stico posible y contamos también con repuestos sin envase. <br/>
            Nuestros productos Biocosmetica Microcosmos® es un mensaje de amor para cada cuidado básico. Sentilos
            </p>
            <br/>
            <div className="links">
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
    );
}


export default Biocosmetica;