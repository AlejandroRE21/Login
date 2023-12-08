import './App.css';
import Fecha from './Componentes/ComponenteFecha'
import Datos from './Componentes/ComponenteDatos';
import React, { useState, useEffect } from 'react';
import ComponenteForm from './Componentes/ComponenteForm';
import EdadPerro from './Componentes/ComponenteEdad';
import DinosaurGame from './Componentes/Dinosaurio';
import PokemonSearch from './Componentes/ComponentePokemon';
import RickAndMorty from './Componentes/ComponenteRick';
import Pulsador from './Componentes/ComponentePulsador';
import Login from './Componentes/firebas/login';


function App() {
  
  const [operaciones, setOperacion] = useState([])
  function calcular(event){
    event.preventDefault();
    const edadH = parseInt(event.target.valor1.value, 10)
    const edadP = (edadH) * 7
    const nuevo = {
      resultado: edadP,
      valor1: edadH
    }
    setOperacion([nuevo,...operaciones])
    event.target.valor1.value='';
  }
  const [datos, setDatos] = useState({nombre: '', materia:''})
  const [isAgeModuleEnabled, setAgeModuleEnabled] = useState (false);
  const [isDateModuleEnabled, setDateModuleEnabled] = useState (false);
  const [isFormModuleEnabled, setFormModuleEnabled] = useState (false);
  const [isPulsModuleEnabled, setPulsModuleEnabled] = useState (false);
  const [isButtonModuleEnabled, setButtonModuleEnabled] = useState (false);
  const [isRickModuleEnabled, setRickModuleEnabled] = useState (false);
  const [isLoginModuleEnabled, setLoginModuleEnabled] = useState (false);
  
  const toggleAgeModule=()=>{
    setAgeModuleEnabled (!isAgeModuleEnabled);
  };
  const toggleDateModule=()=>{
    setDateModuleEnabled (!isDateModuleEnabled);
  };
  const toggleFormModule = () => {
    setFormModuleEnabled (!isFormModuleEnabled);
  };

  const togglePulsModule = () => {
    setPulsModuleEnabled (!isPulsModuleEnabled);
  }

  const toggleButtonModule = () => { 
    setButtonModuleEnabled (!isButtonModuleEnabled);
  };

  const toggleRickModule = () => {
    setRickModuleEnabled (!isRickModuleEnabled);
  }

  const handleFormSubmit =(data) =>{
    setDatos(data);
  }

  const toggleLoginModule = ()=> {
    setLoginModuleEnabled (!isLoginModuleEnabled);
  }

  return(
  
    <header className="App-header">

    <div>
      <h1>Hola esta es mi primera práctica en React</h1>
      
      <button className="custom-button" onClick={toggleAgeModule}>
        {isAgeModuleEnabled ? 'Deshabilitar Módulo Edad Canina' : 'Habilitar Módulo Edad Canina'}
      </button>

      {isAgeModuleEnabled && <><form onSubmit={calcular}>
        <p>Ingrese su edad: <input type="text" name="valor1" /></p>
        <input type="submit" value="Calcular" />
      </form><EdadPerro resultados={operaciones} /></>}

      <button className="custom-button" onClick={toggleDateModule}>
        {isDateModuleEnabled ? 'Deshabilitar Módulo Fecha' : 'Habilitar Módulo Fecha'}
      </button>
      {isDateModuleEnabled && <Fecha/>}

      <button className="custom-button" onClick={toggleFormModule}>
        {isFormModuleEnabled ? 'Deshabilitar Módulo Formulario' : 'Habilitar Módulo Formulario'}
      </button>
      {isFormModuleEnabled && <><ComponenteForm onFormSubmit={handleFormSubmit} />
      <Datos nombre={datos.nombre} materia={datos.materia} /></>}

      <button className="custom-button" onClick={togglePulsModule}>
        {isPulsModuleEnabled ? 'Deshabilitar Pulsador' : 'Habilitar Pulsador'}
      </button>
      {isPulsModuleEnabled && <Pulsador/>}
      
      <button className="custom-button" onClick={toggleButtonModule}>
        {isButtonModuleEnabled ? 'Deshabilitar Pokemon Search' : 'Habilitar Pokemon Search'}
      </button>
      {isButtonModuleEnabled && <PokemonSearch/>}
      
      <button className="custom-button" onClick={toggleRickModule}>
        {isRickModuleEnabled ? 'Deshabilitar RickAndMorty' : 'Habilitar RickAndMorty'}
      </button>
      {isRickModuleEnabled && <RickAndMorty/>}

      <button className="custom-button" onClick={toggleLoginModule}>
        {isLoginModuleEnabled ? 'Deshabilitar Login' : 'Habilitar Login'}
      </button>
      {isLoginModuleEnabled && <Login />}

        
    </div>
    </header>
  )
}
export default App;