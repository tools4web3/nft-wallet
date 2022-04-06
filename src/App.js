import './App.css';
import React, { useState, useEffect } from 'react';
import { ERC20ABI, CHAIN_DETAILS } from './constants/constants.js';
import { ethers } from "ethers";

function App() {
  const [notice, setNotice] = useState(null);

  const [accountId, setAccountId] = useState(null);
  const [ethProvider, setEthProvider] = useState(null);

  const [network, setNetwork] = useState(null);
  // const [networkName, setNetworkName] = useState(null);

  const [accounts, setAccounts] = useState([]);

  const [tempTokenAddress, setTempTokenAddress] = useState("");
  const [tempTokenDecimal, setTempTokenDecimal] = useState("");
  const [tempTokenCurrency, setTempTokenCurrency] = useState("");
  const [tempTokenBalance, setTempTokenBalance] = useState("");

  const [tokens, setTokens] = useState({});
  const [chosenToken, setChosenToken]  = useState({});
  const [mainToken, setMainToken] = useState({});

  const [whitelist, setWhitelist] = useState({});
  const [tempWhitelist, setTempWhitelist] = useState("");

  const [tempSendAmount, setTempSendAmount] = useState(0);
  const [tempSendAddress, setTempSendAddress] = useState("");
  const [tempSendToken, setTempSendToken] = useState("");
  const [tempSendDecimals, setTempSendDecimals] = useState(0);

  function handleSendAmount(value) {
    setTempSendAmount(value);
  }

  function handleSendAddress(value) {
    setTempSendAddress(value);
  }

  async function handleSendInputs() {
    // real send happens here, should check if address is whitelisted, validate amount value

    if (tempSendToken) {
      const signer = ethProvider.getSigner();
  
      const contract = new ethers.Contract(tempSendToken, ERC20ABI, signer);
  
      const transactionHash = await contract.transfer(
        tempSendAddress,
        ethers.utils.parseUnits(tempSendAmount, tempSendDecimals),
        {
          from: accountId,
        },
      );
      console.log('transactionHash', transactionHash);
  
    } else {
      const params = [{
        from: accountId,
        to: tempSendAddress,
        value: ethers.utils.parseUnits(tempSendAmount, 'ether').toHexString(),
      }];
  
      const transactionHash = await ethProvider.send('eth_sendTransaction', params);
      console.log("transactionHash", transactionHash);
    }
  }

  async function handleTempTokenAddress(_tempTokenAddress) {
    // tempTokenAddress watcher: used to do something whenever the tempTokenAddress input changes
    setTempTokenAddress(_tempTokenAddress);
    setTempTokenDecimal("");
    setTempTokenCurrency("");
    setTempTokenBalance("");

    const signer = ethProvider.getSigner();

    const contract = new ethers.Contract(_tempTokenAddress, ERC20ABI, signer);

    const _tempTokenDecimals = await contract.decimals();
    setTempTokenDecimal(_tempTokenDecimals);

    const _tempTokenCurrency = await contract.symbol();
    setTempTokenCurrency(_tempTokenCurrency);

    const getBalance = await contract.balanceOf(accountId);
    const _tempTokenBalance = ethers.utils.formatUnits(getBalance, _tempTokenDecimals);
    setTempTokenBalance(_tempTokenBalance);
  }

  function handleAddToken() {
    let tempTokens = tokens;

    if (!(network.chainId in tempTokens)) {
      tempTokens[network.chainId] = {};
    }
    tempTokens[network.chainId][tempTokenAddress] = null;

    console.log(tempTokens);
    setTokens({...tempTokens});
    localStorage.setItem("tokens", JSON.stringify(tempTokens));

    setTempTokenAddress("");
    setTempTokenDecimal("");
    setTempTokenCurrency("");
    setTempTokenBalance("");
  }

  function removeToken() {

  }

  async function handleSend(native = false, decimals, tokenAddress) {
    if (native) {
      setTempSendToken("");
    } else {
      setTempSendToken(tokenAddress);
    }
    setTempSendDecimals(decimals);
  }

  

  function handleTempWhitelist(address) {
    setTempWhitelist(address);
  }

  function handleAddWhitelist() {
    let _whitelist = whitelist;
    _whitelist[tempWhitelist] = null;
    setWhitelist({..._whitelist});
    localStorage.setItem("whitelist", JSON.stringify(_whitelist));
  }

  function removeWhitelist(address) {
    
  }

  async function login() {
    console.log("logging in");
    const prov = await ethProvider.send("eth_requestAccounts", []);
console.log("prov", prov);

    const signer = ethProvider.getSigner();
console.log("signer", signer);
    // console.log("Account:", await signer.getAddress());
    const accId = await signer.getAddress();
    setAccountId(accId);
// console.log(await ethProvider.getBalance("ethers.eth"));
  }
  
  // only after render
  useEffect(() => {
    async function initEthers() {
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      setEthProvider(provider);
      console.log("provider", provider);

      const netObj = await provider.getNetwork();
      setNetwork(netObj);

      console.log("netObj", netObj);
      // console.log("isMetaMaskConnected", isMetaMaskConnected);

      // await isMetaMaskConnected().then((connected) => {
      //   if (connected) {
      //     console.log("already connected");
      //     // metamask is connected
      //   } else {
      //     console.log("not connected");
      //     // metamask is not connected
      //   }
      // });
      // console.log("ethProvider", ethProvider);
      
    }

    if (typeof window.ethereum !== 'undefined') {
      // console.log('MetaMask is installed!');
      setNotice("Metamask extension is detected, nice");
      initEthers();
      // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      // provider.on("network", (newNetwork, oldNetwork) => {
      //     // When a Provider makes its initial connection, it emits a "network"
      //     // event with a null oldNetwork along with the newNetwork. So, if the
      //     // oldNetwork exists, it represents a changing network
      //     if (oldNetwork) {
      //         window.location.reload();
      //     }
      // });
      // checkMetamaskConnected();
    } else {
      setNotice("Metamask extension is NOT detected");
    }

    let _tempTokens = JSON.parse(localStorage.getItem("tokens"));
    if (!_tempTokens) {
      _tempTokens = {};
    }
    setTokens(_tempTokens);

    let _whitelist = JSON.parse(localStorage.getItem("whitelist"));
    if (!_whitelist) {
      _whitelist = {};
    }
    setWhitelist(_whitelist);
    
  }, []);

  // checking provider state
  useEffect(() => {
    async function checkProvider() {
      if (ethProvider) {
        console.log("asup 1");
        const _accounts = await ethProvider.listAccounts();
        setAccounts(_accounts);

      }
    }

    checkProvider();
  }, [ethProvider]);

  // checking accounts state
  useEffect(() => {
    if (ethProvider) {
      if (accounts && accounts.length > 0) { // if logged in already, call login (it will handle the already login)
        login();
      }
    }
  }, [ethProvider, accounts]);

  useEffect(() => {
    async function tokenDetailsSetter() {
      // if (tokens) {
      //   if (network) {
        let _chosenToken = {}
          if (accountId && ethProvider && tokens && network && network.chainId in tokens) {
            console.log("asup teu?");
            const signer = ethProvider.getSigner();
            
            
            await Promise.all(Object.keys(tokens[network.chainId]).map(async (_tempTokenAddress, i) => {
              try {
  
                // console.log("i _tempTokenAddress", _tempTokenAddress, i)
                const contract = new ethers.Contract(_tempTokenAddress, ERC20ABI, signer);
    // console.log("contract jalan teu?", contract);
                const _tempTokenDecimals = await contract.decimals();
    // console.log("terus errorna dimana?1");
    
                const _tempTokenCurrency = await contract.symbol();
    // console.log("terus errorna dimana?2");
    
                const getBalance = await contract.balanceOf(accountId);
    // console.log("terus errorna dimana?3");
    
                const _tempTokenBalance = ethers.utils.formatUnits(getBalance, _tempTokenDecimals);
    // console.log("terus errorna dimana?");
                _chosenToken[_tempTokenAddress] = {};
                _chosenToken[_tempTokenAddress].currency = _tempTokenCurrency;
                _chosenToken[_tempTokenAddress].balance = _tempTokenBalance;
                _chosenToken[_tempTokenAddress].decimals = _tempTokenDecimals;
                // console.log("i", i, _tempTokenBalance, _chosenToken);
              } catch(e) {
                
              }
            }));
          }
      //   }
      // }
      setChosenToken(_chosenToken);
      console.log("_chosenToken", _chosenToken);
      // const signer = ethProvider.getSigner();
  
      // const contract = new ethers.Contract(_tempTokenAddress, ERC20ABI, signer);
  
      // const _tempTokenDecimals = await contract.decimals();
      // const _tempTokenCurrency = await contract.symbol();
      // const getBalance = await contract.balanceOf(accountId);
      // const _tempTokenBalance = ethers.utils.formatUnits(getBalance, _tempTokenDecimals);
  // const _tempTokenBalance ="";
  // const _tempTokenCurrency ="";
  
  //     return <div>{_tempTokenBalance} {_tempTokenCurrency}</div>;
    }
    tokenDetailsSetter();
  }, [ethProvider, tokens, network, accountId]);

  useEffect(() => {
    async function mainTokenDetailSetter() {
      if (accountId && ethProvider) {
        let _tempToken = {}
        // console.log("ethProvider", ethProvider);
        const _tempRawBalance = await ethProvider.getBalance(accountId);
        // const _tempMainTokenDecimals = 0//await ethProvider.decimals();
        // const _tempMainTokenCurrency = 0//await ethProvider.symbol();
        const _tempMainTokenBalance = ethers.utils.formatEther(_tempRawBalance);
        // console.log("_tempMainTokenBalance", _tempMainTokenBalance, _tempMainTokenDecimals, _tempMainTokenCurrency);
        _tempToken.balance = _tempMainTokenBalance;
        _tempToken.currency = "";
  
        if (network) {
          if (network.chainId in CHAIN_DETAILS) {
            _tempToken.currency = CHAIN_DETAILS[network.chainId].symbol;
            _tempToken.decimals = CHAIN_DETAILS[network.chainId].decimals;
          }
        }
        setMainToken(_tempToken)
      }
    }

    mainTokenDetailSetter();
  }, [ethProvider, accountId, network]);

  // useEffect(() => {
  //   localStorage.setItem("whitelist", whitelist);
  // }, [whitelist]);

  // useEffect(() => {
  //   if (ethProvider) {
  //     if (network) {
        
  //     }
  //   }
  // }, [ethProvider, network]);
  
  return (
    <div className="App">
      <header className="App-header">
        <div>{notice}</div>
        <div>network name: {network?.name}</div>
        <button onClick={() => login()}>CONNECT</button>
        <div>accountid: {accountId}</div>
<div style={{borderBottom: "3px solid black", width: "100%", marginBottom: "50px"}}></div>
<div>Adding address token for {network?.name} network</div>
<input type="text" value={tempTokenAddress} onChange={e => handleTempTokenAddress(e.target.value)} />
<div>decimal {tempTokenDecimal}</div>
<div>curr {tempTokenCurrency}</div>
<div>balance of this token {tempTokenBalance}</div>
<button onClick={() => handleAddToken()}>Add Token</button>
<div style={{borderBottom: "3px solid black", width: "100%", marginBottom: "50px"}}></div>

<input type="text" value={tempWhitelist} onChange={e => handleTempWhitelist(e.target.value)} />
<button onClick={() => handleAddWhitelist()}>Add whitelist</button>
<div style={{borderBottom: "3px solid black", width: "100%", marginBottom: "50px"}}></div>
<div className='lists'>
  <div className='assets'>
    <h2>{network?.name} saved tokens (assets)</h2>
    <ul className='token-list'>
      {
        <li>
          <div className='token-content'>
            <div className='token-address'>DEFAULT TOKEN</div>
            <div className='token-balance'>{mainToken.balance} {mainToken.currency}</div>
          </div>
          <button className='token-send-button' onClick={() => handleSend(true, mainToken.decimals)}>Send</button>
        </li>
      }
      {
        Object.keys(chosenToken).map((token, i) =>
        <li key={i}>
          <div className='token-content'>
            <div className='token-address'>{token}</div>
            <div className='token-balance'>{chosenToken[token].balance} {chosenToken[token].currency}</div>
          </div>
          <button className='token-send-button' onClick={() => handleSend(false, chosenToken[token].decimals, token)}>Send</button>
        </li>
        )
      }
      <li>
      <div className='token-content'>
        <div className='token-address'><input type="text" placeholder="input new token address here" className='input-token' value={tempTokenAddress} onChange={e => handleTempTokenAddress(e.target.value)} /></div>
        <div className='token-balance'>{tempTokenBalance} {tempTokenCurrency}{tempTokenDecimal ? `, decimal ${tempTokenDecimal}` : '\u00A0'}</div>
      </div>
      <button className='token-send-button' onClick={() => handleAddToken()}>Add Token</button>
      </li>
    </ul>

    <div className="modal-send">
      <div>Sending via {network?.name} {tempSendToken ? `on token address ${tempSendToken} (your balance ${chosenToken[tempSendToken].balance} ${chosenToken[tempSendToken].currency})` : `on native token (your balance ${mainToken.balance} ${mainToken.currency})`}</div>
      <input type='text' value={tempSendAmount} onChange={e => handleSendAmount(e.target.value)}/>
      <input type='text' value={tempSendAddress} onChange={e => handleSendAddress(e.target.value)}/>
      <button onClick={() => handleSendInputs()}>Send</button>
    </div>
  </div>
  <div className='whitelist'>
    <h2>Whitelist Addresses</h2>

    <ul className='whitelist-list'>
      {
        Object.keys(whitelist).map((item, i) => 
        <li key={i}><div className='whitelist-content'><div className='whitelist-address'>{item}</div></div></li>
        )
      }
      <li>
      <div className='whitelist-content'>
        <input className='input-whitelist' placeholder='input new whitelist address here' type="text" value={tempWhitelist} onChange={e => handleTempWhitelist(e.target.value)} />
      </div>
      <button onClick={() => handleAddWhitelist()}>Add whitelist</button>
      </li>
    </ul>
  </div>
</div>
<div>
  <h2>Some known problems</h2>
  <ul>
  <li>Not working: try to open metamask extension first to make sure it has started running in the background before using this site</li>
  </ul>
</div>
      </header>
    </div>
  );
}

export default App;
