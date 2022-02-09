import React, { useReducer } from 'react';
import ConnectionContext from './context';
import { ConnectionReducer } from './reducers';
import { EXIST_CONNECTION } from './types';

const ConnectionState = props => {
    const initialState = {
        account: undefined,
        tokenAccount: undefined
    };

    const [state, dispatch] = useReducer(ConnectionReducer, initialState);

    const setAccount = (account) => {
        dispatch({
            type: EXIST_CONNECTION,
            payload: account
        })
    }

    const setTokenAccount = (tokenAccount) => {
        dispatch({
            type: EXIST_CONNECTION,
            payload: tokenAccount
        })
    }

    const redirectTwitter = () => {
        window.open('https://twitter.com/cryptoniakitten?s=21', '_blank')
    }

    const redirectDiscord = () => {
        window.open('https://discord.gg/8EUhf5bbYV', '_blank')
    }

    return (
        <ConnectionContext.Provider
            value={{
                account: state.account,
                setAccount,
                redirectTwitter,
                redirectDiscord,
                setTokenAccount
            }}
        >
            {props.children}
        </ConnectionContext.Provider>
    )
}

export default ConnectionState;