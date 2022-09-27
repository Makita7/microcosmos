import { JabonesProd } from "./BiocosmeticaProd";

function Jabones() {
    return (
        <div className='smallercont jabones'>
            <h3 >Jabones</h3>
            <p>Cada persona es un mundo y para cada uno un jabón que limpie y purifique nuestra piel y lo predisponga a un baño placentero y seguro
                Cada jabón además de estar pensado en vos, es ecológico  totalmente vegano y libre de parabenos.
                Microcosmos® te ofrece a través de estos aceites cuidados terapéuticos y/o aromáticos diseñados a tu medida.
                Se combinan aceites esenciales, extractos naturales, aceites vegetales y diferentes compuestos para atender las necesidades de tu piel. <br/>
                <b>Sus nombre en japonés le dan un toque significativo y especial.</b>
            </p>

            {
                JabonesProd.map(p =>
                    <div key={p.id}>
                        <h5>{p.title}</h5>
                        <p>{p.description}</p>
                    </div>
                )
            }
        </div>
    );
}

export default Jabones;