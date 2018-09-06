import React from "react";

import "./Header.css";

const Header = () => {
    return (
        <header className="uk-margin" uk-margin="true">
            <h1 className="uk-text-center">EVENTOS</h1>
            <h3 className="uk-heading-line uk-text-center uk-text-large text-white"><span>Consumiendo API de EventBrite</span></h3>
        </header>
    );
}

export default Header;