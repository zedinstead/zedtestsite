import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import LibraryProject from './pages/LibraryProject.jsx';
import NFTCollections from './pages/NFTCollections.jsx';
import Contact from './pages/Contact.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { DAppProvider, Mainnet, useEthers, useTokenBalance } from '@usedapp/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: { [Mainnet.chainId]: 'https://eth-mainnet.alchemyapi.io/v2/NHlccCpTr-XbYJyCNpVaRTDhkuFMlQeC',},
  networks: [Mainnet],
  }


  //FIRST TOKEN COLLECTION
  //Mainnet NFT 1
const YETI = '0x3F0785095A660fEe131eEbcD5aa243e529C21786'

  //SECOND TOKEN COLLECTION
  //Mainnet NFT 2
const PUNK = '0x3E86e26915403ae0E1CFf7E7b23377b3a30104A0'

function App() {
  const { account } = useEthers()
  const firstTokenBalance = useTokenBalance(YETI, account)
  const [firstTokenState, setFirstTokenState] = useState();

  const secondTokenBalance = useTokenBalance(PUNK, account)
  const [secondTokenState, setSecondTokenState] = useState();

  useEffect(() => {
    async function getInformation() {
      const { firstTokenState } = await getFirstTokenState();
      setFirstTokenState(firstTokenState);
    }
    getInformation()
  }, [])

  function getFirstTokenState() {
    if (firstTokenBalance >= 1) {
      setFirstTokenState(firstTokenState[0]);
    } else {
      setFirstTokenState("");
    }
  }

  return (
    <DAppProvider config={config}>
      <Router>
        <Navbar />
         <Switch>
            <Route path="/libraryproject">
              <LibraryProject />
            </Route>
            <Route path="/NFTCollections">
              <NFTCollections />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    <Footer />
    </DAppProvider>
  );
}

export default App;
