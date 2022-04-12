import React, { useState, useEffect } from "react";
import axios from "axios";
import { useEthers, useTokenBalance } from '@usedapp/core'

const ZEDCATNFT = '0x37Ad6637A835DA66dE15495aD8C7AEd397B46E24'

const LoopAPI = () => {
  const { account } = useEthers()
  const [ accountLayerTwo, setAccountLayerTwo] = useState();
  const [ zedcatLayerTwo, setZedcatLayerTwo] = useState();
  const [ loopheadLayerTwo, setLoopheadLayerTwo] = useState();
  


  useEffect(() => {
    axios.get(`https://api3.loopring.io/api/v3/account?owner=${account}`).then((res) => {
      setAccountLayerTwo(res.data);
      

      axios.get(`https://api3.loopring.io/api/v3/user/nft/balances?accountId=${res.data.accountId}&tokenAddrs=0x37ad6637a835da66de15495ad8c7aed397b46e24`, {
        headers: {
            'X-API-KEY': 'XXXXXXX'
        }
        }).then((res) => {
            const responseZedcatLayerTwo = res.data;
            setZedcatLayerTwo(responseZedcatLayerTwo);
        });

    });
  }, []);

 
  console.log(accountLayerTwo);
  console.log(zedcatLayerTwo);
  
  
  return (
    <div>
          {zedcatLayerTwo ? (
            <div> 
                <> {zedcatLayerTwo.totalNum >= 1 ? 'Yes' : 'No'} </>
            </div>
           ) : ('')}
    </div>
  );
};

export default LoopAPI;