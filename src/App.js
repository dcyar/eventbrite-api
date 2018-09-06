import React, { Component } from 'react';
import './App.css';

// Importar Componentes
import Header from './components/Header';
import Formsearch from './components/Formsearch';
import Events from './components/Events';

class App extends Component {
  // Token para las peticiones a la API de EventBrite
  token = 'PJNUN6VIOMOIPFGQKJW6';

  state = {
    categorias: [],
    eventos: []
  }

  componentDidMount() {
    this.obtenerCategorias();
  }

  // Obtener categorias desde la API
  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    // Peticion a la API
    await fetch(url)
      .then( response => {
        return response.json();
      })
      .then( categorias => {
        // Guardar el response en el state
        this.setState({
          categorias : categorias.categories
        })
      });  
  }

  // Obtener eventos desde la API
  obtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=date&token=${this.token}&locale=es_ES`;
    
    // Peticion a la API
    await fetch(url)
      .then( response => {
        return response.json();
      })
      .then( eventos => {
        // Guardar el response en el state
        this.setState({
          eventos : eventos.events
        })
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="uk-container">
        
          <Formsearch
            categorias = { this.state.categorias }
            obtenerEventos = { this.obtenerEventos } 
          />

          <Events 
            eventos = { this.state.eventos }
          />
        </div>
      </div>
    );
  }
}

export default App;
