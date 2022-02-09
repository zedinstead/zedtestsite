import React from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEthers, useTokenBalance } from '@usedapp/core';

  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1
  const YETI = '0x3F0785095A660fEe131eEbcD5aa243e529C21786'

  //SECOND TOKEN COLLECTION
  //Mainnet NFT 2
const PUNK = '0x3E86e26915403ae0E1CFf7E7b23377b3a30104A0'

const Secret = () => {
    const { account } = useEthers()

    const firstTokenBalance = useTokenBalance(YETI, account)

  
    const secondTokenBalance = useTokenBalance(PUNK, account)
    
    return (
        <div className="About">
        <div class="container">
            <div className="contain1">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        
                    </div>
                    <div class="col-lg-5">
                        <br></br>
                        
                        <h1 class="font-weight-light"><b>Top Secret</b></h1>
                        <div><br></br></div>
                        <p>Eyes only</p>
                    
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Secret;