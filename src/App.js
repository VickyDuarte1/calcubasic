import './App.css';
import logo from './Imagenes/ositos.png';
import Boton from './Componentes/Boton.js';
import Pantalla from './Componentes/Pantalla.js';
import BotonClear from './Componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() {

const[input, setInput] =useState('');

const agregarInput= val => {

  setInput(input + val);

};

const calcularResultado = () => {
setInput(evaluate(input))

;}

  return (
    <div className="App">
      <div className='logocalcu-contenedor'>
<img 
src={logo}
className= 'osos-logo'
alt='Logocalcugatos'/>
</div>
<div className='contenedor-calculadora'>

<Pantalla input={input}/>

<div className= 'fila '>
<Boton manejarClick={agregarInput}>1</Boton>
<Boton manejarClick={agregarInput}>2</Boton>
<Boton manejarClick={agregarInput}>3</Boton>
<Boton manejarClick={agregarInput}>+</Boton>
</div>
<div className= 'fila '>
<Boton manejarClick={agregarInput}>4</Boton>
<Boton manejarClick={agregarInput}>5</Boton>
<Boton manejarClick={agregarInput}>6</Boton>
<Boton manejarClick={agregarInput}>-</Boton></div>
<div className= 'fila '>
<Boton manejarClick={agregarInput}>7</Boton>
<Boton manejarClick={agregarInput}>8</Boton>
<Boton manejarClick={agregarInput}>9</Boton>
<Boton manejarClick={agregarInput}>*</Boton>
</div>
<div className= 'fila '>
<Boton manejarClick={calcularResultado} >=</Boton>
<Boton manejarClick={agregarInput} >0</Boton>
<Boton manejarClick={agregarInput} >.</Boton>
<Boton manejarClick={agregarInput} >/</Boton>
</div>

<div className= 'fila '>
<BotonClear manejarClear={() => setInput('')}>
  Clear
  </BotonClear>
</div>

</div>
    </div>
  );
}

export default App;
