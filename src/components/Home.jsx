import React from 'react';
import './Home.css';
import loading from '../loading.svg';

const axios = require('axios');

function Home() {

    function dispatch_workforce() {
        axios.post('https://g1uvtzoixf.execute-api.eu-west-3.amazonaws.com/default/CovidRepartition', {
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="Home">
            <header className="Home-header">
                <img src={loading} className="Home-logo" alt="loading" />
                <h1>Hello from Home</h1>
            </header>
            <div className="Body-button">
                <button type="button" class="btn btn-primary" onClick={dispatch_workforce} >Dispatch workforce</button>
            </div>
        </div>
    );
}

export default Home;