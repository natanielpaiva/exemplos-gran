import React, { useState } from 'react';

function FormularioControlado() {
  const [nome, setNome] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome enviado: ${nome}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome} // O valor é controlado pelo React
          onChange={(e) => setNome(e.target.value)} // Atualiza o estado
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioControlado;