import { useState } from 'react';

function Calculadora() {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);

    function calcular () {
        const numero1 = Number(valor1);
        const numero2 = Number(valor2);
        const soma = numero1 + numero2;
        const subtracao = numero1 - numero2;
        const multiplicacao = numero1 * numero2;
        const divisao = numero1 / numero2;
    }

  return (
    <div>
      <h1>Caixa de Mercado</h1>

      <input type="number" value={valor1} onChange={(evento) => setValor1(evento(e.target.value))} />
      <input type="number" value={valor2} onChange={(evento) => setValor2(evento(e.target.value))} />

      <button onClick={calcular}>Calcular</button>

    </div>
  );
}

export default Calculadora;