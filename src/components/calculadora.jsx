import { useState } from 'react';

function Calculadora() {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);

  return (
    <div>
      <h1>Caixa de Mercado</h1>

      <input type="number" value={valor1} onChange={(evento) => setValor1(evento(e.target.value))} />
      <input type="number" value={valor2} onChange={(evento) => setValor2(evento(e.target.value))} />

      <button>Calcular</button>

    </div>
  );
}

export default Calculadora;