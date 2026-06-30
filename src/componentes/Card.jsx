import { useState, useEffect } from "react";
import useCartStore from "../cartStore";

function Card({ producto }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const agregarAlCarrito = useCartStore((state) => state.agregarAlCarrito);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMostrarModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div className="col-md-4 mb-4">
        <div
          className="card h-100"
          style={{ cursor: "pointer" }}
          onClick={() => setMostrarModal(true)}
        >
          <img
            src={producto.imagen}
            className="card-img-top"
            alt={producto.nombre}
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column text-center">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <p className="card-text fw-bold">${producto.precio}</p>
            <button
              className="btn btn-warning mt-auto"
              onClick={(e) => {
                e.stopPropagation();
                agregarAlCarrito(producto);
              }}
            >
              Pedir ahora
            </button>
          </div>
        </div>
      </div>

      {mostrarModal && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setMostrarModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{producto.nombre}</h5>
                <button
                  className="btn-close"
                  onClick={() => setMostrarModal(false)}
                ></button>
              </div>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <div className="modal-body text-center">
                <p>{producto.descripcion}</p>
                <p className="fw-bold fs-4">${producto.precio}</p>
                <button className="btn btn-warning w-100">Pedir ahora</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
