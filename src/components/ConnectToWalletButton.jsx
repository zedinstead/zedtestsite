import { useEthers } from '@usedapp/core';
import "../custom.css";
import styled from 'styled-components'

function ConnectToWalletButton() {
    const { activateBrowserWallet, account } = useEthers()
return (
    <div>
        <ConnectButton onClick={() => activateBrowserWallet()}>Connect</ConnectButton>
    </div>
);
}

const ConnectButton = styled.button`
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

export default ConnectToWalletButton;