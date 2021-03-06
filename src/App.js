import "./App.css";
import React, { useState, useEffect } from "react";
import { ERC20ABI, CHAIN_DETAILS } from "./constants/constants.js";
import { ethers } from "ethers";

function App() {
  const [notice, setNotice] = useState(null);
  const [metamaskExist, setMetamaskExist] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [shouldShowSendForm, setShouldShowSendForm] = useState(false);

  const [accountId, setAccountId] = useState(null);
  const [ethProvider, setEthProvider] = useState(null);

  const [network, setNetwork] = useState(null);

  const [accounts, setAccounts] = useState([]);

  const [tempTokenAddress, setTempTokenAddress] = useState("");
  const [tempTokenDecimal, setTempTokenDecimal] = useState("");
  const [tempTokenCurrency, setTempTokenCurrency] = useState("");
  const [tempTokenBalance, setTempTokenBalance] = useState("");

  const [tokens, setTokens] = useState({});
  const [chosenToken, setChosenToken] = useState({});
  const [mainToken, setMainToken] = useState({});

  const [whitelist, setWhitelist] = useState({});
  const [tempWhitelist, setTempWhitelist] = useState("");
  const [tempWhitelistColor, setTempWhitelistColor] = useState("#26cfc4");
  const [tempWhitelistAlias, setTempWhitelistAlias] = useState("");

  const [tempSendAmount, setTempSendAmount] = useState("");
  const [tempSendAddress, setTempSendAddress] = useState("");
  const [tempSendColor, setTempSendColor] = useState("transparent");
  const [tempSendToken, setTempSendToken] = useState("");
  const [tempSendDecimals, setTempSendDecimals] = useState(0);

  const [tempDeleteAddressCandidate, setTempDeleteAddressCandidate] =
    useState("");
  const [tempDeleteAddressType, setTempDeleteAddressType] = useState("token");
  const [shouldShowDeletePrompt, setShouldShowDeletePrompt] = useState(false);

  const [notifications, setNotifications] = useState([]);

  const NOTIFICATION_MAPPER = {
    danger: "item--red",
    default: "item--default",
  };

  function handleSendAmount(value) {
    setTempSendAmount(value);
  }

  function handleSendMaxAmount() {
    const _sendAmount = tempSendToken
      ? chosenToken[tempSendToken].balance
      : mainToken.balance;
    console.log("_sendAmount", _sendAmount);
    setTempSendAmount(_sendAmount);
  }

  function handleChangeSendAddress(value) {
    if (value in whitelist) {
      setTempSendColor(whitelist[value].color);
    } else {
      setTempSendColor("transparent");
    }
    setTempSendAddress(value);
  }

  async function handleSendInputs() {
    // real send happens here, should check if address is whitelisted, validate amount value
    if (!(tempSendAddress in whitelist)) {
      pushNotification(
        `The address ${tempSendAddress} is not in the whitelist, please add it to the whitelist first!`,
        "danger"
      );
      return;
    }

    try {
      if (tempSendToken) {
        const signer = ethProvider.getSigner();
        const contract = new ethers.Contract(tempSendToken, ERC20ABI, signer);

        const txHash = await contract.transfer(
          tempSendAddress,
          ethers.utils.parseUnits(tempSendAmount, tempSendDecimals),
          {
            from: accountId,
          }
        );

        ethProvider.once(txHash, () => {
          setTempSendToken("");
          setTempSendDecimals("");
          setTempSendAddress("");
          setTempSendAmount("");
          setTempSendColor("transparent");
          pushNotification("transaction done!", "default");
        });
      } else {
        const params = [
          {
            from: accountId,
            to: tempSendAddress,
            value: ethers.utils
              .parseUnits(tempSendAmount, "ether")
              .toHexString(),
          },
        ];

        const txHash = await ethProvider.send("eth_sendTransaction", params);

        ethProvider.once(txHash, () => {
          setTempSendToken("");
          setTempSendDecimals("");
          setTempSendAddress("");
          setTempSendAmount("");
          setTempSendColor("transparent");
          pushNotification("transaction done!", "default");
        });
      }

      setShouldShowSendForm(false);
      pushNotification(
        "your transaction is being processed, you should get notified by the metamask extension soon",
        "default"
      );
    } catch (e) {
      pushNotification(e.message, "danger");
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
    const _tempTokenBalance = ethers.utils.formatUnits(
      getBalance,
      _tempTokenDecimals
    );
    setTempTokenBalance(_tempTokenBalance);
  }

  function handleAddToken() {
    let tempTokens = tokens;

    if (!(network.chainId in tempTokens)) {
      tempTokens[network.chainId] = {};
    }
    tempTokens[network.chainId][tempTokenAddress] = null;
    pushNotification(`${tempTokenAddress} has been added!`, "default");

    setTokens({ ...tempTokens });
    localStorage.setItem("tokens", JSON.stringify(tempTokens));

    setTempTokenAddress("");
    setTempTokenDecimal("");
    setTempTokenCurrency("");
    setTempTokenBalance("");
  }

  function handleRemoveToken() {
    let tempTokens = tokens;

    delete tempTokens[network.chainId][tempDeleteAddressCandidate];

    setTokens({ ...tempTokens });
    localStorage.setItem("tokens", JSON.stringify(tempTokens));
  }

  async function handleSend(native = false, decimals, tokenAddress) {
    if (native) {
      setTempSendToken("");
    } else {
      setTempSendToken(tokenAddress);
    }
    setTempSendDecimals(decimals);
    setShouldShowSendForm(true);
  }

  function closeSendForm(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setShouldShowSendForm(false);
      setTempSendToken("");
      setTempSendDecimals("");
      setTempSendAddress("");
      setTempSendAmount("");
    }
  }

  function handleTempWhitelist(address) {
    setTempWhitelist(address);
  }

  function handleTempWhitelistAlias(alias) {
    setTempWhitelistAlias(alias);
  }

  function isAddress(address) {
    try {
      ethers.utils.getAddress(address);
    } catch (e) {
      return false;
    }
    return true;
  }

  function handleAddWhitelist() {
    if (!isAddress(tempWhitelist)) {
      pushNotification("address is invalid!", "danger");
      return;
    }
    let _whitelist = whitelist;
    _whitelist[tempWhitelist] = {
      color: tempWhitelistColor,
      alias: tempWhitelistAlias,
    };
    setWhitelist({ ..._whitelist });
    localStorage.setItem("whitelist", JSON.stringify(_whitelist));
    pushNotification(
      `${tempWhitelist} has been added to whitelist!`,
      "default"
    );
    setTempWhitelist("");
  }

  function handleRemoveWhitelist() {
    let _whitelist = whitelist;
    delete _whitelist[tempDeleteAddressCandidate];
    pushNotification(
      `${tempDeleteAddressCandidate} has been removed from whitelist!`,
      "default"
    );
    setWhitelist({ ..._whitelist });
    localStorage.setItem("whitelist", JSON.stringify(_whitelist));
  }

  function handleRemoveButton(addressType, address) {
    setTempDeleteAddressCandidate(address);
    setTempDeleteAddressType(addressType);
    setShouldShowDeletePrompt(true);
  }

  function handleDeleteAddress() {
    if (tempDeleteAddressType === "whitelist") {
      handleRemoveWhitelist();
    } else if (tempDeleteAddressType === "token") {
      handleRemoveToken();
    }
    setShouldShowDeletePrompt(false);
  }

  function closeDeleteForm(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setShouldShowDeletePrompt(false);
    }
  }

  async function login() {
    await ethProvider.send("eth_requestAccounts", []);

    const signer = ethProvider.getSigner();

    const accId = await signer.getAddress();
    setAccountId(accId);
    setIsLoggedIn(true);

    ethProvider.provider.on("accountsChanged", () => {
      setNotice(
        "An account change is detected, please refresh the page to prevent inconvinience"
      );
      window.location.reload();
    });
  }

  async function handleClickLogin() {
    try {
      await login();
      pushNotification("Login success", "default");
    } catch (e) {
      pushNotification(e.message, "danger");
    }
  }

  function pushNotification(message, type) {
    setNotifications([...notifications, { message, type }]);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications(notifications.slice(1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [JSON.stringify(notifications)]);

  // only after render
  useEffect(() => {
    async function initEthers() {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      setEthProvider(provider);

      const netObj = await provider.getNetwork();
      setNetwork(netObj);

      provider.on("network", (newNetwork, oldNetwork) => {
        if (oldNetwork) {
          setNotice(
            "A network change is detected, please refresh the page to prevent inconvinience"
          );
          window.location.reload();
        }
      });
    }

    if (typeof window.ethereum !== "undefined") {
      setMetamaskExist(true);
      initEthers();
    } else {
      setNotice("Metamask extension is not detected, please install it first");
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
        const _accounts = await ethProvider.listAccounts();
        setAccounts(_accounts);
      }
    }

    checkProvider();
  }, [ethProvider]);

  // checking accounts state
  useEffect(() => {
    if (ethProvider) {
      if (accounts && accounts.length > 0) {
        // if logged in already, call login (it will handle the already login)
        setIsLoggedIn(true);
        login();
      }
    }
  }, [ethProvider, accounts]);

  useEffect(() => {
    async function tokenDetailsSetter() {
      let _chosenToken = {};
      if (
        accountId &&
        ethProvider &&
        tokens &&
        network &&
        network.chainId in tokens
      ) {
        const signer = ethProvider.getSigner();

        await Promise.all(
          Object.keys(tokens[network.chainId]).map(
            async (_tempTokenAddress, i) => {
              try {
                const contract = new ethers.Contract(
                  _tempTokenAddress,
                  ERC20ABI,
                  signer
                );

                const _tempTokenDecimals = await contract.decimals();
                const _tempTokenCurrency = await contract.symbol();
                const getBalance = await contract.balanceOf(accountId);

                const _tempTokenBalance = ethers.utils.formatUnits(
                  getBalance,
                  _tempTokenDecimals
                );

                _chosenToken[_tempTokenAddress] = {};
                _chosenToken[_tempTokenAddress].currency = _tempTokenCurrency;
                _chosenToken[_tempTokenAddress].balance = _tempTokenBalance;
                _chosenToken[_tempTokenAddress].decimals = _tempTokenDecimals;
              } catch (e) {}
            }
          )
        );
      }

      setChosenToken(_chosenToken);
    }

    tokenDetailsSetter();
  }, [
    ethProvider,
    tokens,
    network,
    accountId,
    tempSendToken,
    tempSendDecimals,
  ]);

  useEffect(() => {
    async function mainTokenDetailSetter() {
      if (accountId && ethProvider) {
        let _tempToken = {};

        const _tempRawBalance = await ethProvider.getBalance(accountId);
        const _tempMainTokenBalance = ethers.utils.formatEther(_tempRawBalance);

        _tempToken.balance = _tempMainTokenBalance;
        _tempToken.currency = "";

        if (network) {
          if (network.chainId in CHAIN_DETAILS) {
            _tempToken.currency = CHAIN_DETAILS[network.chainId].symbol;
            _tempToken.decimals = CHAIN_DETAILS[network.chainId].decimals;
          }
        }
        setMainToken(_tempToken);
      }
    }

    mainTokenDetailSetter();
  }, [ethProvider, accountId, network, tempSendToken, tempSendDecimals]);

  return (
    <div className="main">
      {notice && <div className="notice">{notice}</div>}
      <header className="header">
        <div className="network-info">
          {metamaskExist && network && "name" in network && (
            <div>
              Connected to network: <b>{network?.name}</b>
            </div>
          )}
        </div>
        <div className="account-info">
          {isLoggedIn ? (
            <div>
              Logged in as: <b>{accountId}</b>
            </div>
          ) : metamaskExist ? (
            <button onClick={() => handleClickLogin()}>
              Connect to Metamask
            </button>
          ) : (
            ""
          )}
        </div>
      </header>
      {metamaskExist && isLoggedIn ? (
        <div className="list-content">
          <div className="assets">
            <h2>{network?.name} saved tokens (assets)</h2>
            <ul className="token-list">
              {
                <li>
                  <div className="token-content">
                    <div className="token-address">MAIN TOKEN</div>
                    <div className="token-balance">
                      {mainToken.balance} {mainToken.currency}
                    </div>
                  </div>
                  <button
                    className="token-send-button"
                    onClick={() => handleSend(true, mainToken.decimals)}
                  >
                    Send
                  </button>
                </li>
              }
              {Object.keys(chosenToken).map((token, i) => (
                <li key={i}>
                  <div className="token-content">
                    <div className="token-address">{token}</div>
                    <div className="token-balance">
                      {chosenToken[token].balance} {chosenToken[token].currency}
                    </div>
                  </div>
                  <button
                    className="button--red"
                    onClick={() => handleRemoveButton("token", token)}
                  >
                    Remove
                  </button>
                  <button
                    className="token-send-button"
                    onClick={() =>
                      handleSend(false, chosenToken[token].decimals, token)
                    }
                  >
                    Send
                  </button>
                </li>
              ))}
              <li>
                <div className="token-content">
                  <div className="token-address">
                    <input
                      type="text"
                      placeholder="input new token address here"
                      className="input-token"
                      value={tempTokenAddress}
                      onChange={(e) => handleTempTokenAddress(e.target.value)}
                    />
                  </div>
                  <div className="token-balance">
                    {tempTokenBalance} {tempTokenCurrency}
                    {tempTokenDecimal
                      ? `, decimal ${tempTokenDecimal}`
                      : "\u00A0"}
                  </div>
                </div>
                <button
                  className="token-send-button"
                  onClick={() => handleAddToken()}
                >
                  Add Token
                </button>
              </li>
            </ul>
          </div>
          <div className="whitelist">
            <h2>Whitelist Addresses</h2>

            <ul className="whitelist-list">
              {Object.keys(whitelist).map((address, i) => (
                <li key={i}>
                  <div
                    className="whitelist-color whitelist-color-output"
                    style={{
                      backgroundColor:
                        address in whitelist
                          ? whitelist[address].color
                          : `transparent`,
                    }}
                  ></div>
                  <div className="whitelist-content">
                    {whitelist[address].alias && (
                      <div className="whitelist-alias">
                        {whitelist[address].alias}
                      </div>
                    )}
                    <div className="whitelist-address">{address}</div>
                  </div>
                  <button
                    className="button--red"
                    onClick={() => handleRemoveButton("whitelist", address)}
                  >
                    Remove
                  </button>
                </li>
              ))}
              <li>
                <div className="whitelist-content">
                  <input
                    className="input-whitelist"
                    placeholder="input new whitelist address here"
                    type="text"
                    value={tempWhitelist}
                    onChange={(e) => handleTempWhitelist(e.target.value)}
                  />
                  <div className="input-whitelist-alias-container">
                    <input
                      className="input-whitelist-alias"
                      type="text"
                      placeholder="alias"
                      value={tempWhitelistAlias}
                      onChange={(e) => handleTempWhitelistAlias(e.target.value)}
                    />
                    <input
                      className="color-picker"
                      type="color"
                      value={tempWhitelistColor}
                      onChange={(e) => setTempWhitelistColor(e.target.value)}
                    />
                  </div>
                </div>
                <button onClick={() => handleAddWhitelist()}>
                  Add whitelist
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="no-metamask">
          <p>
            {!isLoggedIn
              ? `Please connect your metamask first`
              : `Metamask extension is not detected, please install metamask first
            then reload this page`}
          </p>
        </div>
      )}

      <div>
        <h2>Some tips</h2>
        <ul className="footer-ul">
          <li>
            If not working: try to open metamask extension first to make sure it
            has started running in the background before using this site.
          </li>
          <li>
            To switch account, please switch it on the metamask extension.
          </li>
          <li>
            If you switch account on the metamask but it doesn't change on this
            site, please open the extension again and allow this site to
            connect.
          </li>
        </ul>
      </div>

      {shouldShowSendForm && (
        <div className="overlay" onClick={(e) => closeSendForm(e)}>
          <div className="modal-send">
            <h3>Send</h3>

            <div className="modal-content">
              <div className="modal-text">
                Sending via {network?.name}{" "}
                {tempSendToken
                  ? `on token address ${tempSendToken}`
                  : `on native token`}
              </div>

              <div className="input-send-container">
                <select
                  className="select-whitelist-address"
                  name="option"
                  onChange={(e) => handleChangeSendAddress(e.target.value)}
                >
                  <option>Choose Whitelist Address</option>
                  {Object.keys(whitelist).map((address) => (
                    <option value={address} key={address}>
                      {whitelist[address].alias
                        ? `${whitelist[address].alias} (${address})`
                        : address}
                    </option>
                  ))}
                </select>
                <div
                  className="address-color-output"
                  style={{ backgroundColor: tempSendColor }}
                ></div>
              </div>
              <div className="input-send-container">
                <input
                  type="text"
                  placeholder="Amount"
                  value={tempSendAmount}
                  onChange={(e) => handleSendAmount(e.target.value)}
                />
                <div className="address-token-currency">
                  {tempSendToken
                    ? chosenToken[tempSendToken].currency
                    : mainToken.currency}
                </div>
              </div>
              <div className="balance-send-info">
                {tempSendToken
                  ? `Balance: ${chosenToken[tempSendToken].balance} ${chosenToken[tempSendToken].currency}`
                  : `Balance: ${mainToken.balance} ${mainToken.currency}`}
                <button
                  className="send-max-button"
                  onClick={() => handleSendMaxAmount()}
                >
                  MAX
                </button>
              </div>
              <div className="modal-button-group">
                <button
                  className="button--red"
                  onClick={(e) => closeSendForm(e)}
                >
                  Cancel
                </button>{" "}
                <button
                  className="button--green"
                  onClick={() => handleSendInputs()}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {shouldShowDeletePrompt && (
        <div className="overlay" onClick={(e) => closeDeleteForm(e)}>
          <div className="modal-send">
            Are you sure you want to delete {tempDeleteAddressCandidate} from{" "}
            {tempDeleteAddressType}?
            <div className="modal-button-group">
              <button
                className="button--red"
                onClick={(e) => closeDeleteForm(e)}
              >
                No
              </button>{" "}
              <button
                className="button--green"
                onClick={(e) => handleDeleteAddress(e)}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      <ul className="notifications">
        {
          // notification list
          notifications.map((notification, i) => (
            <li key={i} className={NOTIFICATION_MAPPER[notification.type]}>
              {notification.message}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
