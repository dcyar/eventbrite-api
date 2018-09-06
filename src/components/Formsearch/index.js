import React, { Component } from "react";

class Formsearch extends Component {

    nombreEventoRef = React.createRef();
    categoriaRef = React.createRef();

    buscarEvento = (e) => {
        e.preventDefault();

        // Variable para la busqueda de eventos
        const datosBusqueda = {
            nombre: this.nombreEventoRef.current.value,
            categoria: this.categoriaRef.current.value
        }

        // pasar por props a App.js
        this.props.obtenerEventos(datosBusqueda);
    }

    // Renderizar las opciones del select en el formulario
    mostrarCategorias = (key) => {
        const categoria = this.props.categorias[key];
        
        const {id, name_localized} = categoria;

        // Si id o name_localized estan vacios no continuar
        if(!id || !name_localized) return null;

        return (
            <option key={id} value={id}>{ name_localized }</option>
        )
    }

    render() {
        // Guardar las categorias
        const categorias = Object.keys(this.props.categorias);

        return (
            <form onSubmit={ this.buscarEvento }>
                <fieldset className="uk-fielset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Buscar evento por nombre o categoria
                    </legend>
                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input ref={ this.nombreEventoRef } className="uk-input" type="text" placeholder="Nombre de Evento o Ciudad" />
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            {/* Impresion del select con las categorias */}
                            <select ref={ this.categoriaRef } className="uk-select">
                                { categorias.map(this.mostrarCategorias) }
                            </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">Buscar</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default Formsearch;