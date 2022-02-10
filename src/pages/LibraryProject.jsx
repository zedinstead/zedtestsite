import React from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import library from "../images/Library.png";

const LibraryProject = () => {
    
    return (
        <div className="About">
        <div class="container">
            <div className="contain1">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                    <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={library}
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <br></br>
                        <h1 class="font-weight-light"><b>The SuperStonk Library of DD, Art Books, and Periodicals</b></h1>
                        <div><br></br></div>
                        <p>The Library Project was my attempt to visualize the weight of due diligence published by retail investors on the subject of GameStop and to encourage others to conduct peer-reviewed research in an effort to create a more fair and transparent market. I also created it because I like the stock and I want everyone else to know how much I like the stock too.</p>

                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div className="contain2">
                <div class="row align-items-center my-5">
                    <div class="col-lg-5">
                        <p><br></br></p>
                        <h1 class="font-weight-bold"><b>Interactive PDF Library Hosted by FlipHTML5</b></h1>
                        <div><br></br></div>
                        <p>
                            The SuperStonk Library of DD, Art Books, and Periodicals is available for everyone to use in an easily accessible format and brought to life in a truly interactive experience. Users can enjoy the page advertisement free and there are multiple ways to get there!</p>
                        <p><br></br></p>
                        <center><p><a href="http://gme.fyi/">GME.FYI</a>  |  <a href="http://superstonklibrary.com">SuperStonkLibrary.com</a>   |  <a href="https://fliphtml5.com/bookcase/kosyg">fliphtml5.com/bookcase/kosyg</a></p></center>
                        <p><br></br></p>
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
                <div class="row align-items-center my-5">
                    <div class="col-lg-5">
                        <p><br></br></p>
                        <h1 class="font-weight-bold"><b>PDF Library Hosted on IPFS linked in NFT Metadata</b></h1>
                        <div><br></br></div>
                        <p>
                            The library is being hosted on IPFS and is linked in the metadata of each NFT in the upcoming collection. To ensure the library's continued existence and availability, I'm taking it to the blockchain. A new NFT project is coming soon. All proceeds will go towards direct registering shares of GME where they will remain in the infinity pool and authors will be gifted a copy of their work. Stay tuned for more details.Enjoy the new viewer below!</p>
                        <p><br></br></p>

                        <p><br></br></p>
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