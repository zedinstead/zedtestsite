import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import "../custom.css";
import ConnectToWalletButton from './ConnectToWalletButton';
import { useEthers, useTokenBalance } from '@usedapp/core';
import styled from 'styled-components';

  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1
  //Opens Zed Cat Club Page
  const YETI = '0x3F0785095A660fEe131eEbcD5aa243e529C21786'

  //SECOND TOKEN COLLECTION
  //Mainnet NFT 2
  //Opens Inspiration Page
const PUNK = '0x3E86e26915403ae0E1CFf7E7b23377b3a30104A0'

const Navbar = () => {
    const { account, deactivate } = useEthers()

    const firstTokenBalance = useTokenBalance(YETI, account)

  
    const secondTokenBalance = useTokenBalance(PUNK, account)
    
    function handleDeactivateAccount() {
        deactivate()
    }
  

    return (
        <div>
            <div className="navigation">
            <nav className="navbar navbar-custom navbar-expand-md navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        zedinstead
                        <span className="sr-only"></span>
                    </NavLink>

                    <div>
                        <ul className="navbar-nav ml-auto">

                           
                        
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/libraryproject">library project</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/zedcats">zed cats</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/NFTCollections">nft collections</NavLink>
                            </li>
                
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">contact</NavLink>
                            </li>



                          
                    <li className="nav-item">

                    {firstTokenBalance >= 0.000000000000000001 ?

                    <NavLink className="nav-link" to="/zedcatclub">zed cat club</NavLink>

                    : ''}
                    </li>

                    <li className="nav-item">

                    {secondTokenBalance >= 0.000000000000000001 ?

                    <NavLink className="nav-link" to="/inspiration">inspiration gallery</NavLink>

                    : ''}
                    </li>


                            <li className="nav-item">
                               
                                {account ? <ConnectButton onClick={() => handleDeactivateAccount()}> {account && `${account.slice(0, 6)}...${account.slice(
                            account.length - 4,
                            account.length
                        )}`} </ConnectButton>
                        : <ConnectToWalletButton />}
                            </li>
                        </ul>
                    </div>
               </div>
            </nav>
            </div>  
        </div>
    )
}

const ConnectButton = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  border-radius: 6px;
  border: none;
  margin-top: 2px;

  background: #282c34;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  color: white;
  font-size: smaller;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:disabled {
      color: #282c34;

  }

`;

export default Navbar;