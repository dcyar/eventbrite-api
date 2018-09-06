import React, { Component } from 'react';

// Impotar componentes
import Event from '../Event';

class Events extends Component {
    render () {
        // Guardamos el contenido del evento para simplificar el map
        const eventos = Object.keys(this.props.eventos);
        
        return (
            <div className="uk-child-width-1-3@m" uk-grid="true">
                { eventos.map(key => (
                    <Event
                        key = { key }
                        evento = { this.props.eventos[key] }
                    />
                )) }
            </div>
        )
    }
}

export default Events;