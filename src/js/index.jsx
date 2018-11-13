import React from 'react';
import ReactDom from 'react-dom';
import App from './app.jsx';
require('../styles/index.scss')

document.addEventListener('DOMContentLoaded', function(){
    //Tutaj umieść kod

    ReactDom.render( 
        <App />,
        document.getElementById('app'))
});