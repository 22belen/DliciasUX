import { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

function Home() {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      const response = await fetch("http://localhost:8000/productos");
      const data = await response.json();
      setProductos(data);
    };
    obtenerProductos();
  }, []);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((p) => p.categoria === categoriaSeleccionada)
    : productos;

  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mt-4">
        <div className="d-flex justify-content-center gap-2 mb-4">
          <button
            className={`btn ${categoriaSeleccionada === null ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => setCategoriaSeleccionada(null)}
          >
            Todos
          </button>
          <button
            className={`btn ${categoriaSeleccionada === "hamburguesa" ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => setCategoriaSeleccionada("hamburguesa")}
          >
            🍔 Hamburguesas
          </button>
          <button
            className={`btn ${categoriaSeleccionada === "empanada" ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => setCategoriaSeleccionada("empanada")}
          >
            🥟 Empanadas
          </button>
          <button
            className={`btn ${categoriaSeleccionada === "acompañamiento" ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => setCategoriaSeleccionada("acompañamiento")}
          >
            🍟 Acompañamientos
          </button>
          <button
            className={`btn ${categoriaSeleccionada === "promo" ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => setCategoriaSeleccionada("promo")}
          >
            Promociones
          </button>
        </div>
        <div className="row">
          {productosFiltrados.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
