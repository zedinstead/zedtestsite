import React from 'react';
import "../custom.css";
import logo from '../logo.svg';
import { useEthers, useEtherBalance, useTokenBalance } from '@usedapp/core';
import { formatEther, formatUnits } from '@ethersproject/units'

const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f'

const Home = () => {
    const { account } = useEthers()
    const etherBalance = useEtherBalance(account)
    const tokenBalance = useTokenBalance(DAI, account)

    return (
        <div className="home">
        <div class="container">
            <br></br>
            <center>
            <img src={logo} className="App-logo" alt="logo" />
            
            </center>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            </a>
          Learn React
     
        </div>
        <div class="container">
            <center>
                <div className="contain1">
                    <div class="col-lg-5">
                        
                        <p>the </p>
                        <p>lorem ipsum</p>
                        <p>{etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}</p>
                        <p>{tokenBalance && <p>Balance: {formatUnits(tokenBalance, 18)}</p>}</p>
                        
                    </div>
                </div>
            </center>
        </div>
    </div>
);
}

export default Home;