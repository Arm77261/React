import React from 'react';
import Header from './componentes/Encabezado';
import Form from './componentes/Formulario';
import Card from './componentes/Tarjeta';

function App() {
  const handleFormSubmit = (data) => {
    console.log('Datos recibidos:', data);
  };

  return (
    <div className="App">
      <Header />
      <Form onSubmit={handleFormSubmit} />
      <Card title="Título de prueba" description="Descripción de prueba" />
    </div>
  );
}

export default App;

