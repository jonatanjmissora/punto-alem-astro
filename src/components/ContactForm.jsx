
import "../styles/ContactForm.css"

export const ContactForm = () => {

  const sendMail = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const [name, email, telephone, event_type, event_date, event_guests, message] = formData.values();
    const body = `Nombre:   ${name}%0AMail:   ${email}%0ATeléfono:   ${telephone}%0ATipo de evento:   ${event_type}%0AFecha del evento:   ${event_date}%0ACant invitados:   ${event_guests}%0AMensaje:   ${message}`
    
    window.open(
      `https://mail.google.com/mail/u/0/?fs=1&to=info@puntoalemeventos.com&su=${event_type}&body=${body}&bcc=&tf=cm`,
      "_blank"
    );
    event.target.reset()
  }

return (

  <form className="form" onSubmit={sendMail}>
      <h2 className="form_title">Tu evento comienza aquí</h2>
      <div className="row">
        <label htmlFor="name">Nombre y Apellido</label>
        <input type="text" id="name" name="name" required/>
      </div>
      <div className="row">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div className="row">
        <label htmlFor="telephone">Telefono</label>
        <input type="text" id="telephone" name="telephone" required/>
      </div>
      <div className="row">
        <label htmlFor="event_type">Tipo de Evento</label>
        <input type="text" id="event_type" name="event_type" required/>
      </div>
      <div className="row">
        <label htmlFor="event_date">Fecha de Evento</label>
        <input type="text" id="event_date" name="event_date" required/>
      </div>
      <div className="row">
        <label htmlFor="event_guests">Cant. Invitados</label>
        <input type="text" id="event_guests" name="event_guests" required/>
      </div>
      <div className="row_last">
        <label htmlFor="message">Mensaje</label>
        <textarea name="message" id="message" cols="30" rows="6" required></textarea>
      </div>
      <div className="button_container">
        <button type='submit'>Enviar</button>
      </div>
    </form>

  )
}