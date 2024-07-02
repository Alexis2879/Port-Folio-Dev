import { Link } from 'react-router-dom';
import { trabajos } from "../data/trabajos";

export const Portafolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portafolio</h1>

      {
        trabajos.map(trabajo => {
          return (
            <article key={trabajo.id}>
              <span>{trabajo.categorias}</span>
              <h2><Link to="https://tiendapruebadongiovanni.000webhostapp.com/index.html" target='_blank'>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologias}</h3>
              <h3>{trabajo.descripcion}</h3>
            </article>
          );
        })
      }
    </div>
  )
}
