import './App.css';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import ZedCatClub from './pages/ZedCatClub.jsx';
import Loopheads from './pages/Loopheads.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { DAppProvider, Mainnet } from '@usedapp/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const config: config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: { [Mainnet.chainId]: 'https://eth-mainnet.alchemyapi.io/v2/NHlccCpTr-XbYJyCNpVaRTDhkuFMlQeC',},
  networks: [Mainnet],
  }

function App() {

  return (
    <DAppProvider config={{config}}>
      <Router>
        <Navbar />
         <Switch>
            
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/loopheads">
              <Loopheads />
            </Route>
           
            <Route path="/zedcatclub">
              <ZedCatClub />
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
