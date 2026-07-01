import useCartStore from "../cartStore";

function Carrito() {
  const carrito = useCartStore((state) => state.carrito);
  const mostrarCarrito = useCartStore((state) => state.mostrarCarrito);
  const toggleCarrito = useCartStore((state) => state.toggleCarrito);
  const eliminarDelCarrito = useCartStore((state) => state.eliminarDelCarrito);
  const vaciarCarrito = useCartStore((state) => state.vaciarCarrito);

  const total = carrito.reduce((acc, p) => acc + Number(p.precio), 0);

  return (
    <>
      {mostrarCarrito && (
        <div className="carrito-overlay" onClick={toggleCarrito} />
      )}

      <div className={`carrito-sidebar ${mostrarCarrito ? "abierto" : ""}`}>
        <div className="carrito-header">
          <h5 className="mb-0">Tu pedido</h5>
          <button className="btn-close" onClick={toggleCarrito}></button>
        </div>

        <div className="carrito-body">
          {carrito.length === 0 ? (
            <p className="carrito-vacio">No agregaste productos todavía.</p>
          ) : (
            carrito.map((p, index) => (
              <div key={index} className="carrito-item">
                <img src={p.imagen} alt={p.nombre} />
                <div className="flex-grow-1">
                  <p className="mb-0 fw-semibold">{p.nombre}</p>
                  <p className="mb-0 text-muted">${p.precio}</p>
                </div>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => eliminarDelCarrito(index)}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {carrito.length > 0 && (
          <div className="carrito-footer">
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-bold">Total:</span>
              <span className="fw-bold">${total}</span>
            </div>
            <a
              href={`https://wa.me/59899494456?text=Hola!%20Quiero%20hacer%20un%20pedido:%20${carrito.map((p) => p.nombre).join(", ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning w-100 mb-2"
            >
              Pedir por WhatsApp
            </a>
            <button
              className="btn btn-outline-danger w-100"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Carrito;
