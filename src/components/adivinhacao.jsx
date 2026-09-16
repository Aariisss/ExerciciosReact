import { useState } from 'react';

function Adivinhação() {
    const [numeroSecreto, setNumeroSecreto] = useState(Math.floor(Math.random() * 100) + 1);
    const [tentativa, setTentativa] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [tentativas, setTentativas] = useState(0);

    function adivinharTentativa() {
        const numeroTentativa = Number(tentativa);

        setTentativas((valorAnterior) => valorAnterior + 1);

        if (numeroTentativa > numeroSecreto) {
            setMensagem('Muito alto');
        } else if (numeroTentativa < numeroSecreto) {
            setMensagem('Muito baixo');
        } else {
            setMensagem('Acertou!');
        }
    }

    return (
        <div>
            <h1>Jogo de Adivinhação</h1>
            <input type="number" value={tentativa} onChange={(evento) => setTentativa(evento.target.value)} />
            <button onClick={adivinharTentativa}>Tentar</button>
            <p>{mensagem}</p>
            <p>Tentativas: {tentativas}</p>
        </div>
    );
}

export default Adivinhação;