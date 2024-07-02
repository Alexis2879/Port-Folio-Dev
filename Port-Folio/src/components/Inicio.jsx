import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (

    <div className="home">
      
      <h1>
        Hola, Soy <strong>Giovanni Medina</strong>  y soy Desarrolador Web en Lima-Perú,
        ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en 
        todo tipo de proyectos web.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicaión web, tener más
        visibilidad y relevancia en internet. <br />
        <Link to="/contacto">Contacta Conmigo</Link>   
      </h2>

      <section className="lasts-works" >
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>

        <div className="works">

        </div>
      </section>

    </div>
  )
}



