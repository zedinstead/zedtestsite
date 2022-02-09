import React from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConnectMintButton from "../components/ConnectMintButton";
import ConnectMintButton2 from "../components/ConnectMintButton2";
import { useEthers } from '@usedapp/core';



const NFTCollections = () => {
    const { account } = useEthers();
    
    return (
        <div className="About">
            <div class="container">
                <div className="contain1">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <img
                                class="img-fluid rounded mb-4 mb-lg-0"
                                src="/images/Collections.png"
                                alt=""
                            />
                        </div>
                        <div class="col-lg-5">
                            <h1 class="font-weight-bold"><b>title</b></h1>
                            <div><br></br></div>
                            <p>
                                Lorem ipsum!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div className="contain2">
                    <div class="row align-items-center my-5">

                        <p><br></br></p>
                        <h1 class="font-weight-bold"><b>Mint Button 1</b></h1>
                        <div><br></br></div>
                        <p>
                            Lorem ipsum.</p>
                        <p><br></br></p>
                        <p>
                  
                        {account ? <ConnectMintButton>
                MINT
            </ConnectMintButton> : ''}
                      
                        </p>

                    </div>
                </div>
            </div>
            <div class="container">
                <div className="contain1">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-5">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div className="contain2">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-5">
                            <p><br></br></p>
                            <h1 class="font-weight-bold"><b>Mint Button 2</b></h1>
                            <div><br></br></div>
                            <p>
                                Lorem ipsum yo.</p>
                                <p><br></br></p>
                        <p>
                        {account ? <ConnectMintButton2>
                MINT
            </ConnectMintButton2> : ''}
            
            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div className="contain1">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-5">
                            <p><br></br></p>
                            <p><br></br></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default NFTCollections;