import { useState, useEffect } from "react";
import Card from "./Card";

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const response = await fetch("http://localhost:8000/productos");
      const data = await response.json();
      setProductos(data);
    };
    obtenerProductos();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {productos.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Home;
