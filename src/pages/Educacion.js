import Banner from '../components/Banner';
import Img from '../assets/educacionBanner.png'

function Educacion() {
  return (
    <div className='main educacion padBottom'>
      <Banner alt='sobre nosotros banner' src={Img} title='EDUCACIÓN'/>
      <div className='container padTop ContainerCelEdu'>
        <p>
          Nuestra pasión es conocer más sobre como funcionamos a nivel integral y como prevenir enfermedades teniendo en cuenta los tres aspectos fundamentales de nuestra vida (espíritu, alma y cuerpo) y acompañar y desafiar a cada quién a encontrar el propósito de su vida, lo que los japoneses llama IKIGAI (Ver anexo IKIGAI
          Creemos que generar espacios de aprendizajes mutuos contribuye a generar conciencia comunitaria  de pequeños cambios que podemos realizar para vivir mejor, más sanos y más felices.
          Para poder transmitir todo aquello que por mucho tiempo hemos vivido, experimentado, estudiado y aprendido, hemos diseñado una serie de talleres y cursos para que puedas de manera sencilla implementar la aromaterapia en conjunción con diferentes disciplinas para prevenir y sanar enfermedades.
          Taller de cosmética natural
        </p>
        <div className='list'>
          <h5>Taller o clases personalizadas de:</h5>
          <ul>
            <li>Productos de limpieza ecológicos y sustentables</li>
            <li>aromaterapia y mindfulness</li>
            <li>aromaterapia y arte</li>
            <li>creación de infusiones terapéuticas y blends de té, AromaTÉterapia</li>
            <li>aromaterapia aplicada al dia a dia</li>
            <li>Mindfulness "Tranquilidad a pesar de" Literatura</li>
          </ul>
        </div>
        <p>
        Estamos prontos a presentar nuestros dos primeros libros experienciales e interactivos, inspirados por La Vida y escritos por la fundadora de este Microcosmos®, Ana Carolina Rendón dirigido a niños/as, adolescentes y adultos/as que quiera vivir su Ikigai y aumentar su inteligencia emocional. <br/>
        Conoce más sobre lugares y fechas de presentaciones y todo sobre estas dos pequeñas y grandes obras de puro amor. en nuestras historias destacadas de Instagram
        </p>
      </div>
    </div>
  )
}

export default Educacion