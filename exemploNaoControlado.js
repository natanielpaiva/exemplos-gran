import React, { useRef } from 'react';

function FormularioNaoControlado() {
  const nomeRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome enviado: ${nomeRef.current.value}`); // Obtém o valor diretamente do DOM
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" ref={nomeRef} /> {/* Sem estado controlado */}
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioNaoControlado;