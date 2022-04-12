import React, { useState } from 'react';
import "../custom.css";

import cat1 from '../images/cat1.png';
import cat2 from '../images/cat2.png';
import LoopAPI from '../components/LoopAPI';
import { useEthers, useTokenBalance } from '@usedapp/core'

const ZEDCATNFT = '0x37Ad6637A835DA66dE15495aD8C7AEd397B46E24'
const LOOPHEADNFT = '0x1cACC96e5F01e2849E6036F25531A9A064D2FB5f'

const Home = () => {
    const [over, setOver] = useState(false);
    const { account, deactivate } = useEthers()
    const firstTokenBalance = useTokenBalance(ZEDCATNFT, account)
    const loopheadTokenBalance = useTokenBalance(LOOPHEADNFT, account)

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
                        <p>zedinstead: the website </p>
                        <p>L1 zedcat owner:  </p>
                        {account ? <>{firstTokenBalance >= 0.000000000000000001 ? 'Yes' : 'No'}</> : 'Not logged in'}
                        <div><p></p></div>
                        <p>L2 zedcat owner:  </p>
                        <LoopAPI />
                        <div><p></p></div>
                        <p>L1 loophead owner:  </p>
                        {account ? <>{loopheadTokenBalance >= 0.000000000000000001 ? 'Yes' : 'No'}</> : 'Not logged in'}
                        <div><p></p></div>
                        <p>L2 loophead owner:  </p>
                        
                    </div>
                </div>
            </center>
        </div>
    </div>
);
}

export default Home;