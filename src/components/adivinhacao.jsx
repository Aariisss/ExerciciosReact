import useState from 'react';

function Adivinhação() {
    const [numeroSecreto, setNumeroSecreto] = useState(Math.floor(Math.random() * 100) + 1);
    const [tentativa, setTentativa] = useState('');

    function adivinharTentativa() {
        const numeroTentativa = Number(tentativa);
        if (numeroTentativa > numeroSecreto) {
            console.log('Muito alto');
        } else if (numeroTentativa < numeroSecreto) {
            console.log('Muito baixo');
        } else {
            console.log('Acertou!');
        }
    }

    return (
        <div>
            <h1>Jogo de Adivinhação</h1>
            <input type="number" value={tentativa} onChange={(evento) => setTentativa(evento.target.value)} />
            <button onClick={adivinharTentativa}>Tentar</button>
        </div>
    );
}

export default Adivinhação;