import React from 'react';

const Event = (props) => {
    // Extrayendo el nombre del evento
    const {name} = props.evento;

    // No seguir si el nombre es null
    if(!name) return null;

    let descripcion = props.evento.description.text;
    
    // Limitar la longitud de la descripcion
    if(descripcion.length > 250) {
        descripcion = descripcion.substr(0, 250);
    }
    
    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {/* Si no nay logo, imprimir string vacio */}
                    { props.evento.logo !== null ?
                        <img src={ props.evento.logo.url } alt={ props.evento.name.text } />
                        : ''
                    }
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{ props.evento.name.text }</h3>
                    <p>{ descripcion }</p>
                </div>
                <div className="uk-card-footer">
                    <a href={ props.evento.url } className="uk-button uk-button-secondary" target="_blank">
                        Más Información
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Event;