import './App.css';
import React, { useState, useEffect } from 'react';
import { ERC20ABI } from './constants/constants.js';
import { ethers } from "ethers";

function App() {
  const [notice, setNotice] = useState(null);

  const [accoundId, setAccountId] = useState(null);
  const [ethProvider, setEthProvider] = useState(null);
  const [network, setNetwork] = useState(null);

  const [accounts, setAccounts] = useState([]);

  async function checkaccount() {
    try {
      // const newAccounts = await ethProvider.send("eth_requestAccounts");
      // console.log(newAccounts);
      // handleNewAccounts(newAccounts);
      console.log(".listAccounts()", await ethProvider.listAccounts());
    } catch (err) {
      console.error('Error on init when getting accounts', err);
    }
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

  async function payMetamask(sender, receiver, ether) {
    // Acccounts now exposed
    
    const params = [{
      from: sender,
      to: receiver,
      value: ethers.utils.parseUnits(ether, 'ether').toHexString()
    }];

    const transactionHash = await ethProvider.send('eth_sendTransaction', params);

    console.log(transactionHash);
  }

  async function payMetamask2(sender, receiver, ether) {
    // Acccounts now exposed
    const KOVAN_DAI = "0xf9B98f63519D618E8006D5b721f38f00dfda9B1a";
    const DAIADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
    const KOVAN_DAI2 = "0x04df6e4121c27713ed22341e7c7df330f56f289b";
    const abi = [
      // Read-Only Functions
      "function balanceOf(address owner) view returns (uint256)",
      "function decimals() view returns (uint8)",
      "function symbol() view returns (string)",
  
      // Authenticated Functions
      "function transfer(address to, uint amount) returns (bool)",
  
      // Events
      "event Transfer(address indexed from, address indexed to, uint amount)"
    ];

    const signer = ethProvider.getSigner();
    // How many tokens?
const numberOfDecimals = 18;
const numberOfTokens = 0.0006;// ethers.utils.parseUnits('0.0006', numberOfDecimals);

    const erc20 = new ethers.Contract(KOVAN_DAI2, ERC20ABI, signer);
    // const params = [{
    //   from: sender,
    //   to: receiver,
    //   // value: ethers.utils.parseUnits(ether, 'ether').toHexString()
    //   data: erc20.methods
    //         .transfer(receiver, ether)
    //         .encodeABI(),
    // }];

    const result = await erc20.transfer(
      receiver,
      numberOfTokens,
      {
        from: sender,
      },
    );
    console.log('result', result);

    console.log("erc20", erc20, erc20.address);

    // const transactionHash = await ethProvider.send('eth_sendTransaction', params);

    // console.log(transactionHash);
  }
  

  useEffect(() => {
    document.title = `NFT Wallet`;

    // async function initializeEthers() {
    //   const prov = await ethProvider.send("eth_requestAccounts", []);
    //   console.log("prov", prov);
    //   // const signer = provider.getSigner();
    //   // console.log("Account:", await signer.getAddress());
    // }

    // initializeEthers();

    async function initEthers() {
      
      // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      const provider = new ethers.providers.Web3Provider(window.ethereum, "kovan");
      setEthProvider(provider);
      console.log("provider", provider);
      // console.log("network:",await provider.getNetwork());
      const netObj = await provider.getNetwork();
      setNetwork(netObj);
      // const prov = await ethProvider.send("eth_requestAccounts", []);
      // console.log("prov", prov);

      // const isMetaMaskConnected = await checkConnected();
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

    // const checkConnected = async () => {
    //   const accounts = await ethProvider.listAccounts();
    //   return accounts.length > 0;
    // }

//     async function checkMetamaskConnected() {
//       if (ethProvider) {
//         login();
// //         const signer = ethProvider.getSigner();
// // console.log("signer", signer);
// //     // console.log("Account:", await signer.getAddress());
// //         const accId = await signer.getAddress();
// //         setAccountId(accId);
//       }
//     }

    if (typeof window.ethereum !== 'undefined') {
      // console.log('MetaMask is installed!');
      setNotice("Metamask extension is detected, nice");
      initEthers();
      // checkMetamaskConnected();
    } else {
      setNotice("Metamask extension is NOT detected");
    }

    

    
  }, []);

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

  useEffect(() => {
    if (ethProvider) {
      if (accounts && accounts.length > 0) {
        login();
      }
    }
  }, [ethProvider, accounts]);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Idk
        </p>
        <div>{notice}</div>
        <div>network name: {network?.name}</div>
        <button onClick={() => login()}>CONNECT</button>
        <div>accountid: {accoundId}</div>
        <button onClick={() => payMetamask("0xf9B98f63519D618E8006D5b721f38f00dfda9B1a", "0xffCF56AC374745c7E3e5dBC3385A00b4066d139B", "0.000001")}>SEND</button>
        <button onClick={() => payMetamask2("0xf9B98f63519D618E8006D5b721f38f00dfda9B1a", "0xffCF56AC374745c7E3e5dBC3385A00b4066d139B", "150000000")}>SEND2</button>

      </header>
    </div>
  );
}

export default App;
