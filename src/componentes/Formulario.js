import React from 'react';

const Formulario = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    onSubmit(Object.fromEntries(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" required />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
