function App() {
    const [imc, setImc] = React.useState(null);
    const [mensaje, setMensaje] = React.useState('');
    const [color, setColor] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [altura, setAltura] = React.useState('');

    const calcularIMC = (e) => {
        e.preventDefault();
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0 || pesoNum <= 0) {
            setMensaje('Ingrese valores válidos');
            setColor('black');
            setImc(null);
            return;
        }

       
        const imcCalculado = pesoNum / (alturaNum * alturaNum);
        setImc(imcCalculado);

        if (imcCalculado < 18.5) {
            setMensaje('Nivel bajo de peso');
            setColor('yellow');
        } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
            setMensaje('Nivel normal');
            setColor('green');
        } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
            setMensaje('Nivel de sobrepeso');
            setColor('orange');
        } else if (imcCalculado >= 30) {
            setMensaje('Nivel de obesidad');
            setColor('red');
        }
    };

    return (
        <div className="contenedor">
            <h2>Calculadora de IMC</h2>
            <form onSubmit={calcularIMC}></form>
            <h3>ingrese el peso en KG</h3>
            <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)}/>
            <h4>ingrese la altura en Metros</h4>
            <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)}/>
            <br />
            <button onClick={calcularIMC}>Calcular IMC</button>
            <br /><br />
            {imc && (
                <div>
                    <h3>S IMC ES: {imc}</h3>
                    <p className={color}>{mensaje}</p>
                </div>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);