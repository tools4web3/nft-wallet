import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [accoundId, setAccountId] = useState(0);

  useEffect(() => {
    document.title = `NFT Wallet`;

    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      setAccountId("Metamask extension is detected, nice");
    } else {
      setAccountId("Metamask extension is NOT detected");
    }
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Idk
        </p>
        <div>{accoundId}</div>
      </header>
    </div>
  );
}

export default App;
