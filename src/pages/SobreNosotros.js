import Banner from '../components/Banner';
import Img from '../assets/quienesSomosBanner.png'
import Logo from '../assets/logoBanner.png'

function SobreNosotros() {
  return (
    <div className='quienesSomos padBottom'>
      <Banner alt='sobre nosotros banner' src={Img} title='quienes Somos'/>
      <h3 className='padTop title text-center'>Nuestra Historia</h3>
      <div className='container main'>
        <img alt='logo our story' src={Logo} className='float'/>
        <p>
        Microcosmos® es el resultado de un camino de vida recorrido, compartido, sentido, sufrido y de entrega constante al sueño de ser más allá de las fronteras y los límites.
        Muchas personas hemos vivido situaciones dolorosas que nos llevan a procesos difíciles y en algunos casos depresivos. Fue así para nuestra fundadora, Ana Carolina Rendón, y en su proceso de recuperación encontró en la meditación, la oración,  la lectura de palabras poderosas, la escritura, el arte, la aromaterapia y la ingesta de infusiones, un puente para poder ser, y tener conexión y equilibrio entre su espíritu, alma/mente y su cuerpo. 
        No es que crea ya estar en perfecto equilibrio pero sus estados depresivos cesaron y descubrió que parte de su proceso de sanidad era acompañar a personas que puedan estar sufriendo emocional, física o espiritualmente.
        Escritora, curiosa y apasionada por el estudio, En el año 2015 termina su carrera relacionada a la educación formal en Argentina y más adelante se sumerge en el estudio de diferentes disciplinas que hicieron a los conocimientos integrales de su ser para así acompañar de manera profesional a quienes lo requieran.
        El Coaching ontológico, Mindfulness, la PNL (campo de la mente), la reflexología, masoterapia, masaje ayurveda, aromaterapia, aceites esenciales, cosmética natural, fitoterapia y terapias biomagnéticas, entre otras, se complementan a sus estudios en preparación física y el arte del Té, certificando como Máster en Té, Tea Sommelier y Tea Blender, obteniendo así competencias integrativas, 
        La fe en La Vida y el Creador se refuerza día a día con sus experiencias de vida místicas y los encuentros con otros/as- Fe que la animó a dar forma a su servicio vocacional y a compartir el sueño de que el Planeta entero sea salpicado por gotitas de Microcosmos® 
        Hoy somos varios los que hacemos posible este sueño. Ofrecemos terapias, servicios, productos y  muy pronto libros que puedan acompañar procesos dolorosos y de estrés resultado no sólo de las condiciones de encierro que marcaron un antes y un después en la vida de mucha personas  sino también las inclemencias de la misma vida. 
        Nuestras instalaciones
        En un primer momento nada detuvo a “La Caro” a tener su espacio de intercambio y aprendizajes. Transformó su habitación en un gabinete improvisado en la casa que alquilaba en la Ciudad de Mendoza. Los muebles reciclados por ella misma, una pequeña camilla portátil dos alfombras turquesas  y una pared violeta dieron alojo al corazón Microcosmos® que junto a la familia inauguraron en una pequeña celebración el 3 de Octubre del 2020,
        Hoy contamos con un gabinete cargado de amor paz y aromas exquisitos y estamos expectantes a tener nuestro pequeño santuario a orillas del Rio Neuquén. Te invitamos a formar parte de nuestra historia y disfrutar, no sólo de nuestros servicios de bienestar, sino también de nuestros productos y enriquecernos con tus preguntas, testimonios o comentarios
        Sobre el nombre
        El nombre inicial fue IKIGAI término japonés que hace referencia al Sentido de vida, pero al realizar los trámites de registro tuvimos que repensarlo.
        Meditando días y semanas enteras debajo de un naranjo y un granado, con una taza de té y unas nueces partidas, llegó nuestro hermoso nombre, Microcosmos®.
        Lo mínimo, lo más pequeño, aquella expresión más insignificante que podemos apreciar de la creación, tiene un efecto cósmico e inmenso en el desarrollo de nuestro ser.
        Una pequeña gota de aceite tan compleja y armónica puede transformar nuestro mundo y conectarnos con La Vida.
        Microcosmos® nos hace recordar que podemos encontrar grandeza en las pequeñas cosas de la vida.

        </p>
      </div>
    </div>
  )
}

export default SobreNosotros