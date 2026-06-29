import { useState } from "react";

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const imagenes = [
    { src: "/ImgProductos/PromoFamilia.jpeg", alt: "Promo Familia" },
    { src: "/ImgProductos/PromoSolari.jpeg", alt: "Promo Solari" },
    { src: "/ImgProductos/Promoduo.jpeg", alt: "Promo Duo" },
    { src: "/ImgProductos/PromoBig3.jpeg", alt: "Promo Big3" },
    { src: "/ImgProductos/PromoEmpanadas.jpeg", alt: "Empanadas" },
  ];
  const anterior = () => {
    setActiveIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setActiveIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="carrusel" className="carousel slide">
      <div className="carousel-inner">
        {imagenes.map((imagen, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={imagen.src}
              className="d-block w-100"
              alt={imagen.alt}
              style={{
                height: "750px",
                objectFit: "contain",
                background: "#FF5500",
              }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        onClick={anterior}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        onClick={siguiente}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Banner;
