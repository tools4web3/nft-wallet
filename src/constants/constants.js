const ERC20ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "gateway",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseApproval",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "deployer",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseApproval",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_gateway",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "mintToGateway",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_address",
        "type": "address"
      },
      {
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "mintTo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const CHAIN_DETAILS = {
  "1": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
  },
  "2": {
      "name": "Expanse Network Ether",
      "symbol": "EXP",
      "decimals": 18
  },
  "3": {
      "name": "Ropsten Ether",
      "symbol": "ROP",
      "decimals": 18
  },
  "4": {
      "name": "Rinkeby Ether",
      "symbol": "RIN",
      "decimals": 18
  },
  "5": {
      "name": "Görli Ether",
      "symbol": "GOR",
      "decimals": 18
  },
  "6": {
      "name": "Kotti Ether",
      "symbol": "KOT",
      "decimals": 18
  },
  "7": {
      "name": "ThaiChain Ether",
      "symbol": "TCH",
      "decimals": 18
  },
  "8": {
      "name": "Ubiq Ether",
      "symbol": "UBQ",
      "decimals": 18
  },
  "9": {
      "name": "Ubiq Testnet Ether",
      "symbol": "TUBQ",
      "decimals": 18
  },
  "10": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
  },
  "11": {
      "name": "Metadium Mainnet Ether",
      "symbol": "META",
      "decimals": 18
  },
  "12": {
      "name": "Metadium Testnet Ether",
      "symbol": "KAL",
      "decimals": 18
  },
  "13": {
      "name": "Staging Diodes",
      "symbol": "sDIODE",
      "decimals": 18
  },
  "14": {
      "name": "Spark",
      "symbol": "FLR",
      "decimals": 18
  },
  "15": {
      "name": "Diodes",
      "symbol": "DIODE",
      "decimals": 18
  },
  "16": {
      "name": "Coston Spark",
      "symbol": "CFLR",
      "decimals": 18
  },
  "17": {
      "name": "Thaifi Ether",
      "symbol": "TFI",
      "decimals": 18
  },
  "18": {
      "name": "ThunderCore Testnet Ether",
      "symbol": "TST",
      "decimals": 18
  },
  "19": {
      "name": "Songbird",
      "symbol": "SGB",
      "decimals": 18
  },
  "20": {
      "name": "Elastos",
      "symbol": "ELA",
      "decimals": 18
  },
  "21": {
      "name": "Elastos",
      "symbol": "tELA",
      "decimals": 18
  },
  "22": {
      "name": "Elastos",
      "symbol": "ELA",
      "decimals": 18
  },
  "23": {
      "name": "Elastos",
      "symbol": "tELA",
      "decimals": 18
  },
  "24": {
      "name": "Dither",
      "symbol": "DTH",
      "decimals": 18
  },
  "25": {
      "name": "Cronos",
      "symbol": "CRO",
      "decimals": 18
  },
  "26": {
      "name": "L1 testcoin",
      "symbol": "L1test",
      "decimals": 18
  },
  "27": {
      "name": "SHIBA INU COIN",
      "symbol": "SHIB",
      "decimals": 18
  },
  "28": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
  },
  "29": {
      "name": "L1 coin",
      "symbol": "L1",
      "decimals": 18
  },
  "30": {
      "name": "RSK Mainnet Ether",
      "symbol": "RBTC",
      "decimals": 18
  },
  "31": {
      "name": "RSK Testnet Ether",
      "symbol": "tRBTC",
      "decimals": 18
  },
  "32": {
      "name": "GoodData Testnet Ether",
      "symbol": "GooD",
      "decimals": 18
  },
  "33": {
      "name": "GoodData Mainnet Ether",
      "symbol": "GooD",
      "decimals": 18
  },
  "34": {
      "name": "Dither",
      "symbol": "DTH",
      "decimals": 18
  },
  "35": {
      "name": "TBWG Ether",
      "symbol": "TBG",
      "decimals": 18
  },
  "38": {
      "name": "Valorbit",
      "symbol": "VAL",
      "decimals": 18
  },
  "40": {
      "name": "Telos",
      "symbol": "TLOS",
      "decimals": 18
  },
  "41": {
      "name": "Telos",
      "symbol": "TLOS",
      "decimals": 18
  },
  "42": {
      "name": "Kovan Ether",
      "symbol": "KOV",
      "decimals": 18
  },
  "43": {
      "name": "Pangolin Network Native Token”",
      "symbol": "PRING",
      "decimals": 18
  },
  "44": {
      "name": "Crab Network Native Token",
      "symbol": "CRAB",
      "decimals": 18
  },
  "45": {
      "name": "Pangoro Network Native Token”",
      "symbol": "ORING",
      "decimals": 18
  },
  "50": {
      "name": "XinFin",
      "symbol": "XDC",
      "decimals": 18
  },
  "51": {
      "name": "XinFinTest",
      "symbol": "TXDC",
      "decimals": 18
  },
  "52": {
      "name": "CoinEx Chain Native Token",
      "symbol": "cet",
      "decimals": 18
  },
  "53": {
      "name": "CoinEx Chain Test Native Token",
      "symbol": "cett",
      "decimals": 18
  },
  "54": {
      "name": "Belly",
      "symbol": "BELLY",
      "decimals": 18
  },
  "55": {
      "name": "Zyx",
      "symbol": "ZYX",
      "decimals": 18
  },
  "56": {
      "name": "Binance Chain Native Token",
      "symbol": "BNB",
      "decimals": 18
  },
  "57": {
      "name": "Syscoin",
      "symbol": "SYS",
      "decimals": 18
  },
  "58": {
      "name": "ONG",
      "symbol": "ONG",
      "decimals": 9
  },
  "59": {
      "name": "EOS",
      "symbol": "EOS",
      "decimals": 18
  },
  "60": {
      "name": "GoChain Ether",
      "symbol": "GO",
      "decimals": 18
  },
  "61": {
      "name": "Ethereum Classic Ether",
      "symbol": "ETC",
      "decimals": 18
  },
  "62": {
      "name": "Ethereum Classic Testnet Ether",
      "symbol": "TETC",
      "decimals": 18
  },
  "63": {
      "name": "Mordor Classic Testnet Ether",
      "symbol": "METC",
      "decimals": 18
  },
  "64": {
      "name": "Ellaism Ether",
      "symbol": "ELLA",
      "decimals": 18
  },
  "65": {
      "name": "OKExChain Global Utility Token in testnet",
      "symbol": "OKT",
      "decimals": 18
  },
  "66": {
      "name": "OKExChain Global Utility Token",
      "symbol": "OKT",
      "decimals": 18
  },
  "67": {
      "name": "DBChain Testnet",
      "symbol": "DBM",
      "decimals": 18
  },
  "68": {
      "name": "SoterOne Mainnet Ether",
      "symbol": "SOTER",
      "decimals": 18
  },
  "69": {
      "name": "Kovan Ether",
      "symbol": "KOR",
      "decimals": 18
  },
  "71": {
      "name": "CFX",
      "symbol": "CFX",
      "decimals": 18
  },
  "74": {
      "name": "EIDI",
      "symbol": "EIDI",
      "decimals": 18
  },
  "76": {
      "name": "Mix Ether",
      "symbol": "MIX",
      "decimals": 18
  },
  "77": {
      "name": "POA Sokol Ether",
      "symbol": "SPOA",
      "decimals": 18
  },
  "78": {
      "name": "Primus Ether",
      "symbol": "PETH",
      "decimals": 18
  },
  "80": {
      "name": "RNA",
      "symbol": "RNA",
      "decimals": 18
  },
  "82": {
      "name": "Meter",
      "symbol": "MTR",
      "decimals": 18
  },
  "83": {
      "name": "Meter",
      "symbol": "MTR",
      "decimals": 18
  },
  "85": {
      "name": "GateToken",
      "symbol": "GT",
      "decimals": 18
  },
  "86": {
      "name": "GateToken",
      "symbol": "GT",
      "decimals": 18
  },
  "87": {
      "name": "Supernova",
      "symbol": "SNT",
      "decimals": 18
  },
  "88": {
      "name": "TomoChain",
      "symbol": "TOMO",
      "decimals": 18
  },
  "89": {
      "name": "TomoChain",
      "symbol": "TOMO",
      "decimals": 18
  },
  "90": {
      "name": "Garizon",
      "symbol": "GAR",
      "decimals": 18
  },
  "91": {
      "name": "Garizon",
      "symbol": "GAR",
      "decimals": 18
  },
  "92": {
      "name": "Garizon",
      "symbol": "GAR",
      "decimals": 18
  },
  "93": {
      "name": "Garizon",
      "symbol": "GAR",
      "decimals": 18
  },
  "95": {
      "name": "EOS",
      "symbol": "EOS",
      "decimals": 18
  },
  "96": {
      "name": "NEXT",
      "symbol": "NEXT",
      "decimals": 18
  },
  "97": {
      "name": "Binance Chain Native Token",
      "symbol": "tBNB",
      "decimals": 18
  },
  "99": {
      "name": "POA Network Core Ether",
      "symbol": "POA",
      "decimals": 18
  },
  "100": {
      "name": "xDAI",
      "symbol": "xDAI",
      "decimals": 18
  },
  "101": {
      "name": "EtherInc Ether",
      "symbol": "ETI",
      "decimals": 18
  },
  "102": {
      "name": "Web3Games",
      "symbol": "W3G",
      "decimals": 18
  },
  "105": {
      "name": "Web3Games",
      "symbol": "W3G",
      "decimals": 18
  },
  "106": {
      "name": "Velas",
      "symbol": "VLX",
      "decimals": 18
  },
  "107": {
      "name": "Nebula X",
      "symbol": "NBX",
      "decimals": 18
  },
  "108": {
      "name": "ThunderCore Mainnet Ether",
      "symbol": "TT",
      "decimals": 18
  },
  "110": {
      "name": "Proton",
      "symbol": "XPR",
      "decimals": 4
  },
  "111": {
      "name": "EtherLite",
      "symbol": "ETL",
      "decimals": 18
  },
  "122": {
      "name": "Fuse",
      "symbol": "FUSE",
      "decimals": 18
  },
  "123": {
      "name": "Spark",
      "symbol": "SPARK",
      "decimals": 18
  },
  "124": {
      "name": "Decentralized Web Utility",
      "symbol": "DWU",
      "decimals": 18
  },
  "125": {
      "name": "OYchain Token",
      "symbol": "OY",
      "decimals": 18
  },
  "126": {
      "name": "OYchain Token",
      "symbol": "OY",
      "decimals": 18
  },
  "127": {
      "name": "Factory 127 Token",
      "symbol": "FETH",
      "decimals": 18
  },
  "128": {
      "name": "Huobi ECO Chain Native Token",
      "symbol": "HT",
      "decimals": 18
  },
  "137": {
      "name": "MATIC",
      "symbol": "MATIC",
      "decimals": 18
  },
  "141": {
      "name": "Belly",
      "symbol": "BELLY",
      "decimals": 18
  },
  "142": {
      "name": "Prodax",
      "symbol": "DAX",
      "decimals": 18
  },
  "162": {
      "name": "Lightstreams PHT",
      "symbol": "PHT",
      "decimals": 18
  },
  "163": {
      "name": "Lightstreams PHT",
      "symbol": "PHT",
      "decimals": 18
  },
  "168": {
      "name": "AIOZ",
      "symbol": "AIOZ",
      "decimals": 18
  },
  "170": {
      "name": "HOO",
      "symbol": "HOO",
      "decimals": 18
  },
  "172": {
      "name": "Latam-Blockchain Resil Test Native Token",
      "symbol": "usd",
      "decimals": 18
  },
  "186": {
      "name": "Seele",
      "symbol": "Seele",
      "decimals": 18
  },
  "188": {
      "name": "BTM",
      "symbol": "BTM",
      "decimals": 18
  },
  "189": {
      "name": "BTM",
      "symbol": "BTM",
      "decimals": 18
  },
  "199": {
      "name": "BitTorrent",
      "symbol": "BTT",
      "decimals": 18
  },
  "200": {
      "name": "xDAI",
      "symbol": "xDAI",
      "decimals": 18
  },
  "211": {
      "name": "Freight Trust Native",
      "symbol": "0xF",
      "decimals": 18
  },
  "218": {
      "name": "SoterOne Mainnet Ether",
      "symbol": "SOTER",
      "decimals": 18
  },
  "222": {
      "name": "ASK",
      "symbol": "ASK",
      "decimals": 18
  },
  "225": {
      "name": "LA",
      "symbol": "LA",
      "decimals": 18
  },
  "226": {
      "name": "TLA",
      "symbol": "TLA",
      "decimals": 18
  },
  "246": {
      "name": "Energy Web Token",
      "symbol": "EWT",
      "decimals": 18
  },
  "250": {
      "name": "Fantom",
      "symbol": "FTM",
      "decimals": 18
  },
  "256": {
      "name": "Huobi ECO Chain Test Native Token",
      "symbol": "htt",
      "decimals": 18
  },
  "258": {
      "name": "Setheum",
      "symbol": "SETM",
      "decimals": 18
  },
  "262": {
      "name": "Suren",
      "symbol": "SRN",
      "decimals": 18
  },
  "269": {
      "name": "High Performance Blockchain Ether",
      "symbol": "HPB",
      "decimals": 18
  },
  "288": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
  },
  "300": {
      "name": "xDAI",
      "symbol": "xDAI",
      "decimals": 18
  },
  "321": {
      "name": "KuCoin Token",
      "symbol": "KCS",
      "decimals": 18
  },
  "322": {
      "name": "KuCoin Testnet Token",
      "symbol": "tKCS",
      "decimals": 18
  },
  "333": {
      "name": "Web3Q",
      "symbol": "W3Q",
      "decimals": 18
  },
  "335": {
      "name": "Jewel",
      "symbol": "JEWEL",
      "decimals": 18
  },
  "336": {
      "name": "Shiden",
      "symbol": "SDN",
      "decimals": 18
  },
  "338": {
      "name": "Crypto.org Test Coin",
      "symbol": "TCRO",
      "decimals": 18
  },
  "361": {
      "name": "Theta Fuel",
      "symbol": "TFUEL",
      "decimals": 18
  },
  "363": {
      "name": "Theta Fuel",
      "symbol": "TFUEL",
      "decimals": 18
  },
  "364": {
      "name": "Theta Fuel",
      "symbol": "TFUEL",
      "decimals": 18
  },
  "365": {
      "name": "Theta Fuel",
      "symbol": "TFUEL",
      "decimals": 18
  },
  "369": {
      "name": "Pulse",
      "symbol": "PLS",
      "decimals": 18
  },
  "385": {
      "name": "Lisinski Ether",
      "symbol": "LISINSKI",
      "decimals": 18
  },
  "420": {
      "name": "Görli Ether",
      "symbol": "GOR",
      "decimals": 18
  },
  "499": {
      "name": "Rupaya",
      "symbol": "RUPX",
      "decimals": 18
  },
  "512": {
      "name": "Acuteangle Native Token",
      "symbol": "AAC",
      "decimals": 18
  },
  "513": {
      "name": "Acuteangle Native Token",
      "symbol": "AAC",
      "decimals": 18
  },
  "555": {
      "name": "CLASS COIN",
      "symbol": "CLASS",
      "decimals": 18
  },
  "558": {
      "name": "Tao",
      "symbol": "TAO",
      "decimals": 18
  },
  "588": {
      "name": "tMetis",
      "symbol": "METIS",
      "decimals": 18
  },
  "595": {
      "name": "Acala Mandala Token",
      "symbol": "mACA",
      "decimals": 18
  },
  "600": {
      "name": "Meshnyan Testnet Native Token",
      "symbol": "MESHT",
      "decimals": 18
  },
  "666": {
      "name": "Pixie Chain Testnet Native Token",
      "symbol": "PCTT",
      "decimals": 18
  },
  "686": {
      "name": "Karura Token",
      "symbol": "KAR",
      "decimals": 18
  },
  "707": {
      "name": "BCS Token",
      "symbol": "BCS",
      "decimals": 18
  },
  "708": {
      "name": "BCS Testnet Token",
      "symbol": "tBCS",
      "decimals": 18
  },
  "721": {
      "name": "Factory 127 Token",
      "symbol": "FETH",
      "decimals": 18
  },
  "777": {
      "name": "cTH",
      "symbol": "cTH",
      "decimals": 18
  },
  "787": {
      "name": "Acala Token",
      "symbol": "ACA",
      "decimals": 18
  },
  "788": {
      "name": "Aerochain Testnet",
      "symbol": "TAero",
      "decimals": 18
  },
  "803": {
      "name": "Haicoin",
      "symbol": "HAIC",
      "decimals": 18
  },
  "820": {
      "name": "Callisto Mainnet Ether",
      "symbol": "CLO",
      "decimals": 18
  },
  "821": {
      "name": "Callisto Testnet Ether",
      "symbol": "TCLO",
      "decimals": 18
  },
  "880": {
      "name": "AMBROS",
      "symbol": "AMBR",
      "decimals": 18
  },
  "888": {
      "name": "Wancoin",
      "symbol": "WAN",
      "decimals": 18
  },
  "900": {
      "name": "Garizon",
      "symbol": "GAR",
      "decimals": 18
  },
  "901": {
      "name": "Garizon",
      "symbol": "GAR",
      "decimals": 18
  },
  "902": {
      "name": "Garizon",
      "symbol": "GAR",
      "decimals": 18
  },
  "903": {
      "name": "Garizon",
      "symbol": "GAR",
      "decimals": 18
  },
  "940": {
      "name": "Test Pulse",
      "symbol": "tPLS",
      "decimals": 18
  },
  "941": {
      "name": "Test Pulse",
      "symbol": "tPLS",
      "decimals": 18
  },
  "942": {
      "name": "Test Pulse",
      "symbol": "tPLS",
      "decimals": 18
  },
  "977": {
      "name": "Nepal Blockchain Network Ether",
      "symbol": "YETI",
      "decimals": 18
  },
  "998": {
      "name": "Lucky",
      "symbol": "L99",
      "decimals": 18
  },
  "999": {
      "name": "Wancoin",
      "symbol": "WAN",
      "decimals": 18
  },
  "1001": {
      "name": "KLAY",
      "symbol": "KLAY",
      "decimals": 18
  },
  "1007": {
      "name": "Newton",
      "symbol": "NEW",
      "decimals": 18
  },
  "1008": {
      "name": "Eurus",
      "symbol": "EUN",
      "decimals": 18
  },
  "1010": {
      "name": "Evrice",
      "symbol": "EVC",
      "decimals": 18
  },
  "1012": {
      "name": "Newton",
      "symbol": "NEW",
      "decimals": 18
  },
  "1022": {
      "name": "Sakura",
      "symbol": "SKU",
      "decimals": 18
  },
  "1023": {
      "name": "Clover",
      "symbol": "CLV",
      "decimals": 18
  },
  "1024": {
      "name": "Clover",
      "symbol": "CLV",
      "decimals": 18
  },
  "1028": {
      "name": "BitTorrent",
      "symbol": "BTT",
      "decimals": 18
  },
  "1030": {
      "name": "CFX",
      "symbol": "CFX",
      "decimals": 18
  },
  "1088": {
      "name": "Metis",
      "symbol": "METIS",
      "decimals": 18
  },
  "1139": {
      "name": "MathChain",
      "symbol": "MATH",
      "decimals": 18
  },
  "1140": {
      "name": "MathChain",
      "symbol": "MATH",
      "decimals": 18
  },
  "1197": {
      "name": "Iora",
      "symbol": "IORA",
      "decimals": 18
  },
  "1201": {
      "name": "AVIS",
      "symbol": "AVIS",
      "decimals": 18
  },
  "1202": {
      "name": "World Trade Token",
      "symbol": "WTT",
      "decimals": 18
  },
  "1213": {
      "name": "Popcat",
      "symbol": "POP",
      "decimals": 18
  },
  "1214": {
      "name": "EnterCoin",
      "symbol": "ENTER",
      "decimals": 18
  },
  "1280": {
      "name": "HALO",
      "symbol": "HO",
      "decimals": 18
  },
  "1284": {
      "name": "Glimmer",
      "symbol": "GLMR",
      "decimals": 18
  },
  "1285": {
      "name": "Moonriver",
      "symbol": "MOVR",
      "decimals": 18
  },
  "1286": {
      "name": "Rocs",
      "symbol": "ROC",
      "decimals": 18
  },
  "1287": {
      "name": "Dev",
      "symbol": "DEV",
      "decimals": 18
  },
  "1288": {
      "name": "Rocs",
      "symbol": "ROC",
      "decimals": 18
  },
  "1337": {
      "name": "CPAY",
      "symbol": "CPAY",
      "decimals": 18
  },
  "1618": {
      "name": "Catecoin",
      "symbol": "CATE",
      "decimals": 18
  },
  "1620": {
      "name": "Atheios Ether",
      "symbol": "ATH",
      "decimals": 18
  },
  "1657": {
      "name": "Bitcoin Asset",
      "symbol": "BTA",
      "decimals": 18
  },
  "1688": {
      "name": "LUDAN",
      "symbol": "LUDAN",
      "decimals": 18
  },
  "1856": {
      "name": "Teslafunds Ether",
      "symbol": "TSF",
      "decimals": 18
  },
  "1898": {
      "name": "BOYACoin",
      "symbol": "BOY",
      "decimals": 18
  },
  "1987": {
      "name": "EtherGem Ether",
      "symbol": "EGEM",
      "decimals": 18
  },
  "2001": {
      "name": "milkAda",
      "symbol": "milkAda",
      "decimals": 18
  },
  "2020": {
      "name": "Fourtwenty",
      "symbol": "420",
      "decimals": 18
  },
  "2021": {
      "name": "Edge",
      "symbol": "EDG",
      "decimals": 18
  },
  "2022": {
      "name": "Testnet Edge",
      "symbol": "tEDG",
      "decimals": 18
  },
  "2025": {
      "name": "Rangers Protocol Gas",
      "symbol": "RPG",
      "decimals": 18
  },
  "2100": {
      "name": "Ecoball Coin",
      "symbol": "ECO",
      "decimals": 18
  },
  "2101": {
      "name": "Espuma Coin",
      "symbol": "ECO",
      "decimals": 18
  },
  "2213": {
      "name": "EVA",
      "symbol": "EVA",
      "decimals": 18
  },
  "2221": {
      "name": "Kava",
      "symbol": "KAVA",
      "decimals": 18
  },
  "2559": {
      "name": "KorthoChain",
      "symbol": "KTO",
      "decimals": 11
  },
  "3000": {
      "name": "CPAY",
      "symbol": "CPAY",
      "decimals": 18
  },
  "3001": {
      "name": "CPAY",
      "symbol": "CPAY",
      "decimals": 18
  },
  "3331": {
      "name": "ZCore",
      "symbol": "ZCR",
      "decimals": 18
  },
  "3333": {
      "name": "Web3Q",
      "symbol": "W3Q",
      "decimals": 18
  },
  "3334": {
      "name": "Web3Q",
      "symbol": "W3Q",
      "decimals": 18
  },
  "3400": {
      "name": "PRB",
      "symbol": "PRB",
      "decimals": 18
  },
  "3500": {
      "name": "PRB",
      "symbol": "PRB",
      "decimals": 18
  },
  "3690": {
      "name": "Bittex",
      "symbol": "BTX",
      "decimals": 18
  },
  "3966": {
      "name": "DYNO Token",
      "symbol": "DYNO",
      "decimals": 18
  },
  "3967": {
      "name": "DYNO Token",
      "symbol": "tDYNO",
      "decimals": 18
  },
  "4002": {
      "name": "Fantom",
      "symbol": "FTM",
      "decimals": 18
  },
  "4102": {
      "name": "testAIOZ",
      "symbol": "AIOZ",
      "decimals": 18
  },
  "4689": {
      "name": "IoTeX",
      "symbol": "IOTX",
      "decimals": 18
  },
  "4690": {
      "name": "IoTeX",
      "symbol": "IOTX",
      "decimals": 18
  },
  "4918": {
      "name": "Venidium",
      "symbol": "XVM",
      "decimals": 18
  },
  "5197": {
      "name": "EraSwap",
      "symbol": "ES",
      "decimals": 18
  },
  "5315": {
      "name": "UZMI",
      "symbol": "UZMI",
      "decimals": 18
  },
  "5700": {
      "name": "Testnet Syscoin",
      "symbol": "tSYS",
      "decimals": 18
  },
  "5777": {
      "name": "DigestCoin",
      "symbol": "DGCC",
      "decimals": 18
  },
  "5851": {
      "name": "ONG",
      "symbol": "ONG",
      "decimals": 9
  },
  "5869": {
      "name": "Rubid",
      "symbol": "RBD",
      "decimals": 18
  },
  "6626": {
      "name": "Pixie Chain Native Token",
      "symbol": "PIX",
      "decimals": 18
  },
  "7341": {
      "name": "Shyft",
      "symbol": "SHYFT",
      "decimals": 18
  },
  "7878": {
      "name": "Hazlor Test Coin",
      "symbol": "TSCAS",
      "decimals": 18
  },
  "8000": {
      "name": "Tele",
      "symbol": "TELE",
      "decimals": 18
  },
  "8001": {
      "name": "Tele",
      "symbol": "TELE",
      "decimals": 18
  },
  "8029": {
      "name": "MDGL Token",
      "symbol": "MDGLT",
      "decimals": 18
  },
  "8080": {
      "name": "Testnet RNA",
      "symbol": "tRNA",
      "decimals": 18
  },
  "8217": {
      "name": "KLAY",
      "symbol": "KLAY",
      "decimals": 18
  },
  "8285": {
      "name": "Kortho Test",
      "symbol": "KTO",
      "decimals": 11
  },
  "8723": {
      "name": "TOOL Global",
      "symbol": "OLO",
      "decimals": 18
  },
  "8724": {
      "name": "TOOL Global",
      "symbol": "OLO",
      "decimals": 18
  },
  "8888": {
      "name": "AMBROS",
      "symbol": "AMBR",
      "decimals": 18
  },
  "8995": {
      "name": "BERG",
      "symbol": "U+25B3",
      "decimals": 18
  },
  "9000": {
      "name": "test-Evmos",
      "symbol": "tEVMOS",
      "decimals": 18
  },
  "9001": {
      "name": "Evmos",
      "symbol": "EVMOS",
      "decimals": 18
  },
  "9100": {
      "name": "GN Coin",
      "symbol": "GNC",
      "decimals": 18
  },
  "9527": {
      "name": "Rangers Protocol Gas",
      "symbol": "tRPG",
      "decimals": 18
  },
  "9999": {
      "name": "MYN",
      "symbol": "MYN",
      "decimals": 18
  },
  "10000": {
      "name": "Bitcoin Cash",
      "symbol": "BCH",
      "decimals": 18
  },
  "10001": {
      "name": "Bitcoin Cash Test Token",
      "symbol": "BCHT",
      "decimals": 18
  },
  "10101": {
      "name": "GEN",
      "symbol": "GEN",
      "decimals": 18
  },
  "10823": {
      "name": "CryptoCoinPay",
      "symbol": "CCP",
      "decimals": 18
  },
  "11111": {
      "name": "WAGMI",
      "symbol": "WGM",
      "decimals": 18
  },
  "11437": {
      "name": "Shyft Test Token",
      "symbol": "SHYFTT",
      "decimals": 18
  },
  "12051": {
      "name": "ZERO",
      "symbol": "tZERO",
      "decimals": 18
  },
  "12052": {
      "name": "ZERO",
      "symbol": "ZERO",
      "decimals": 18
  },
  "13381": {
      "name": "Phoenix",
      "symbol": "PHX",
      "decimals": 18
  },
  "16000": {
      "name": "MetaDot Token",
      "symbol": "MTT",
      "decimals": 18
  },
  "16001": {
      "name": "MetaDot Token TestNet",
      "symbol": "MTT-test",
      "decimals": 18
  },
  "19845": {
      "name": "BTCIX Network",
      "symbol": "BTCIX",
      "decimals": 18
  },
  "21816": {
      "name": "Omlira",
      "symbol": "OML",
      "decimals": 18
  },
  "24484": {
      "name": "Webchain Ether",
      "symbol": "WEB",
      "decimals": 18
  },
  "24734": {
      "name": "MintMe.com Coin",
      "symbol": "MINTME",
      "decimals": 18
  },
  "31102": {
      "name": "Ethersocial Network Ether",
      "symbol": "ESN",
      "decimals": 18
  },
  "31337": {
      "name": "GoChain Coin",
      "symbol": "GO",
      "decimals": 18
  },
  "32659": {
      "name": "Fusion",
      "symbol": "FSN",
      "decimals": 18
  },
  "39797": {
      "name": "Energi",
      "symbol": "NRG",
      "decimals": 18
  },
  "42069": {
      "name": "pegglecoin",
      "symbol": "peggle",
      "decimals": 18
  },
  "42161": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
  },
  "42220": {
      "name": "CELO",
      "symbol": "CELO",
      "decimals": 18
  },
  "42261": {
      "name": "Emerald Rose",
      "symbol": "ROSE",
      "decimals": 18
  },
  "42262": {
      "name": "Emerald Rose",
      "symbol": "ROSE",
      "decimals": 18
  },
  "43110": {
      "name": "Athereum Ether",
      "symbol": "ATH",
      "decimals": 18
  },
  "43113": {
      "name": "Avalanche",
      "symbol": "AVAX",
      "decimals": 18
  },
  "43114": {
      "name": "Avalanche",
      "symbol": "AVAX",
      "decimals": 18
  },
  "44787": {
      "name": "CELO",
      "symbol": "CELO",
      "decimals": 18
  },
  "45000": {
      "name": "BNB",
      "symbol": "BNB",
      "decimals": 18
  },
  "47805": {
      "name": "REI",
      "symbol": "REI",
      "decimals": 18
  },
  "49797": {
      "name": "Energi",
      "symbol": "NRG",
      "decimals": 18
  },
  "53935": {
      "name": "Jewel",
      "symbol": "JEWEL",
      "decimals": 18
  },
  "55555": {
      "name": "Rei",
      "symbol": "REI",
      "decimals": 18
  },
  "55556": {
      "name": "tRei",
      "symbol": "tREI",
      "decimals": 18
  },
  "60000": {
      "name": "TKM",
      "symbol": "TKM",
      "decimals": 18
  },
  "60001": {
      "name": "TKM",
      "symbol": "TKM",
      "decimals": 18
  },
  "60002": {
      "name": "TKM",
      "symbol": "TKM",
      "decimals": 18
  },
  "60103": {
      "name": "TKM",
      "symbol": "TKM",
      "decimals": 18
  },
  "62320": {
      "name": "CELO",
      "symbol": "CELO",
      "decimals": 18
  },
  "63000": {
      "name": "eCredits",
      "symbol": "ECS",
      "decimals": 18
  },
  "63001": {
      "name": "eCredits",
      "symbol": "ECS",
      "decimals": 18
  },
  "70000": {
      "name": "TKM",
      "symbol": "TKM",
      "decimals": 18
  },
  "70001": {
      "name": "TKM",
      "symbol": "TKM",
      "decimals": 18
  },
  "70002": {
      "name": "TKM",
      "symbol": "TKM",
      "decimals": 18
  },
  "70103": {
      "name": "TKM",
      "symbol": "TKM",
      "decimals": 18
  },
  "71393": {
      "name": "CKB",
      "symbol": "CKB",
      "decimals": 8
  },
  "73799": {
      "name": "Volta Token",
      "symbol": "VT",
      "decimals": 18
  },
  "78110": {
      "name": "Firenze Ether",
      "symbol": "FIN",
      "decimals": 18
  },
  "80001": {
      "name": "MATIC",
      "symbol": "MATIC",
      "decimals": 18
  },
  "99998": {
      "name": "UBC",
      "symbol": "UBC",
      "decimals": 18
  },
  "99999": {
      "name": "UBC",
      "symbol": "UBC",
      "decimals": 18
  },
  "100000": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "100001": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "100002": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "100003": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "100004": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "100005": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "100006": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "100007": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "100008": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "108801": {
      "name": "Brother",
      "symbol": "BRO",
      "decimals": 18
  },
  "110000": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "110001": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "110002": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "110003": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "110004": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "110005": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "110006": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "110007": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "110008": {
      "name": "QKC",
      "symbol": "QKC",
      "decimals": 18
  },
  "200101": {
      "name": "milkTAda",
      "symbol": "milkTAda",
      "decimals": 18
  },
  "200625": {
      "name": "Akroma Ether",
      "symbol": "AKA",
      "decimals": 18
  },
  "201018": {
      "name": "ATP",
      "symbol": "atp",
      "decimals": 18
  },
  "201030": {
      "name": "ATP",
      "symbol": "atp",
      "decimals": 18
  },
  "210425": {
      "name": "LAT",
      "symbol": "lat",
      "decimals": 18
  },
  "234666": {
      "name": "HAYMO",
      "symbol": "HYM",
      "decimals": 18
  },
  "246529": {
      "name": "ARTIS sigma1 Ether",
      "symbol": "ATS",
      "decimals": 18
  },
  "246785": {
      "name": "ARTIS tau1 Ether",
      "symbol": "tATS",
      "decimals": 18
  },
  "281121": {
      "name": "SoChain",
      "symbol": "$OC",
      "decimals": 18
  },
  "333888": {
      "name": "tPolis",
      "symbol": "tPOLIS",
      "decimals": 18
  },
  "333999": {
      "name": "Polis",
      "symbol": "POLIS",
      "decimals": 18
  },
  "421611": {
      "name": "Arbitrum Rinkeby Ether",
      "symbol": "ARETH",
      "decimals": 18
  },
  "444900": {
      "name": "Weelink Chain Token",
      "symbol": "tWLK",
      "decimals": 18
  },
  "666666": {
      "name": "VS",
      "symbol": "VS",
      "decimals": 18
  },
  "888888": {
      "name": "VS",
      "symbol": "VS",
      "decimals": 18
  },
  "955305": {
      "name": "ELV",
      "symbol": "ELV",
      "decimals": 18
  },
  "1313114": {
      "name": "Etho Protocol",
      "symbol": "ETHO",
      "decimals": 18
  },
  "1313500": {
      "name": "Xerom Ether",
      "symbol": "XERO",
      "decimals": 18
  },
  "1337702": {
      "name": "kintsugi Ethere",
      "symbol": "kiETH",
      "decimals": 18
  },
  "2203181": {
      "name": "LAT",
      "symbol": "lat",
      "decimals": 18
  },
  "7762959": {
      "name": "Musicoin",
      "symbol": "MUSIC",
      "decimals": 18
  },
  "11155111": {
      "name": "Sepolia Ether",
      "symbol": "SEP",
      "decimals": 18
  },
  "13371337": {
      "name": "PepChain Churchill Ether",
      "symbol": "TPEP",
      "decimals": 18
  },
  "18289463": {
      "name": "IOLite Ether",
      "symbol": "ILT",
      "decimals": 18
  },
  "20181205": {
      "name": "quarkblockchain Native Token",
      "symbol": "QKI",
      "decimals": 18
  },
  "28945486": {
      "name": "Auxilium coin",
      "symbol": "AUX",
      "decimals": 18
  },
  "35855456": {
      "name": "JOYS",
      "symbol": "JOYS",
      "decimals": 18
  },
  "61717561": {
      "name": "Aquachain Ether",
      "symbol": "AQUA",
      "decimals": 18
  },
  "99415706": {
      "name": "TOYS",
      "symbol": "TOYS",
      "decimals": 18
  },
  "192837465": {
      "name": "Gather",
      "symbol": "GTH",
      "decimals": 18
  },
  "245022926": {
      "name": "Neon",
      "symbol": "NEON",
      "decimals": 18
  },
  "245022934": {
      "name": "Neon",
      "symbol": "NEON",
      "decimals": 18
  },
  "245022940": {
      "name": "Neon",
      "symbol": "NEON",
      "decimals": 18
  },
  "311752642": {
      "name": "OLT",
      "symbol": "OLT",
      "decimals": 18
  },
  "356256156": {
      "name": "Gather",
      "symbol": "GTH",
      "decimals": 18
  },
  "486217935": {
      "name": "Gather",
      "symbol": "GTH",
      "decimals": 18
  },
  "1122334455": {
      "name": "IPOS Network Ether",
      "symbol": "IPOS",
      "decimals": 18
  },
  "1313161554": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
  },
  "1313161555": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
  },
  "1313161556": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
  },
  "1666600000": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
  },
  "1666600001": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
  },
  "1666600002": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
  },
  "1666600003": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
  },
  "1666700000": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
  },
  "1666700001": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
  },
  "1666700002": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
  },
  "1666700003": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
  },
  "2021121117": {
      "name": "DataHoppers",
      "symbol": "HOP",
      "decimals": 18
  },
  "3125659152": {
      "name": "Pirl Ether",
      "symbol": "PIRL",
      "decimals": 18
  },
  "4216137055": {
      "name": "OLT",
      "symbol": "OLT",
      "decimals": 18
  },
  "11297108099": {
      "name": "PALM",
      "symbol": "PALM",
      "decimals": 18
  },
  "11297108109": {
      "name": "PALM",
      "symbol": "PALM",
      "decimals": 18
  },
  "197710212030": {
      "name": "Ntity",
      "symbol": "NTT",
      "decimals": 18
  },
  "197710212031": {
      "name": "Ntity Haradev",
      "symbol": "NTTH",
      "decimals": 18
  },
  "6022140761023": {
      "name": "Molereum Ether",
      "symbol": "MOLE",
      "decimals": 18
  },
  "868455272153094": {
      "name": "CKB",
      "symbol": "CKB",
      "decimals": 8
  }
};

exports.ERC20ABI = ERC20ABI;
exports.CHAIN_DETAILS = CHAIN_DETAILS;