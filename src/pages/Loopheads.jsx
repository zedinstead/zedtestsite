import React, { useState, useEffect } from "react";
import axios from "axios";
import { useEthers, useTokenBalance } from '@usedapp/core';


const LOOPHEADNFT = '0x1cACC96e5F01e2849E6036F25531A9A064D2FB5f'

const Loopheads = () => {
    const { account } = useEthers()
  const loopheadTokenBalance = useTokenBalance(LOOPHEADNFT, account)

    return (
        <div className="About">
            {account ? 
            <div>
            {loopheadTokenBalance >= 0.000000000000000001 ?
            <div class="container">
                <div className="contain2">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-1">
                        </div>
                        <div class="col-lg-4">
                            <br></br>
                            <center>
                                <h1 class="font-weight-light"><b>Loopheads</b></h1>
                            </center>
                                <div><br></br></div>
                                </div>
                            <div class="col-lg-1">
                        </div>
                    </div>
                </div>
            </div>
        
        : ''}
        </div>
        : ''}
    </div>
);
}


export default Loopheads;