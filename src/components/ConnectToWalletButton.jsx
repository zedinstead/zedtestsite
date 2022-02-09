import { useEthers } from '@usedapp/core';
import "../custom.css";

function ConnectToWalletButton() {
    const { activateBrowserWallet, account } = useEthers()

return (
    <button onClick={() => activateBrowserWallet()}>Connect</button>
);
}

export default ConnectToWalletButton;