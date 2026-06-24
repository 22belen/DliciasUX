import { useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Empanadas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hamburguesas
              </a>
            </li>
          </ul>
          {token && (
            <button
              className="btn btn-outline-light ms-3"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
