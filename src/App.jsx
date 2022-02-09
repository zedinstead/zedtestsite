import './App.css';
import Home from './pages/Home.jsx';
import LibraryProject from './pages/LibraryProject.jsx';
import NFTCollections from './pages/NFTCollections.jsx';
import Contact from './pages/Contact.jsx';
import Secret from './pages/Secret.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { DAppProvider, Mainnet } from '@usedapp/core';

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



function App() {


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
            <Route path="/secret">
              <Secret />
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
