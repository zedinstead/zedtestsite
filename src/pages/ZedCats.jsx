import React from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ZedCat2 from "../images/zedcats/ZedCat2.jpg";
import ZedCat3 from "../images/zedcats/ZedCat3.jpg";
import ZedCat4 from "../images/zedcats/ZedCat4.jpg";
import ZedCat5 from "../images/zedcats/ZedCatENS.jpg";
import { useEthers, useLookupAddress, useTokenBalance } from '@usedapp/core';
import { NavLink } from "react-router-dom";
import { getDefaultProvider } from "ethers";
import chat from "../images/chatrooms.jpg";


  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1
  //Opens Zed Cat Club Page
  const ZEDCATNFT = '0x37Ad6637A835DA66dE15495aD8C7AEd397B46E24'

  //THIRD TOKEN ENS
  //Mainnet ENS Domains
  //Opens the ENS Domain Club
const ENSNAMES = '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85'


const ZedCats = () => {
    const { account } = useEthers()
    const firstTokenBalance = useTokenBalance(ZEDCATNFT, account)
    const thirdTokenBalance = useTokenBalance(ENSNAMES, account)
    const ens = useLookupAddress()

    const mainnetProvider = getDefaultProvider();
    mainnetProvider.lookupAddress(account).then((result) => {
      document.getElementById("lookup").innerHTML = ` ${result}`;
    });

    const ENSNamer = <span id="lookup"/>;
    
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
                            Zed Cats have 5 different features: background, mountain, hill, headband, and special. Special features include snow on the summit, or sunshine with a cloud. There may even be a skier or a snowboarder in the distance on the side of the mountain, or a rocket in the corner.</p>
                        <p></p>
                        <center>
                            <p><strong>Items:</strong> 420 NFTs</p>
                            <p><a href="https://etherscan.io/address/0x37ad6637a835da66de15495ad8c7aed397b46e24"><strong>EtherScan:</strong> 🚀</a></p>
                            <p><a href="https://opensea.io/collection/zedcats"><strong>OpenSea:</strong> ⛵</a></p> 
                        
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
                {thirdTokenBalance >= 0.000000000000000001 ?
                <div class="row align-items-center my-6">
                    <div class="col-lg-6">
                        <div class="containText">
                        <p><br></br></p>
                        <center>
                        <h1 class="font-weight-bold"><b>ENS Power! </b></h1>
                        </center>
                        <div><br></br></div>
                        <p>Hey there <strong><> { ens ?? account }</></strong>! It looks like you are one of the web3 wizards who own an <strong>Ethereum Name Service (ENS)</strong> domain. To celebrate, here is a special Zed Cat just for you that has your ENS name embroidered into its headband!</p> 
                        <p>There are new sites being created every day that allow you to use your <strong>ENS</strong> in all sorts of cool ways and the evergrowing list of integrations and apps can be found here: <a href="https://ens.domains/" target="_blank">https://ens.domains/</a>.</p>
                        <p>To be clear, the current Zed Cats that are available for minting do not have ENS names on their headbands, however there is a possibility of it being included as a feature in Zed Cat 2: Electric Boogaloo so stay tuned.</p>
                        <p>For now, I'd like to use this space to showcase a site each week that is using <strong>ENS</strong> in some pretty neat or useful ways:</p>
                        <br></br>
                        <center>
                        <a href="https://chatrooms.eth.link/#/rooms">
                        <img
                        src={chat}
                        class="rounded-corners"
                        width="20%"
                        />
                        <p>chatrooms</p>
                        </a>
                        </center>
                        <br></br>
                       </div>
                       </div>
                   
                    <div class="col-lg-6">
                   
                   
                    
                    
                
                <div className = "head-text">
        <div className = "head-image">
          <img 
          src = {ZedCat5}  
          class = "img-fluid rounded mb-4 mb-lg-0"
          />
        </div>
          <div class='text-on-image'>
              
             <p><center> { ens ?? account }  </center></p>
            
          </div>
      </div>
                </div>
                <div><br></br></div>
                </div>
                
                
                : ''}
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