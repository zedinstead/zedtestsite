import React, { useContext } from 'react';
import "../custom.css";
import logo from '../logo.svg';

function Home() {
  
    return (
        <div className="home">
        <div class="container">
            <br></br>
            <center>
            <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
            </center>
        </div>
        <div class="container">
            <center>
                <div className="contain1">
                    <div class="col-lg-5">
                        <h1 class="font-weight-dark"></h1>
                        <p>the </p>
                        <p>lorem ipsum</p>
                    </div>
                </div>
            </center>
        </div>
    </div>
);
}

export default Home;