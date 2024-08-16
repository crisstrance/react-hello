import React from 'react';
import './ImageGrid.css'; // Asegúrate de crear este archivo para los estilos
import gaming from "../../img/gaming.png";
import cine from "../../img/cine.png";
import anime from "../../img/anime.png";
import gaming2 from "../../img/gaming2.png";
import cine2 from "../../img/cine2.png";
import anime2 from "../../img/anime2.png";

const ImageGrid = () => {
  const handleImageClick = (section) => {
    window.location.href = `#${section}`;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 text-center mb-3">
          <picture>
            <source media="(orientation: portrait)" srcSet={gaming2} />
            <source media="(orientation: landscape)" srcSet={gaming} />
            <img
              src={gaming} // Imagen por defecto
              alt="Imagen 1"
              className="img-fluid image-item"
              onClick={() => handleImageClick('seccion1')}
            />
          </picture>
        </div>
        <div className="col-12 col-md-4 text-center mb-3">
          <picture>
            <source media="(orientation: portrait)" srcSet={cine2} />
            <source media="(orientation: landscape)" srcSet={cine} />
            <img
              src={cine}
              alt="Imagen 2"
              className="img-fluid image-item"
              onClick={() => handleImageClick('seccion2')}
            />
          </picture>
        </div>
        <div className="col-12 col-md-4 text-center mb-3">
          <picture>
            <source media="(orientation: portrait)" srcSet={anime2} />
            <source media="(orientation: landscape)" srcSet={anime} />
            <img
              src={anime}
              alt="Imagen 3"
              className="img-fluid image-item"
              onClick={() => handleImageClick('seccion3')}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
