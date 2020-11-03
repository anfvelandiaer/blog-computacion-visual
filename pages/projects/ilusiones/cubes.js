import React from "react";
import { loadableP5 as P5Wrapper } from "../../../components/sketches/loadable";
import Cubes3d from "../../../components/sketches/ilusiones/Cubes3d";

const VisualDefault = () => {
  return (
    <div className="main-projects-container px-3">
      <div className="title">
        <h1 className="title-text">3D cubes</h1>
      </div>
          <div className="ilusion-wrap mt-4">
            <div className="ilusion-canvas">
            <P5Wrapper sketch={Cubes3d} />
            </div>
            <div className="description-text ilusion-description">
              <h5>Explicación</h5>
              <p className="ilusion-explanation">
                {" "}
                Este ejemplo muestra la importancia de la perspectiva lineal y
                el sentido de profundidad que todos tenemos. Al alinear de
                manera perfectamente paralela una de las caras de la estructura
                de cubos con la pantalla (nuestro punto de visión), podriamos
                ser engañados y pensar que es una estructura bidimensional, sin
                embargo una minima rotación pondrá de manifiesto la perspectica
                que se maneja, tal como sucede en la realidad, dandonos el
                sentido de profundidad que tiene la estructura.{" "}
                <a
                  href="https://es.wikipedia.org/wiki/Perspectiva"
                  target="_blank"
                >
                  {" "}
                  Mas Información{" "}
                </a>
              </p>
              
              <h5>Instrucciones</h5>
              <ul className="ilusion-explanation">
                <p className="ilusion-explanation mb-1" >¿Cuantos cuadrados o cubos vez?.</p>
                <p className="ilusion-explanation mb-1 ml-2" >Mueve el mouse sobre la imagen y vuelve a responder la misma pregunta.</p>
              </ul>
            </div>
          </div>
    </div>
  );
};

export default VisualDefault;
