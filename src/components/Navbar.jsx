import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import "../custom.css";
import ConnectToWalletButton from './ConnectToWalletButton';
import { useEthers } from '@usedapp/core';



const Navbar = () => {
    const { account } = useEthers()

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