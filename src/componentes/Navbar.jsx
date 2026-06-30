import { useNavigate } from "react-router-dom";
import useCartStore from "../cartStore";

function Navbar() {
  const navigate = useNavigate();
  const irAlFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };
  const carrito = useCartStore((state) => state.carrito);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src="/ImgProductos/Logo.jpeg"
            alt="Logo"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          Delicias del Plata
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li>
              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={irAlFooter}
              >
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://wa.me/59899494456?text=Hola!%20Quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 WhatsApp
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light position-relative">
                🛒
                {carrito.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {carrito.length}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
