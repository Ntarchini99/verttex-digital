/* eslint-disable no-unused-vars */
import React from 'react';
import './HowWeWork.css';

const workSteps = [
  {
    id: 1,
    title: "Hablemos de tu negocio",
    description: "Queremos entender a profundidad tu empresa, tus desafíos y tus aspiraciones digitales."
  },
  {
    id: 2,
    title: "Identificamos",
    description: "Tus principales competidores, analizamos las estrategias de marketing y ventas. Detectamos las oportunidades de mejora."
  },
  {
    id: 3,
    title: "Ideamos",
    description: "Creamos un plan digital único y adaptado a tus necesidades específicas."
  },
  {
    id: 4,
    title: "Diseñamos",
    description: "Esbozamos la jerarquía de la información y la estética visual del producto. Creamos una versión interactiva del diseño."
  },
  {
    id: 5,
    title: "Testeos",
    description: "Realizamos el mapeo del flujo de usuario y pruebas de usabilidad para validar el diseño."
  },
  {
    id: 6,
    title: "Entrega y Lanzamiento",
    description: "Te entregamos la página web, incluyendo el código fuente, los archivos y la documentación necesaria."
  }
];

const HowWeWork = () => {
  return (
    <section className="how-we-work" id='how'>
      <div className="container">
        <h1 className="main-title">Como trabajamos</h1>
        
        <div className="work-grid">
          {workSteps.map(step => (
            <div key={step.id} className="work-item">
              <h3 className="subtitle">{step.title}</h3>
              <p className="description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;