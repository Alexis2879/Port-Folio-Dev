/*import React from 'react'*/

export const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>

      <form action="" className="contact">
        <input type="text" placeholder="Nombre" required/>
        <input type="text" placeholder="Apellidos" required />
        <input type="email" placeholder="Email" required />
        <input type="number" placeholder="Teléfono +51" required />
        <textarea placeholder="Motivo de contacto" required />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}



