import React from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConnectMintButton from "../components/ConnectMintButton";
import ConnectMintButton2 from "../components/ConnectMintButton2";
import { useEthers } from '@usedapp/core';
import Collections from "../images/Collections.png";
import Periodicals from "../images/Periodicals.jpg";
import DueDiligence from "../images/DueDiligence.jpg";
import ZedCat1 from "../images/zedcats/ZedCat1.jpg";


const NFTCollections = () => {
    const { account } = useEthers();
    const style1 = {
        fontweight:'bold'
    };
    
    return (
        <div className="NFTCollections">
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
                            <h1 class="font-weight-bold"><b>🎴 NFT Collections 🎴</b></h1>
                            <div><br></br></div>
                            <p>
                                The Library Project is being broken into two sets of NFTs: the Due Diligence Collection and the Periodicals Collection. The original PDFs are stored in metadata and hosted on IPFS alongside the artwork. Only the Periodicals Collection is available for minting. The Due Diligence Collection will be available once layer 2 minting makes it possible for all of the authors to be gifted a copy of their work. 
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
                            The SuperStonk Periodicals Collection is now available for minting. Owners will be eligible for future airdrops and currently have access to the 'Insteadspiration' page, which includes an inside look at the artwork. The spage also includes an exhibition space currently showcasing a never-before-seen meme by u/ButtFarm69.</p>
                            <p><strong>Cost:</strong> 0.1 eth &nbsp; &nbsp; &nbsp; &nbsp; <strong>Items:</strong> 25 NFTs</p>
                            <p><strong>EtherScan:</strong> 🚀</p>
                            <p><strong>OpenSea:</strong> ⛵</p> 
                       
                        <p>
                  
                        {account ? <ConnectMintButton>
                MINT
            </ConnectMintButton> : ''}
                      
                        </p>
                        </center>
                    </div>
                    <div class="col-lg-6">
                            <img
                                class="img-fluid rounded mb-4 mb-lg-0"
                                src={Periodicals}
                                alt=""
                            />
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
                            <p><strong>Cost:</strong> 0.01 eth &nbsp; &nbsp; &nbsp; &nbsp; <strong>Items:</strong> 420 NFTs</p>
                            <p><strong><a href="https://etherscan.io/address/0x37ad6637a835da66de15495ad8c7aed397b46e24">EtherScan:</a></strong> 🚀</p>
                            <p><strong><a href="https://opensea.io/collection/zedcats">OpenSea:</a></strong> ⛵</p> 
                            <p><br></br></p>
                        <p>
                        {account ? <ConnectMintButton2>
                MINT
            </ConnectMintButton2> : ''}
            
            </p>
            </center>
            </div>
            <div class="col-lg-6">
                            <img
                                class="img-fluid rounded mb-4 mb-lg-0"
                                src={ZedCat1}
                                alt=""
                            />
                        </div>
            </div>
            </div>
            </div>
            <div class="container">
                <div className="contain1">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-5">
                            <p></p>
                           
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
                            The SuperStonk Due Diligence Collection is not yet available for minting. It may possibly be minted as an ERC-1155 but that has yet to be determined. All authors will be gifted a copy of their work. This collection is on hold until GameStop's marketplace becomes available.</p>
                            <p><strong>Cost:</strong> cheap &nbsp; &nbsp; &nbsp; &nbsp; <strong>Items:</strong> undecided</p>
                            <p><strong>EtherScan:</strong> Not Available</p>
                            <p><strong>OpenSea:</strong> Not Available</p> 
                        <p><br></br></p>
                        <p><br></br></p>

                        </center>
                    </div>
                    
                    <div class="col-lg-6">
                            <img
                                class="img-fluid rounded mb-4 mb-lg-0"
                                src={DueDiligence}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div className="contain1">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-5">
                            <p><br></br></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default NFTCollections;