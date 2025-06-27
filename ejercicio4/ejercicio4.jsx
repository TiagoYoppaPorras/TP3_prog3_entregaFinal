function App() {
    const [botonIzquierdoActivo, setBotonIzqAct] = React.useState(true);
    const manejarIzquierdo = () => {setBotonIzqAct(false);};
    const manejarDerecho = () => {setBotonIzqAct(true);};

    return (
        <div >
            <button onClick={manejarIzquierdo} disabled={!botonIzquierdoActivo}>
                IZQUIERDO
            </button>
            <button onClick={manejarDerecho} disabled={botonIzquierdoActivo} style={{ marginLeft: '10px' }}>
                DERECHO
            </button>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);