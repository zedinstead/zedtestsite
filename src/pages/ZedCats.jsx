import React from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ZedCat2 from "../images/zedcats/ZedCat2.jpg";
import ZedCat3 from "../images/zedcats/ZedCat3.jpg";
import ZedCat4 from "../images/zedcats/ZedCat4.jpg";
import { useEthers, useTokenBalance } from '@usedapp/core';
import { NavLink } from "react-router-dom";


  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1
  //Opens Zed Cat Club Page
  const ZEDCATNFT = '0x37Ad6637A835DA66dE15495aD8C7AEd397B46E24'

const ZedCats = () => {
    const { account } = useEthers()
    const firstTokenBalance = useTokenBalance(ZEDCATNFT, account)
    
    return (
        <div className="About">
        <div class="container">
            <div className="contain1">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                    <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={ZedCat2}
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <br></br>
                        <h1 class="font-weight-light"><b>🐈 Zed Cat Project 🐈</b></h1>
                        <div><br></br></div>
                        <p>I am not a cat but I think they are pretty neat. To honor the original CryptoKitties, the first zedinstead NFT project is a collection of 420 Zed Cats, which act as a perpetual access token for all gated content across current and future projects. Each Zed Cat is randomly generated from five different features and created through a standard ERC-721 contract backed by IPFS. Most importanly, owners have access to the Zed Cat Club. Come explore the wide world of web3!</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div className="contain2">
                <div class="row align-items-center my-6">
                    <div class="col-lg-6">
                        <div class="containText">
                        <p><br></br></p>
                        <center>
                        <h1 class="font-weight-bold"><b>Cat Power! </b></h1>
                        </center>
                        <div><br></br></div>
                        <p>
                            Zed Cats have 5 different features: background, mountain, hill, bandana, and special. Special features include snow on the summit, or sunshine with a cloud. There may even be a skier or a snowboarder in the distance on the side of the mountain, or a rocket in the corner. Get yours today!</p>
                        <p></p>
                        <center>
                            <p><strong>Items:</strong> 420 NFTs</p>
                            <p><strong>EtherScan:</strong> 🚀</p>
                            <p><strong>OpenSea:</strong> ⛵</p> 
                        
                        <p>You can mint a Zed Cat on the <NavLink to="/nftcollections">NFT Collections page</NavLink>.</p>
                        </center>
                       </div>
                       </div>
                   
                    <div class="col-lg-6">
                   
                    <p><br></br></p>
                    <div>
                    {firstTokenBalance >= 0.000000000000000001 ?
                        <NavLink to="/zedcatclub">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={ZedCat4}
                            alt=""
                            
                
                        />
                        </NavLink>                           
                         :
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={ZedCat3}
                            alt=""
                        />
                    }
                    </div>
                       </div>
                       <p><br></br></p>
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
        </div>
        
    );
}



export default ZedCats;