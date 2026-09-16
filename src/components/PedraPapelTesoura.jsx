import { useState } from 'react';

function PedraPapelTesoura() {
    const opcoes = ['Pedra', 'Papel', 'Tesoura'];
    const [jogadaJogador, setJogadaJogador] = useState('');
    const [jogadaComputadorAtual, setJogadaComputadorAtual] = useState('');
    const [resultado, setResultado] = useState('');


    function jogadaComputador() {
        const indice = Math.floor(Math.random() * opcoes.length);
        return opcoes[indice];
    }

    function jogar() {
        const computador = jogadaComputador();
        setJogadaComputadorAtual(computador);
        verificarVencedor(jogadaJogador, computador);
    }

    function verificarVencedor(jogador, computador) {
        if (jogador === computador) {
            setResultado('Empate');
        }
    return (
        <div>
            <h1>Pedra, Papel ou Tesoura</h1>
            <button onClick={jogadaComputador}>Jogar</button>
            <button onClick={() => { setJogadaJogador('Pedra'); jogar(); }}>Pedra</button>
            <button onClick={() => { setJogadaJogador('Papel'); jogar(); }}>Papel</button>
            <button onClick={() => { setJogadaJogador('Tesoura'); jogar(); }}>Tesoura</button>
            <p>Sua jogada: {jogadaJogador}</p>
            <p>Jogada do computador: {jogadaComputadorAtual}</p>
        </div>
    );
}

export default PedraPapelTesoura;