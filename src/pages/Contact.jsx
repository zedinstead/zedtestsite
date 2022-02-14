import React from 'react';
import "./CustomContact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Phones from "../images/Phones.png";

const Contact = () => {

    
    return (
        <div className="About">
            <div class="container">
                <div className="contain2">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-1">
                        </div>
                        <div class="col-lg-4">
                            <br></br>
                            
                            <center>
                                <h1 class="font-weight-light"><b>📇 Contact 📇</b></h1>
                            </center>
                                <div><br></br></div>
                                <p>The best way to reach zedinstead is by carrier pigeon or by Western Union telegram. The following ways are also acceptable:</p>
                            
                            <div class="contain6">
                            <center>
                            <div class="row align-items-center my-5">
                            <div class="col-lg-5">
                            <p><a href = "https://twitter.com/zedinstead1" target="_blank">🐦 Twitter</a></p>
                            <p><a href = "https://www.reddit.com/user/zedinstead/" target="_blank">🤖 Reddit</a></p>
                            <p><a href = "mailto: zedinstead1@outlook.com" target="_blank">📧 Email 1</a></p>
                            </div>
                            <div class="col-lg-5">
                            <p><a href = "mailto: zedinstead1@gmail.com" target="_blank">📬 Email 2</a></p>
                            <p><a href = "https://discordapp.com/users/zedinstead#0687" target="_blank">⌨️ Discord</a></p>
                            <p><a href = "https://github.com/zedinstead" target="_blank">💾 Github </a></p>
                            </div>
                            </div>
                            </center>
                            </div>
                            
                            </div>
                            <div class="col-lg-1">
                        </div>
                     <div class="col-lg-5">
                     <div class="contain1">
                         <img src={Phones} class="img-fluid rounded mb-4 mb-lg-0"/>
                    
                    </div>
                    <div class="col-lg-1">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}


export default Contact;