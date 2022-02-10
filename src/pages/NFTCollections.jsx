import React from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConnectMintButton from "../components/ConnectMintButton";
import ConnectMintButton2 from "../components/ConnectMintButton2";
import { useEthers } from '@usedapp/core';
import Collections from "../images/Collections.png";


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
                                src={Collections}
                                alt=""
                            />
                        </div>
                        <div class="col-lg-5">
                            <h1 class="font-weight-bold"><b>NFT Collections</b></h1>
                            <div><br></br></div>
                            <p>
                                The Library Project is being broken into two sets of NFTs: the Due Diligence Collection and the Periodicals Collection. The original PDFs are stored in metadata and hosted on IPFS alongside the artwork. Only the Periodicals Collection is available for minting. The Due Diligence Collection will be available once layer 2 minting makes it possible for all of the authors to be gifted a copy of their work, while the others will be made available to the public.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div className="contain2">
                    <div class="row align-items-center my-6">
                    <div class="col-lg-6">
                    <center>
                        <p><br></br></p>
                        <h1 class="font-weight-bold"><b>SuperStonk NFTs: The Periodicals Collection</b></h1>
                        <div><br></br></div>
                        
                        <p>
                            The SuperStonk Periodicals Collection is now available for minting. Owners have access to the 'Inspiration Zed' page and will be eligible for future airdrops. </p>
                            <p>Cost: .069 eth</p>
                            <p>EtherScan: 🚀</p>
                            <p>OpenSea: ⛵</p> 
                        <p><br></br></p>
                        <p>
                  
                        {account ? <ConnectMintButton>
                MINT
            </ConnectMintButton> : ''}
                      
                        </p>
                        </center>
                    </div>
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
                <div class="row align-items-center my-6">
                    <div class="col-lg-6">
                    <center>
                        <p><br></br></p>
                        <h1 class="font-weight-bold"><b>Zed Cat Collection</b></h1>
                        <div><br></br></div>
                        
                        <p>
                            The Zed Cat Collection is now available for minting. This collection acts as an access token for all ongoing and future zedinstead projects and are represented by a randomly generated cat. Owners have exclusive access to the Zed Cat Club, alongside all other zedinstead gated pages.</p>
                            <p>Cost: .01 eth</p>
                            <p>EtherScan: 🚀</p>
                            <p>OpenSea: ⛵</p> 
                        <p><br></br></p>
                        <p>
                        {account ? <ConnectMintButton2>
                MINT
            </ConnectMintButton2> : ''}
            
            </p>
            </center>
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
            <div class="container">
                <div className="contain2">
                    <div class="row align-items-center my-6">
                    <div class="col-lg-6">
                    <center>
                        <p><br></br></p>
                        <h1 class="font-weight-bold"><b>SuperStonk NFTs: The Due Diligence Collection</b></h1>
                        <div><br></br></div>
                        
                        <p>
                            The SuperStonk Due Diligence Collection is not yet available for minting. </p>
                            <p>Cost: .01 eth</p>
                            <p>EtherScan: Not Available</p>
                            <p>OpenSea: Not Available</p> 
                        <p><br></br></p>
                        <p>
                  

                        </p>
                        </center>
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