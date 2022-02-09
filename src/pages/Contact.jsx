import React from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEthers, useTokenBalance } from '@usedapp/core'; 
import { formatEther, formatUnits } from '@ethersproject/units'

  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1

const YETI = '0x3F0785095A660fEe131eEbcD5aa243e529C21786'

const Contact = () => {
    const { account } = useEthers()
    const firstTokenBalance = useTokenBalance(YETI, account)
    
    return (
        <div className="About">
        <div class="container">
            <div className="contain1">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        
                    </div>
                    <div class="col-lg-5">
                        <br></br>
                        
                        <h1 class="font-weight-light"><b>Title</b></h1>
                        <div><br></br></div>
                        <p>Lorem Ipsum</p>
                        <p>{firstTokenBalance && <p>Balance: {formatUnits(firstTokenBalance)}</p>}</p>

                    
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}



export default Contact;