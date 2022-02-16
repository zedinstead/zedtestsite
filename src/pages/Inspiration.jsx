import React, { useState } from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEthers, useTokenBalance } from '@usedapp/core';
import Inspiration1 from "../images/inspiration/1.png";
import Inspiration2 from "../images/inspiration/2.png";
import Inspiration3 from "../images/inspiration/3.png";
import Inspiration4 from "../images/inspiration/4.png";
import Inspiration5 from "../images/inspiration/5.png";
import Inspiration6 from "../images/inspiration/6.png";
import Inspiration7 from "../images/inspiration/7.png";
import Inspiration8 from "../images/inspiration/8.png";
import Inspiration9 from "../images/inspiration/9.png";
import Inspiration10 from "../images/inspiration/10.png";
import Inspiration11 from "../images/inspiration/11.png";
import Inspiration12 from "../images/inspiration/12.png";
import Inspiration13 from "../images/inspiration/13.png";
import Inspiration14 from "../images/inspiration/14.png";
import Inspiration15 from "../images/inspiration/15.png";
import Inspiration16 from "../images/inspiration/16.png";
import Inspiration17 from "../images/inspiration/17.png";
import Inspiration18 from "../images/inspiration/18.png";
import Inspiration19 from "../images/inspiration/19.png";
import Inspiration20 from "../images/inspiration/20.png";
import Inspiration21 from "../images/inspiration/21.png";
import Inspiration22 from "../images/inspiration/22.png";
import Inspiration23 from "../images/inspiration/23.png";
import Inspiration24 from "../images/inspiration/24.png";
import Inspiration25 from "../images/inspiration/25.png";


import Meme1 from "../images/memes/Meme1.png";
import Meme2 from "../images/memes/Meme2.png";



  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1
const ZEDCATNFT = '0x37Ad6637A835DA66dE15495aD8C7AEd397B46E24'

  //SECOND TOKEN COLLECTION
  //Mainnet NFT 2
const PUNK = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'

const Inspiration = () => {
    const { account } = useEthers()
    const [over, setOver] = useState(false);

    const firstTokenBalance = useTokenBalance(ZEDCATNFT, account)

  
    const secondTokenBalance = useTokenBalance(PUNK, account)
    
    return (
        <div className="About">
            {account ? 
            <div>
             {firstTokenBalance >= 0.000000000000000001 || secondTokenBalance >= 0.000000000000000001 ?
        
         
        <div className="home">
            <div class="container">
                <div className="contain1">
                    <div class="row align-items-center my-12">
                        <div class="col-lg-12">
                        <div><br></br></div>
                        <center>
                            <h1 class="font-weight-light"><b>💡 Inspiration Gallery 💡</b></h1>
                                <div><br></br></div>
                                <p>Welcome to the inspiration gallery! Here you can find the side-by-side inspiration behind the work of zedinstead, as well as a place to exhibit never-before-posted art like the piece currently on loan from ButtFarm69. The space will continue to grow with the inclusion of the due diligennce inspiration section and new art will circulate to be on display.</p>
                                </center>
                        </div>
                    </div>
                </div>    
                <div className="contain1">
                    <div class="row align-items-center my-5">
                    <center>
                        <img
                            src={over ? Meme1 : Meme2}
                            class="img-fluid rounded mb-4 mb-lg-0"
                            onMouseOver={() => setOver(true)}
                            onMouseOut={() => setOver(false)}>
                        </img>
                    </center>
                    </div>
                </div>
                </div>
                <div class="container">
                <div className="contain1">
                    <div class="row align-items-center my-5">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={Inspiration1}
                            alt=""
                        />
                    </div>
                    </div>
                    <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration2}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration3}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration4}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration5}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration6}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration7}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration8}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration9}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration10}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration11}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration12}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration13}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration14}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration15}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration16}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration17}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration18}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration19}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration20}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration21}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration22}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration23}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration24}
                        alt=""
                    />
               
                
            </div>
            <div class="row align-items-center my-5">
                
                <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src={Inspiration25}
                        alt=""
                    />
               
                
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
    </div>
         : ''}
         </div>
         : ''}
        </div>
    );
}

export default Inspiration;