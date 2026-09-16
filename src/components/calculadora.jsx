import { useState } from 'react';
import Resultado from './resultado';

function Calculadora() {
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");

    const [resultado, setResultado] = useState(null);

    function calcular () {
        const numero1 = Number(valor1);
        const numero2 = Number(valor2);
        const soma = numero1 + numero2;
        const subtracao = numero1 - numero2;
        const multiplicacao = numero1 * numero2;
        const divisao = numero1 / numero2;

        setResultado({
            soma: soma,
            subtracao: subtracao,
            multiplicacao: multiplicacao,
            divisao: divisao
        });
    }

  return (
    <div>
      <h1>Caixa de Mercado</h1>

      <input type="number" value={valor1} onChange={(evento) => setValor1(evento.target.value)} />
      <input type="number" value={valor2} onChange={(evento) => setValor2(evento.target.value)} />

      <button onClick={calcular}>Calcular</button>
      {resultado && (
        <Resultado resultado={resultado} />
      )}

    </div>
  );
}

export default Calculadora;