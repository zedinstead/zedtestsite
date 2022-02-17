import React from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEthers, useTokenBalance } from '@usedapp/core';
import ZedCat5 from "../images/zedcats/ZedCat5.jpg";
import ZedCat6 from "../images/zedcats/ZedCat6.jpg";

  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1
const ZEDCATNFT = '0x37Ad6637A835DA66dE15495aD8C7AEd397B46E24'

const ZedCatClub = () => {
    const { account } = useEthers()
    const firstTokenBalance = useTokenBalance(ZEDCATNFT, account)
    
    return (
        <div className="About">
            {account ? 
            <div>
            {firstTokenBalance >= 0.000000000000000001 ?
                <div class="container">
                    <div className="contain1">
                        <div class="row align-items-center my-5">
                            <img src={ZedCat5} />
                        </div>
                    </div>
                    <div class="container">
                        <div className="contain2">
                            <div className="contain9">
                            <div class="row align-items-center my-5">
                                <div class="containText">
                                    <p><br></br></p>
                                    <center>
                                        <h1 class="font-weight-bold"><b>😸 THE ZED CAT CLUB 😸</b></h1>
                                    </center>
                                    <div><br></br></div>
                                        <p>Dear Zed Cat Club Member,</p> 
                                            <p>If you're reading this, you've made it! And if you've come this far, maybe you're willing to come a little further. You remember the name of the town, don't you? I could use a good cat to help me get my project on wheels. I'll keep an eye out for you and the chessboard ready. Remember, hope is a good thing, maybe the best of things and no good thing ever dies. I will be hoping that this message finds you, and finds you well.</p>
                                        <p>Your friend,</p>
                                        <p>&nbsp; -zedinstead</p>
                                        <center><p>|  <a href="https://discord.gg/J3cb2286Rg">Discord</a>  |</p></center>
                                    <div class="row align-items-center my-5">
                            <img src={ZedCat6} />
                        </div>
                                </div>
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
                </div>
            : ''}
            </div>
            : ''}
        </div>
    );
}

export default ZedCatClub;