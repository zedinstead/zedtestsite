import React from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ZedCat2 from "../images/zedcats/ZedCat2.png";
import ZedCat3 from "../images/zedcats/ZedCat3.png";
import ZedCat4 from "../images/zedcats/ZedCat4.png";
import { useEthers, useTokenBalance } from '@usedapp/core';
import { NavLink } from "react-router-dom";


  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1
  //Opens Zed Cat Club Page
  const ZEDCATNFT = '0x3F0785095A660fEe131eEbcD5aa243e529C21786'

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
                        <p>I am not a cat, but to honor the original CryptoKitties, the first NFT project by zedinstead are Zed Cats, which act as a perpetual access token for all gated content across current and future projects. Each Zed Cat is randomly generated from five different features and created through a standard ERC-721 contract backed by IPFS. Most importanly, owners have access to the Zed Cat Club. Come explore the wide world of web3!</p>
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
                        <h1 class="font-weight-bold"><b>Cat Power! Meow</b></h1>
                        <div><br></br></div>
                        <p>
                            I think cats are pretty neat. You can mint a Zed Cat <NavLink to="/nftcollections">here</NavLink>.</p>
                        <p></p>
                        <center><p>|  <a href="http://gme.fyi/">GME.FYI</a>  |  <a href="http://superstonklibrary.com">SuperStonkLibrary.com</a>   |  <a href="https://fliphtml5.com/bookcase/kosyg">fliphtml5.com/bookcase/kosyg</a>  |</p></center>
                        <p><br></br></p>
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