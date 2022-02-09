import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import "../custom.css";
import ConnectToWalletButton from './ConnectToWalletButton';
import { useEthers, useTokenBalance } from '@usedapp/core';

  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1
  const YETI = '0x3F0785095A660fEe131eEbcD5aa243e529C21786'

  //SECOND TOKEN COLLECTION
  //Mainnet NFT 2
const PUNK = '0x3E86e26915403ae0E1CFf7E7b23377b3a30104A0'

const Navbar = () => {
    const { account } = useEthers()

    const firstTokenBalance = useTokenBalance(YETI, account)

  
    const secondTokenBalance = useTokenBalance(PUNK, account)

  

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
                                <NavLink className="nav-link" to="/NFTCollections">nft collections</NavLink>
                            </li>
                
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">contact</NavLink>
                            </li>



                          
                    <li className="nav-item">

                    {firstTokenBalance >= 0.000000000000000001 ?

                    <NavLink className="nav-link" to="/secret">secret</NavLink>

                    : ''}
                    </li>


                            <li className="nav-item">
                                {account ? <button> {account && `${account.slice(0, 6)}...${account.slice(
                            account.length - 4,
                            account.length
                        )}`} </button>
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

export default Navbar;