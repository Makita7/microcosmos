import React from 'react'
import ToothBrushes from './img/ToothBrushes.jpg';

function PastaDental() {
    return (
        <div className='smallercont pastadental padBottom'>
            <h3>Pasta Dental</h3>
            <img alt="imagen sonrisa" src={ToothBrushes} className="ImgFixMorePages" />
            <p>
                Nuestra pasta dental Microcosmos® es ecológica, libre de flúor y parabenos y ofrece máxima limpieza a tu boca y extrema frescura.
                Está elaborada con materias primas de altísima calidad que garantizan un cuidado bucal integral sin causar efectos colaterales en el resto del ser.
            </p>
            <p className='text-center'>
                <b>Anímate al cambio!</b>
            </p>
            <p>
                Encontrá en las historias destacadas de nuestro Instagram información de cómo hacer tu propia parta dental y tus productos de limpieza,
                Consulta por proveedores de materias primas y talleres personalizados presenciales y online.
            </p>
            <button className=''><a href='https://instagram.com/anacarolina.rendon?igshid=YmMyMTA2M2Y='>Link</a></button>
        </div>
    )
}

export default PastaDental