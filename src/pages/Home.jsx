import React, { useState } from 'react';
import "../custom.css";

import cat1 from '../images/cat1.png';
import cat2 from '../images/cat2.png';

import { useEthers, useEtherBalance, useTokenBalance } from '@usedapp/core';


const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f'

const Home = () => {
    const { account } = useEthers()
    const etherBalance = useEtherBalance(account)
    const tokenBalance = useTokenBalance(DAI, account)
    const [over, setOver] = useState(false);

    return (
        <div className="home">
            <br></br>
            <center>
                <div>
                    <img
                        src={over ? cat2 : cat1}
                        onMouseOver={() => setOver(true)}
                        onMouseOut={() => setOver(false)}/>
                </div>  
            </center>

        <div class="container">
            <center>
                <div className="contain1">
                    <div class="col-lg-5">
                    <h1 class="font-weight-dark"></h1>
                        <p>the power of art </p>
                        <p>can change the world</p>
                    </div>
                </div>
            </center>
        </div>
    </div>
);
}

export default Home;