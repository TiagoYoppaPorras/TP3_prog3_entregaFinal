function App() {
    const [operacion, setOperacion] = React.useState('suma');
    const [resultado, setResultado] = React.useState(null);
    const [numero1, setNumero1] = React.useState('');
    const [numero2, setNumero2] = React.useState('');

    const calcular = (e) => {
       e.preventDefault();
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);

        if (isNaN(n1) || isNaN(n2)) {
            setResultado('Ingrese números válidos');
            return;
        }
         let res = 0;

        switch (operacion) {
            case 'suma':
                res = n1 + n2;
                break;
            case 'resta':
                res = n1 - n2;
                break;
            case 'multiplicacion':
                res = n1 * n2;
                break;
            case 'division':
                if (n2 !== 0) {
                    res = n1 / n2;
                } else {
                    res = 'Error: División por cero';
                }
                break;
            default:
                res = 'opcion INVALIDA';
        }

        setResultado(res);
    };

    const deshabilitarBoton = operacion === 'division' && parseFloat(numero2) === 0;

    return (
        <div >
            <h2>Calculadora</h2>
            <form onSubmit={calcular} >
            <input type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
            <input type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
            <br /><br />
            <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="multiplicacion">Multiplicación</option>
                <option value="division">División</option>
            </select>
            <br /><br />
            <button onClick={calcular} disabled={deshabilitarBoton}>CALCULARR</button>
            <br /><br />
            </form>

            {resultado !== null && (<h3>Resultado: {resultado}</h3>)}
            {deshabilitarBoton && (<p>La operación de división está deshabilitada.</p>)}
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);