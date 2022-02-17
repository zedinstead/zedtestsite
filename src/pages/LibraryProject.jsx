import React from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDown from "../components/DropDown.jsx"
import { Link } from 'react-router-dom';

import Library from "../images/Library.jpg";
import ApeHistorian from "../images/resources/ApeHistorian.jpg";
import SuperStonk from "../images/resources/SuperStonk.jpg";
import GMEdd from "../images/resources/GMEdd.jpg";
import GameStop from "../images/resources/GameStop.jpg";

const LibraryProject = () => {
    
    return (
        <div className="About">
        <div class="container">
            <div className="contain1">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                    <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={Library}
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <br></br>
                        <h1 class="font-weight-light"><b>📚 The SuperStonk Library of DD, Art Books, and Periodicals 📚</b></h1>
                        <div><br></br></div>
                        <p>The Library Project has been my attempt to visualize the weight of due diligence published by retail investors on the subject of GameStop and to encourage others to conduct peer-reviewed research in an effort to create a more fair and transparent market. I also created it because I like the stock and I want everyone else to know how much I like the stock too.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div className="contain2">
                <div class="row align-items-center my-5">
                    <div class="col-lg-6">
                        <div class="containText">
                        <p><br></br></p>
                        <h1 class="font-weight-bold"><b>Interactive PDF Library Hosted by FlipHTML5 </b></h1>
                        <div><br></br></div>
                        <p>
                            The SuperStonk Library of DD, Art Books, and Periodicals is available for everyone to use in an easily accessible format and brought to life in a truly interactive experience. Users can enjoy the library advertisement free and there are multiple ways to get there!</p>
                        <p></p>
                        <center><p>|  <a href="http://gme.fyi/">GME.FYI</a>  |  <a href="http://superstonklibrary.com">SuperStonkLibrary.com</a>   |  <a href="https://fliphtml5.com/bookcase/kosyg">fliphtml5.com/bookcase/kosyg</a>  |</p></center>
                        <p><br></br></p>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">
                    <div class="containText">
                    <p><br></br></p>
                        <h1 class="font-weight-bold"><b>PDF Library Hosted on IPFS & Linked in NFT's Metadata </b></h1>
                        <div><br></br></div>
                        <p>
                        To ensure the library's continued existence and availability, I've created an easy to use portal to view the library that is being hosted on IPFS and will be linked in the metadata of each NFT in the upcoming collection. Currently the Periodicals Collection is available for minting <Link to="/NFTCollections">here</Link>. Explore the portal below and check out the <a href="https://github.com/zedinstead/GME_PDF_LIBRARY_IPFS_PORTAL.git">github repository</a> to add it to your own site!</p>
                        <p><br></br></p>
                    </div>    
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
                <div class="row align-items-center">
                    
                        <p><br></br></p>
                        <h1 class="font-weight-bold"><b>IPFS PDF LIBRARY PORTAL</b></h1>
                        <div><br></br></div>
                        <center>
                        <DropDown />   
                        </center>
                    <div><br></br></div>
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
                <div class="row align-items-center">
                    
                        <p><br></br></p>
                        <center>
                        <h1 class="font-weight-bold"><b>More GME Resources</b></h1>
                        </center>
                        
                        <div class="row align-items-center my-5">
                    <div class="col-lg-3">
                        <center><a href="https://www.reddit.com/r/Superstonk/">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={SuperStonk}
                            alt=""
                        />
                          <p>SuperStonk Subreddit</p></a>

                        </center>
                        </div>
                    <div class="col-lg-3">
                        <center><a href="https://www.apehistorian.com/">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={ApeHistorian}
                            alt=""
                        />
                        <p>ApeHistorian.com</p></a>

                        </center>
                        </div>
                    <div class="col-lg-3">
                        <center><a href="https://gmedd.com/">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={GMEdd}
                            alt=""
                        />
                        <p>GMEdd.com</p></a>

                        </center>
                        </div>
                        <div class="col-lg-3">
                        <center><a href="https://investor.gamestop.com/">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={GameStop}
                            alt=""
                        />
                        <p>Investor Relations</p></a>

                        </center>
                        </div>
                    <div><br></br></div>
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

export default LibraryProject;