/*import { Link } from 'react-router-dom';*/
import { trabajos } from "../data/Trabajos";

export const Portafolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portafolio</h1>

      {
        trabajos.map(trabajo => {
          return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
              <img src={`/images/${trabajo.id}.jpg`} alt={trabajo.title} />
              </div>
              <span>{trabajo.categorias}</span>
              <h2><a href={trabajo.url} target='_blank' rel='noopener noreferrer'>{trabajo.nombre}</a></h2>
              <h3>{trabajo.tecnologias}</h3>
              <h3>{trabajo.descripcion}</h3>
            </article>
          );
        })
      }
    </div>
  )
}
/*+trabajo.id+*/
/*Otra forma de colocar o de traer  la informacion de la URL */
/* <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>  */
/* <h2><Link to="https://tiendapruebadongiovanni.000webhostapp.com/index.html" target='_blank'>{trabajo.nombre}</Link></h2>   */


/*     
export const trabajos = [

    {
        'id': 'tiendavirtual',
        'nombre': 'Tienda Virtual',
        'url': 'https://tiendapruebadongiovanni.000webhostapp.com/index.html',
        'tecnologias': 'HTML5, CSS, JS, MySQL',
        'categorias': 'Desarrollo Web',
        'descripcion': 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede).'
    },


    {
        'id': 'FrontEndstore',
        'nombre': 'FrontEnd Store',
        'url': 'https://frontendstore-giovannimedina.netlify.app/',
        'tecnologias': 'HTML, CSS, JS',
        'categorias': 'Desarrollo Web',
        'descripcion': 'Tienda virtual elaborada con HTML5, CSS y JAVASCRIPT, contiene pagina de Nosotros, pagina de ver producto donde usted puede seleccionar Talla y cantidad de productos. Este proyecto fue subido a internet.'
    },

    {
        'id': 'landingpage',
        'nombre': 'Landing Page Freelancer',
        'url': 'https://freelancer-giovannimedina.netlify.app/?#',
        'tecnologias': 'HTML5, CSS, JAVASCRIPT',
        'categorias': 'Desarrollo Web',
        'descripcion': 'Lading Page elaborada con Html5, CSS y JS web basica para un freelancer, donde se brinda diferentes servicios al igual que un formulario para ser contactado, este proyecto fue subido a internet.'
    },

    {
        'id': 'twitter',
        'nombre': 'Twitter',
        'url': 'twitter.com',
        'tecnologias': 'HTML, CSSL',
        'categorias': 'Maquetación Web',
        'descripcion': 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución',
    },

    {
        'id': 'linkedin',
        'nombre': 'Linkedin',
        'url': 'linkedin.com',
        'tecnologias': 'HTML, CSSL, JS, PHP, LARAVEL',
        'categorias': 'Desarrollo Web',
        'descripcion': 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución',
    },

    {
        'id': 'udemy',
        'nombre': 'Udemy',
        'url': 'udemy.com',
        'tecnologias': 'MEAN Stack',
        'categorias': 'Desarrollo Web',
        'descripcion': 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución',
    },

    {
        'id': 'youtube',
        'nombre': 'Youtube',
        'url': 'youtube.com',
        'tecnologias': 'JS, REACT, PHP, SYMFONY',
        'categorias': 'Desarrollo Web',
        'descripcion': 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución',
    },
];
*/