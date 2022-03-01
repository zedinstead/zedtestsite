import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import "../custom.css";
import ConnectToWalletButton from './ConnectToWalletButton';
import { useEthers, useTokenBalance } from '@usedapp/core';
import styled from 'styled-components';
import { getDefaultProvider } from "ethers";

  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1
  //Opens Zed Cat Club Page
  const ZEDCATNFT = '0x37Ad6637A835DA66dE15495aD8C7AEd397B46E24'

  //SECOND TOKEN COLLECTION
  //Mainnet NFT 2
  //Opens Inspiration Page
const PUNK = '0x0d7f6D2A0c3bF990719ecA41C9bE130f8bAAb7AF'

  //THIRD TOKEN ENS
  //Mainnet ENS Domains
  //Opens the ENS Domain Club
const ENSNAMES = '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85'

const Navbar = () => {
    const { account, deactivate } = useEthers()

    const firstTokenBalance = useTokenBalance(ZEDCATNFT, account)
    const secondTokenBalance = useTokenBalance(PUNK, account)
    const thirdTokenBalance = useTokenBalance(ENSNAMES, account)
    
    function handleDeactivateAccount() {
        deactivate()
    }
  
    const mainnetProvider = getDefaultProvider();
    mainnetProvider.lookupAddress(account).then((result) => {
      document.getElementById("lookup").innerText = ` ${result}`;
    });

    const ENSNamer = <span id="lookup"/>;


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
                    {thirdTokenBalance >= 0.000000000000000001 ?
                    <NavLink className="nav-link" to="/zedcatclub">zed cat club</NavLink>
                    : ''}
                    </li>        

                    <li className="nav-item">
                    {secondTokenBalance >= 0.000000000000000001 || firstTokenBalance >= 0.000000000000000001 ?
                    <NavLink className="nav-link" to="/inspiration">inspiration gallery</NavLink>
                    : ''}
                    </li>

                            <li className="nav-item">
                                {account ? 
                                    <ConnectButton onClick={() => handleDeactivateAccount()}> {thirdTokenBalance >= 0.000000000000000001 ? <> {ENSNamer} </> : <>
                                    {account && `${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`}</>} </ConnectButton>
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