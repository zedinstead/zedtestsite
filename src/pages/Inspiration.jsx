import React, { useState } from 'react';
import "../custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEthers, useTokenBalance } from '@usedapp/core';

import Meme1 from "../images/memes/Meme1.png";
import Meme2 from "../images/memes/Meme2.png";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1
const ZEDCATNFT = '0x37Ad6637A835DA66dE15495aD8C7AEd397B46E24'

  //SECOND TOKEN COLLECTION
  //Mainnet NFT 2
const PUNK = '0x0d7f6D2A0c3bF990719ecA41C9bE130f8bAAb7AF'

const Inspiration = () => {
    const { account } = useEthers()
    const [over, setOver] = useState(false);

    const firstTokenBalance = useTokenBalance(ZEDCATNFT, account)

  
    const secondTokenBalance = useTokenBalance(PUNK, account)

    const images = [
        {
          original: "https://zedinstead.com/static/media/1.aad2e2096f311df4e4d0.jpg",
          originalClass: "app-image-gallery"
        },
        {
          original: "https://zedinstead.com/static/media/2.e1c5731dae8aa153067f.jpg",
          originalClass: "app-image-gallery"
        },
        {
          original: "https://zedinstead.com/static/media/3.dbe8651b023a210d5ead.jpg",
          originalClass: "app-image-gallery"
        },
        {
            original: "https://zedinstead.com/static/media/4.15c25600ec4694955335.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/5.6adfa4761b991ffb91d8.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/6.cb1af0462330424fed01.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/7.49d28dd8b762ca4a8d0f.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/8.13908e53a12e28c31028.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/9.070749c70e6658ed0508.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/10.212aba9e538d864d5704.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/11.2e21199cfa645777ae31.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/12.730dbf1a7cd5bb8e0b67.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/13.a090813c18aa453bf201.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/14.0e8e6349dad7ac7c154c.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/15.1a300fadebf325a66280.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/16.15e8d41a6874fd34b124.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/17.ad0ae439de9f122ba2de.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/18.3bf1a85e4b79d5dcf9b9.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/19.98cbcea5c69b6373e548.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/20.9627700ed91e540a309f.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/21.c90f1509d2b6e91235b6.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/22.4193527cc61567db5e8c.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/23.e90669771a98607099f9.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/24.95165f42bc70f3a73498.jpg",
            originalClass: "app-image-gallery"
          },
          {
            original: "https://zedinstead.com/static/media/25.cb6737ea3261b990f786.jpg",
            originalClass: "app-image-gallery"
          },
      ];
    
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
                        <div></div>
                        <ImageGallery 
                        items={images} 
                        showBullets={true}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showNav={false}
                        />
                        <div></div>
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