function Footer() {
  return (
    <footer className="bg-warning text-dark mt-5 py-5" id="footer">
      <div className="container">
        {/* Nombre del negocio */}
        <div className="text-center mb-4">
          <h3 className="fw-bold mb-2">Delicias del Plata</h3>
          <p className="mb-1 mt-1">
            Hamburguesas y empanadas hechas con pasión.
          </p>
        </div>

        <div className="row justify-content-center text-center gy-3">
          <div className="col-md-3">
            <h6 className="fw-bold">📧 Correo</h6>
            <p className="mb-0">admin@delicias.com</p>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">📱 WhatsApp</h6>
            <p className="mb-0">099 494 456</p>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">🕒 Horario</h6>
            <p className="mb-0">
              Martes a Domingos
              <br />
              20:00 - 00:00
            </p>
          </div>
        </div>

        <hr className="my-2" />

        <div className="text-center small">
          © 2026 Delicias del Plata · Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
