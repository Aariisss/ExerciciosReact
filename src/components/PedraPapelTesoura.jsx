function PedraPapelTesoura() {
    const opcoes = ['Pedra', 'Papel', 'Tesoura'];

    function jogadaComputador() {
        const indice = Math.floor(Math.random() * opcoes.length);
        return opcoes[indice];
    }
    return (
        <div>
            <h1>Pedra, Papel ou Tesoura</h1>
            <button onClick={jogadaComputador}>Jogar</button>
        </div>
    );
}

export default PedraPapelTesoura;