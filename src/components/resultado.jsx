function Resultado({resultado}) {
    return (
        <div>
            <h1>Resultados</h1>
            <p>Soma: {resultado.soma}</p>
            <p>Subtração: {resultado.subtracao}</p>
            <p>Multiplicação: {resultado.multiplicacao}</p>
            <p>Divisão: {resultado.divisao}</p>
        </div>
    );
}

export default Resultado;