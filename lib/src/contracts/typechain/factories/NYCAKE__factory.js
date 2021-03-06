"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NYCAKE__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class NYCAKE__factory extends contracts_1.ContractFactory {
    constructor(linkLibraryAddresses, signer) {
        super(_abi, NYCAKE__factory.linkBytecode(linkLibraryAddresses), signer);
    }
    static linkBytecode(linkLibraryAddresses) {
        let linkedBytecode = _bytecode;
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$ce39e7eba0e8c210ce522c13d692fbaca1\\$__", "g"), linkLibraryAddresses["__$ce39e7eba0e8c210ce522c13d692fbaca1$__"]
            .replace(/^0x/, "")
            .toLowerCase());
        return linkedBytecode;
    }
    deploy(routerAddress, marketingWalletAddress, overrides) {
        return super.deploy(routerAddress, marketingWalletAddress, overrides || {});
    }
    getDeployTransaction(routerAddress, marketingWalletAddress, overrides) {
        return super.getDeployTransaction(routerAddress, marketingWalletAddress, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.NYCAKE__factory = NYCAKE__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "routerAddress",
                type: "address",
            },
            {
                internalType: "address payable",
                name: "marketingWalletAddress",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isExcluded",
                type: "bool",
            },
        ],
        name: "ExcludeFromFees",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "newValue",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "oldValue",
                type: "uint256",
            },
        ],
        name: "GasForProcessingUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newLiquidityWallet",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "oldLiquidityWallet",
                type: "address",
            },
        ],
        name: "LiquidityWalletUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "iterations",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "claims",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "lastProcessedIndex",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "bool",
                name: "automatic",
                type: "bool",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "gas",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "processor",
                type: "address",
            },
        ],
        name: "ProcessedDividendTracker",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "dividends",
                type: "uint256",
            },
        ],
        name: "SendDividends",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pair",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bool",
                name: "value",
                type: "bool",
            },
        ],
        name: "SetAutomatedMarketMakerPair",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "oldAddress",
                type: "address",
            },
        ],
        name: "UpdateDividendTracker",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "oldAddress",
                type: "address",
            },
        ],
        name: "UpdateUniswapV2Router",
        type: "event",
    },
    {
        inputs: [],
        name: "CAKE",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "BlacklistMarketfee",
                type: "uint256",
            },
        ],
        name: "SetBlacklistFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "_isBlacklisted",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "_isExcludedFromMaxWallet",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_marketingWalletAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_maxWalletAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "automatedMarketMakerPairs",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bool",
                name: "value",
                type: "bool",
            },
        ],
        name: "blacklistAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "buyFees",
        outputs: [
            {
                internalType: "uint256",
                name: "dividendsFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "marketingFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "liquidityFee",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "deadWallet",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "dividendTokenBalanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "dividendTracker",
        outputs: [
            {
                internalType: "contract NYCAKEDividendTracker",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "excludeFromDividends",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bool",
                name: "excluded",
                type: "bool",
            },
        ],
        name: "excludeFromFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bool",
                name: "value",
                type: "bool",
            },
        ],
        name: "excludeFromMaxWallet",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "gasForProcessing",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "getAccountDividendsInfo",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "getAccountDividendsInfoAtIndex",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getClaimWait",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getLastProcessedIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getMaxWalletAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getNumberOfDividendTokenHolders",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getSumOfBuyFees",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getSumOfSellFees",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getTotalDividendsDistributed",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isExcludedFromFees",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxWalletMode",
        outputs: [
            {
                internalType: "enum NYCAKE.MaxWalletMode",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "gas",
                type: "uint256",
            },
        ],
        name: "processDividendTracker",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "recover",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "sellFees",
        outputs: [
            {
                internalType: "uint256",
                name: "dividendsFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "marketingFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "liquidityFee",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pair",
                type: "address",
            },
            {
                internalType: "bool",
                name: "value",
                type: "bool",
            },
        ],
        name: "setAutomatedMarketMakerPair",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_dividendsFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_marketingFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_liquidityFee",
                type: "uint256",
            },
        ],
        name: "setBuyFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "value",
                type: "bool",
            },
        ],
        name: "setIsTradingEnabled",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "wallet",
                type: "address",
            },
        ],
        name: "setMarketingWallet",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "setMaxWalletAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum NYCAKE.MaxWalletMode",
                name: "mode",
                type: "uint8",
            },
        ],
        name: "setMaxWalletMode",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_dividendsFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_marketingFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_liquidityFee",
                type: "uint256",
            },
        ],
        name: "setSellFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_whaleFee",
                type: "uint256",
            },
        ],
        name: "setWhaleFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "blackfee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "blackblock",
                type: "uint256",
            },
        ],
        name: "setblackblock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "swapTokensAtAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "uniswapV2Pair",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "uniswapV2Router",
        outputs: [
            {
                internalType: "contract IUniswapV2Router02",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "claimWait",
                type: "uint256",
            },
        ],
        name: "updateClaimWait",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newAddress",
                type: "address",
            },
        ],
        name: "updateDividendTracker",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newValue",
                type: "uint256",
            },
        ],
        name: "updateGasForProcessing",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newAddress",
                type: "address",
            },
        ],
        name: "updateUniswapV2Router",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "whaleFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "withdrawableDividendOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60a0604052605f6009556005600a55600b805460ff19908116600117909155600d80546001600160a01b03191661dead1790557f0e09fabb73bd3ade0a17ecc321fd13a19e81ce820000000000000000000000006080526a01a784379d99db42000000600e556000600f55601460185560198054909116905562061a80601a556032601b553480156200009157600080fd5b5060405162007d3038038062007d3083398181016040526040811015620000b757600080fd5b508051602091820151604080518082018252600b81526a4e6577596f726b43414b4560a81b818601908152825180840190935260068352654e5943414b4560d01b95830195909552805193949293909262000116916003919062000e12565b5080516200012c90600490602084019062000e12565b5050506000620001416200079b60201b60201c565b600580546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506040516200019d9062000e97565b604051809103906000f080158015620001ba573d6000803e3d6000fd5b50600b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555081604051620001f09062000ea5565b6001600160a01b03909116815260405190819003602001906000f0801580156200021e573d6000803e3d6000fd5b50600c60006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060008290506000816001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b1580156200028657600080fd5b505afa1580156200029b573d6000803e3d6000fd5b505050506040513d6020811015620002b257600080fd5b5051604080516315ab88c960e31b815290516001600160a01b039283169263c9c653969230929187169163ad5c464891600480820192602092909190829003018186803b1580156200030357600080fd5b505afa15801562000318573d6000803e3d6000fd5b505050506040513d60208110156200032f57600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301525160448083019260209291908290030181600087803b1580156200038257600080fd5b505af115801562000397573d6000803e3d6000fd5b505050506040513d6020811015620003ae57600080fd5b5051600680546001600160a01b038086166001600160a01b03199283161790925560078054928416929091169190911790559050620003ef8160016200079f565b620003fa83620008e8565b600b546040805163031e79db60e41b81526101009092046001600160a01b031660048301819052905190916331e79db091602480830192600092919082900301818387803b1580156200044c57600080fd5b505af115801562000461573d6000803e3d6000fd5b5050600b54600c546040805163031e79db60e41b81526001600160a01b039283166004820152905161010090930490911693506331e79db0925060248082019260009290919082900301818387803b158015620004bd57600080fd5b505af1158015620004d2573d6000803e3d6000fd5b5050600b546040805163031e79db60e41b815230600482015290516101009092046001600160a01b031693506331e79db0925060248082019260009290919082900301818387803b1580156200052757600080fd5b505af11580156200053c573d6000803e3d6000fd5b5050600b5461010090046001600160a01b031691506331e79db0905062000562620009e6565b6040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b158015620005a257600080fd5b505af1158015620005b7573d6000803e3d6000fd5b5050600b54600d546040805163031e79db60e41b81526001600160a01b039283166004820152905161010090930490911693506331e79db0925060248082019260009290919082900301818387803b1580156200061357600080fd5b505af115801562000628573d6000803e3d6000fd5b50505050600b60019054906101000a90046001600160a01b03166001600160a01b03166331e79db0836040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156200069157600080fd5b505af1158015620006a6573d6000803e3d6000fd5b50505050620006c6620006be620009e660201b60201c565b6001620009f5565b620006d3306001620009f5565b600c54620006ec906001600160a01b03166001620009f5565b62000702620006fa620009e6565b600162000b11565b6200070f30600162000b11565b600d5462000728906001600160a01b0316600162000b11565b620007366000600162000b11565b600c546200074f906001600160a01b0316600162000b11565b6200075f60066008600262000b98565b6200076f60066008600262000c1a565b620007916200077d620009e6565b6c01431e0fae6d7217caa000000062000c9c565b5050505062000eca565b3390565b6001600160a01b0382166000908152601d602052604090205460ff1615158115151415620007ff5760405162461bcd60e51b815260040180806020018281038252604081526020018062007c9e6040913960400191505060405180910390fd5b6001600160a01b0382166000908152601d60205260409020805460ff19168215801591909117909155620008ac57600b60019054906101000a90046001600160a01b03166001600160a01b03166331e79db0836040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156200089257600080fd5b505af1158015620008a7573d6000803e3d6000fd5b505050505b604051811515906001600160a01b038416907fffa9187bf1f18bf477bd0ea1bcbb64e93b6a98132473929edfce215cd9b16fab90600090a35050565b620008f26200079b565b6005546001600160a01b0390811691161462000944576040805162461bcd60e51b8152602060048201819052602482015260008051602062007cde833981519152604482015290519081900360640190fd5b6200094e620009e6565b6001600160a01b0316816001600160a01b03161415620009a05760405162461bcd60e51b815260040180806020018281038252602481526020018062007c7a6024913960400191505060405180910390fd5b60198054610100600160a81b0319166101006001600160a01b0384811682029290921792839055620009d69204166001620009f5565b620009e381600162000b11565b50565b6005546001600160a01b031690565b620009ff6200079b565b6005546001600160a01b0390811691161462000a51576040805162461bcd60e51b8152602060048201819052602482015260008051602062007cde833981519152604482015290519081900360640190fd5b6001600160a01b0382166000908152601c602052604090205460ff161515811515141562000ab15760405162461bcd60e51b815260040180806020018281038252603281526020018062007cfe6032913960400191505060405180910390fd5b6001600160a01b0382166000818152601c6020908152604091829020805460ff1916851515908117909155825190815291517f9d8f7706ea1113d1a167b526eca956215946dd36cc7df39eb16180222d8b5df79281900390910190a25050565b62000b1b6200079b565b6005546001600160a01b0390811691161462000b6d576040805162461bcd60e51b8152602060048201819052602482015260008051602062007cde833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152601160205260409020805460ff1916911515919091179055565b62000ba26200079b565b6005546001600160a01b0390811691161462000bf4576040805162461bcd60e51b8152602060048201819052602482015260008051602062007cde833981519152604482015290519081900360640190fd5b604080516060810182528481526020810184905201819052601292909255601355601455565b62000c246200079b565b6005546001600160a01b0390811691161462000c76576040805162461bcd60e51b8152602060048201819052602482015260008051602062007cde833981519152604482015290519081900360640190fd5b604080516060810182528481526020810184905201819052601592909255601655601755565b6001600160a01b03821662000cf8576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b62000d066000838362000dab565b62000d228160025462000db060201b620029f41790919060201c565b6002556001600160a01b0382166000908152602081815260409091205462000d55918390620029f462000db0821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b60008282018381101562000e0b576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1062000e5557805160ff191683800117855562000e85565b8280016001018555821562000e85579182015b8281111562000e8557825182559160200191906001019062000e68565b5062000e9392915062000eb3565b5090565b612338806200505c83390190565b6108e6806200739483390190565b5b8082111562000e93576000815560010162000eb4565b60805160601c61416a62000ef2600039806113de52806139ed5280613a17525061416a6000f3fe6080604052600436106103bc5760003560e01c8063700bb191116101f2578063ad56c13c1161010d578063dd62ed3e116100a0578063e7841ec01161006f578063e7841ec014610dd1578063e98030c714610de6578063f27fd25414610e10578063f2fde38b14610e3a576103c3565b8063dd62ed3e14610d39578063e0f3ccf514610d74578063e2f4560514610da7578063e4748b9e14610dbc576103c3565b8063ce746024116100dc578063ce74602414610c89578063d1d7d7ef14610c9e578063d2fcc00114610cd1578063d4b81cee14610d0c576103c3565b8063ad56c13c14610b73578063b62496f514610bf1578063c024666814610c24578063c1d520f114610c5f576103c3565b806395d89b4111610185578063a26579ad11610154578063a26579ad14610ab9578063a457c2d714610ace578063a8b9d24014610b07578063a9059cbb14610b3a576103c3565b806395d89b4114610a2a5780639a7a23d614610a3f5780639c1b8af514610a7a5780639ea41eea14610a8f576103c3565b806385141a77116101c157806385141a77146109a3578063871c128d146109b857806388bdd9be146109e25780638da5cb5b14610a15576103c3565b8063700bb1911461091c57806370a0823114610946578063715018a61461097957806380abd68e1461098e576103c3565b80634144d9e4116102e2578063559ef2251161027557806365b8dbc01161024457806365b8dbc01461088c5780636843cd84146108bf5780636c0a24eb146108f25780636c0cd64e14610907576103c3565b8063559ef225146107e25780635d098b381461080e578063645a51131461084157806364b0f65314610877576103c3565b80634e71d92d116102b15780634e71d92d146107555780634fbee1931461076a5780635148f1221461079d5780635303da3e146107cd576103c3565b80634144d9e4146106db578063455a4396146106f057806349bd5a5e1461072b5780634ca6ef2814610740576103c3565b80631cdd3be31161035a57806330bb4cff1161032957806330bb4cff1461062f578063313ce5671461064457806331e79db01461066f57806339509351146106a2576103c3565b80631cdd3be31461057a57806323b872dd146105ad57806327a14fc2146105f05780632c1f52161461061a576103c3565b80630d075d9c116103965780630d075d9c146104c65780630f683e90146104fe5780631694505e1461053457806318160ddd14610565576103c3565b806306fdde03146103c8578063095ea7b31461045257806309c95a1b1461049f576103c3565b366103c357005b600080fd5b3480156103d457600080fd5b506103dd610e6d565b6040805160208082528351818301528351919283929083019185019080838360005b838110156104175781810151838201526020016103ff565b50505050905090810190601f1680156104445780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561045e57600080fd5b5061048b6004803603604081101561047557600080fd5b506001600160a01b038135169060200135610f03565b604080519115158252519081900360200190f35b3480156104ab57600080fd5b506104b4610f21565b60408051918252519081900360200190f35b3480156104d257600080fd5b506104fc600480360360608110156104e957600080fd5b5080359060208101359060400135610f27565b005b34801561050a57600080fd5b506104fc6004803603606081101561052157600080fd5b5080359060208101359060400135610fa5565b34801561054057600080fd5b50610549611023565b604080516001600160a01b039092168252519081900360200190f35b34801561057157600080fd5b506104b4611032565b34801561058657600080fd5b5061048b6004803603602081101561059d57600080fd5b50356001600160a01b0316611038565b3480156105b957600080fd5b5061048b600480360360608110156105d057600080fd5b506001600160a01b0381358116916020810135909116906040013561104d565b3480156105fc57600080fd5b506104fc6004803603602081101561061357600080fd5b50356110d4565b34801561062657600080fd5b50610549611177565b34801561063b57600080fd5b506104b461118b565b34801561065057600080fd5b5061065961120c565b6040805160ff9092168252519081900360200190f35b34801561067b57600080fd5b506104fc6004803603602081101561069257600080fd5b50356001600160a01b0316611211565b3480156106ae57600080fd5b5061048b600480360360408110156106c557600080fd5b506001600160a01b0381351690602001356112e8565b3480156106e757600080fd5b50610549611336565b3480156106fc57600080fd5b506104fc6004803603604081101561071357600080fd5b506001600160a01b038135169060200135151561134a565b34801561073757600080fd5b506105496113cd565b34801561074c57600080fd5b506105496113dc565b34801561076157600080fd5b506104fc611400565b34801561077657600080fd5b5061048b6004803603602081101561078d57600080fd5b50356001600160a01b0316611489565b3480156107a957600080fd5b506104fc600480360360408110156107c057600080fd5b50803590602001356114a7565b3480156107d957600080fd5b506104b461150a565b3480156107ee57600080fd5b506104fc6004803603602081101561080557600080fd5b5035151561153c565b34801561081a57600080fd5b506104fc6004803603602081101561083157600080fd5b50356001600160a01b03166115a7565b34801561084d57600080fd5b50610856611699565b6040518082600281111561086657fe5b815260200191505060405180910390f35b34801561088357600080fd5b506104b46116a2565b34801561089857600080fd5b506104fc600480360360208110156108af57600080fd5b50356001600160a01b03166116f2565b3480156108cb57600080fd5b506104b4600480360360208110156108e257600080fd5b50356001600160a01b0316611977565b3480156108fe57600080fd5b506104b4611a0d565b34801561091357600080fd5b506104b4611a13565b34801561092857600080fd5b506104fc6004803603602081101561093f57600080fd5b5035611a19565b34801561095257600080fd5b506104b46004803603602081101561096957600080fd5b50356001600160a01b0316611b09565b34801561098557600080fd5b506104fc611b24565b34801561099a57600080fd5b506104b4611bc6565b3480156109af57600080fd5b50610549611bf3565b3480156109c457600080fd5b506104fc600480360360208110156109db57600080fd5b5035611c02565b3480156109ee57600080fd5b506104fc60048036036020811015610a0557600080fd5b50356001600160a01b0316611d1f565b348015610a2157600080fd5b50610549612086565b348015610a3657600080fd5b506103dd612095565b348015610a4b57600080fd5b506104fc60048036036040811015610a6257600080fd5b506001600160a01b03813516906020013515156120f6565b348015610a8657600080fd5b506104b46121a5565b348015610a9b57600080fd5b506104fc60048036036020811015610ab257600080fd5b50356121ab565b348015610ac557600080fd5b506104b4612208565b348015610ada57600080fd5b5061048b60048036036040811015610af157600080fd5b506001600160a01b038135169060200135612258565b348015610b1357600080fd5b506104b460048036036020811015610b2a57600080fd5b50356001600160a01b03166122c0565b348015610b4657600080fd5b5061048b60048036036040811015610b5d57600080fd5b506001600160a01b038135169060200135612324565b348015610b7f57600080fd5b50610ba660048036036020811015610b9657600080fd5b50356001600160a01b0316612338565b604080516001600160a01b0390991689526020890197909752878701959095526060870193909352608086019190915260a085015260c084015260e083015251908190036101000190f35b348015610bfd57600080fd5b5061048b60048036036020811015610c1457600080fd5b50356001600160a01b0316612418565b348015610c3057600080fd5b506104fc60048036036040811015610c4757600080fd5b506001600160a01b038135169060200135151561242d565b348015610c6b57600080fd5b506104fc60048036036020811015610c8257600080fd5b5035612543565b348015610c9557600080fd5b506104fc6125a0565b348015610caa57600080fd5b5061048b60048036036020811015610cc157600080fd5b50356001600160a01b0316612638565b348015610cdd57600080fd5b506104fc60048036036040811015610cf457600080fd5b506001600160a01b038135169060200135151561264d565b348015610d1857600080fd5b506104fc60048036036020811015610d2f57600080fd5b503560ff166126d0565b348015610d4557600080fd5b506104b460048036036040811015610d5c57600080fd5b506001600160a01b0381358116916020013516612749565b348015610d8057600080fd5b50610d89612774565b60408051938452602084019290925282820152519081900360600190f35b348015610db357600080fd5b506104b4612780565b348015610dc857600080fd5b50610d89612786565b348015610ddd57600080fd5b506104b4612792565b348015610df257600080fd5b506104fc60048036036020811015610e0957600080fd5b50356127e2565b348015610e1c57600080fd5b50610ba660048036036020811015610e3357600080fd5b5035612895565b348015610e4657600080fd5b506104fc60048036036020811015610e5d57600080fd5b50356001600160a01b03166128fb565b60038054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610ef95780601f10610ece57610100808354040283529160200191610ef9565b820191906000526020600020905b815481529060010190602001808311610edc57829003601f168201915b5050505050905090565b6000610f17610f10612a55565b8484612a59565b5060015b92915050565b600f5490565b610f2f612a55565b6005546001600160a01b03908116911614610f7f576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b604080516060810182528481526020810184905201819052601292909255601355601455565b610fad612a55565b6005546001600160a01b03908116911614610ffd576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b604080516060810182528481526020810184905201819052601592909255601655601755565b6006546001600160a01b031681565b60025490565b60106020526000908152604090205460ff1681565b600061105a848484612b45565b6110ca84611066612a55565b6110c585604051806060016040528060288152602001613fcc602891396001600160a01b038a166000908152600160205260408120906110a4612a55565b6001600160a01b031681526020810191909152604001600020549190613269565b612a59565b5060019392505050565b6110dc612a55565b6005546001600160a01b0390811691161461112c576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b611134611032565b8111156111725760405162461bcd60e51b815260040180806020018281038252602f815260200180613f9d602f913960400191505060405180910390fd5b600f55565b600b5461010090046001600160a01b031681565b6000600b60019054906101000a90046001600160a01b03166001600160a01b03166385a6b3ae6040518163ffffffff1660e01b815260040160206040518083038186803b1580156111db57600080fd5b505afa1580156111ef573d6000803e3d6000fd5b505050506040513d602081101561120557600080fd5b5051905090565b601290565b611219612a55565b6005546001600160a01b03908116911614611269576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b600b60019054906101000a90046001600160a01b03166001600160a01b03166331e79db0826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156112cd57600080fd5b505af11580156112e1573d6000803e3d6000fd5b5050505050565b6000610f176112f5612a55565b846110c58560016000611306612a55565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906129f4565b60195461010090046001600160a01b031681565b611352612a55565b6005546001600160a01b039081169116146113a2576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152601060205260409020805460ff1916911515919091179055565b6007546001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600b546040805163bc4c4b3760e01b815233600482015260006024820181905291516101009093046001600160a01b03169263bc4c4b3792604480840193602093929083900390910190829087803b15801561145b57600080fd5b505af115801561146f573d6000803e3d6000fd5b505050506040513d602081101561148557600080fd5b5050565b6001600160a01b03166000908152601c602052604090205460ff1690565b6114af612a55565b6005546001600160a01b039081169116146114ff576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b600991909155600a55565b60408051606081018252601554815260165460208201526017549181019190915260009061153790613300565b905090565b611544612a55565b6005546001600160a01b03908116911614611594576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b600b805460ff1916911515919091179055565b6115af612a55565b6005546001600160a01b039081169116146115ff576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b611607612086565b6001600160a01b0316816001600160a01b031614156116575760405162461bcd60e51b8152600401808060200182810382526024815260200180613dc16024913960400191505060405180910390fd5b60198054610100600160a81b0319166101006001600160a01b038481168202929092179283905561168b920416600161242d565b61169681600161264d565b50565b60195460ff1681565b6000600b60019054906101000a90046001600160a01b03166001600160a01b03166309bbedde6040518163ffffffff1660e01b815260040160206040518083038186803b1580156111db57600080fd5b6116fa612a55565b6005546001600160a01b0390811691161461174a576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b6006546001600160a01b03828116911614156117975760405162461bcd60e51b815260040180806020018281038252602b815260200180613e93602b913960400191505060405180910390fd5b6006546040516001600160a01b03918216918316907f8fc842bbd331dfa973645f4ed48b11683d501ebf1352708d77a5da2ab49a576e90600090a3600680546001600160a01b0319166001600160a01b0383811691909117918290556040805163c45a015560e01b815290516000939092169163c45a015591600480820192602092909190829003018186803b15801561183057600080fd5b505afa158015611844573d6000803e3d6000fd5b505050506040513d602081101561185a57600080fd5b5051600654604080516315ab88c960e31b815290516001600160a01b039384169363c9c6539693309391169163ad5c464891600480820192602092909190829003018186803b1580156118ac57600080fd5b505afa1580156118c0573d6000803e3d6000fd5b505050506040513d60208110156118d657600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301525160448083019260209291908290030181600087803b15801561192857600080fd5b505af115801561193c573d6000803e3d6000fd5b505050506040513d602081101561195257600080fd5b5051600780546001600160a01b0319166001600160a01b039092169190911790555050565b6000600b60019054906101000a90046001600160a01b03166001600160a01b03166370a08231836040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156119db57600080fd5b505afa1580156119ef573d6000803e3d6000fd5b505050506040513d6020811015611a0557600080fd5b505192915050565b600f5481565b60185481565b6000806000600b60019054906101000a90046001600160a01b03166001600160a01b031663ffb2c479856040518263ffffffff1660e01b815260040180828152602001915050606060405180830381600087803b158015611a7957600080fd5b505af1158015611a8d573d6000803e3d6000fd5b505050506040513d6060811015611aa357600080fd5b5080516020808301516040938401518451848152928301829052828501819052606083018990529351929650945091925032916000917fc864333d6121033635ab41b29ae52f10a22cf4438c3e4f1c4c68518feb2f8a989181900360800190a350505050565b6001600160a01b031660009081526020819052604090205490565b611b2c612a55565b6005546001600160a01b03908116911614611b7c576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b6005546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600580546001600160a01b0319169055565b60408051606081018252601254815260135460208201526014549181019190915260009061153790613300565b600d546001600160a01b031681565b611c0a612a55565b6005546001600160a01b03908116911614611c5a576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b62030d408110158015611c7057506207a1208111155b611cab5760405162461bcd60e51b815260040180806020018281038252603c815260200180613f61603c913960400191505060405180910390fd5b601a54811415611cec5760405162461bcd60e51b81526004018080602001828103825260348152602001806140146034913960400191505060405180910390fd5b601a5460405182907f40d7e40e79af4e8e5a9b3c57030d8ea93f13d669c06d448c4d631d4ae7d23db790600090a3601a55565b611d27612a55565b6005546001600160a01b03908116911614611d77576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b600b546001600160a01b03828116610100909204161415611dc95760405162461bcd60e51b8152600401808060200182810382526035815260200180613ebe6035913960400191505060405180910390fd5b6000819050306001600160a01b0316816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015611e1157600080fd5b505afa158015611e25573d6000803e3d6000fd5b505050506040513d6020811015611e3b57600080fd5b50516001600160a01b031614611e825760405162461bcd60e51b815260040180806020018281038252604b815260200180613d76604b913960600191505060405180910390fd5b806001600160a01b03166331e79db0826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b158015611ed157600080fd5b505af1158015611ee5573d6000803e3d6000fd5b50506040805163031e79db60e41b815230600482015290516001600160a01b03851693506331e79db09250602480830192600092919082900301818387803b158015611f3057600080fd5b505af1158015611f44573d6000803e3d6000fd5b50505050806001600160a01b03166331e79db0611f5f612086565b6040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b158015611f9e57600080fd5b505af1158015611fb2573d6000803e3d6000fd5b50506006546040805163031e79db60e41b81526001600160a01b039283166004820152905191851693506331e79db0925060248082019260009290919082900301818387803b15801561200457600080fd5b505af1158015612018573d6000803e3d6000fd5b5050600b546040516001600160a01b036101009092048216935090851691507f90c7d74461c613da5efa97d90740869367d74ab3aa5837aa4ae9a975f954b7a890600090a3600b80546001600160a01b0390921661010002610100600160a81b031990921691909117905550565b6005546001600160a01b031690565b60048054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610ef95780601f10610ece57610100808354040283529160200191610ef9565b6120fe612a55565b6005546001600160a01b0390811691161461214e576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b6007546001600160a01b038381169116141561219b5760405162461bcd60e51b815260040180806020018281038252604d815260200180614091604d913960600191505060405180910390fd5b6114858282613325565b601a5481565b6121b3612a55565b6005546001600160a01b03908116911614612203576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b601b55565b6000600b60019054906101000a90046001600160a01b03166001600160a01b0316636f2789ec6040518163ffffffff1660e01b815260040160206040518083038186803b1580156111db57600080fd5b6000610f17612265612a55565b846110c585604051806060016040528060258152602001614110602591396001600061228f612a55565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190613269565b6000600b60019054906101000a90046001600160a01b03166001600160a01b031663a8b9d240836040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156119db57600080fd5b6000610f17612331612a55565b8484612b45565b600080600080600080600080600b60019054906101000a90046001600160a01b03166001600160a01b031663fbcbc0f18a6040518263ffffffff1660e01b815260040180826001600160a01b031681526020019150506101006040518083038186803b1580156123a757600080fd5b505afa1580156123bb573d6000803e3d6000fd5b505050506040513d6101008110156123d257600080fd5b508051602082015160408301516060840151608085015160a086015160c087015160e090970151959e50939c50919a509850965094509092509050919395975091939597565b601d6020526000908152604090205460ff1681565b612435612a55565b6005546001600160a01b03908116911614612485576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b6001600160a01b0382166000908152601c602052604090205460ff16151581151514156124e35760405162461bcd60e51b81526004018080602001828103825260328152602001806140de6032913960400191505060405180910390fd5b6001600160a01b0382166000818152601c6020908152604091829020805460ff1916851515908117909155825190815291517f9d8f7706ea1113d1a167b526eca956215946dd36cc7df39eb16180222d8b5df79281900390910190a25050565b61254b612a55565b6005546001600160a01b0390811691161461259b576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b601855565b6125a8612a55565b6005546001600160a01b039081169116146125f8576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b612600612086565b6001600160a01b03166108fc479081150290604051600060405180830381858888f19350505050158015611696573d6000803e3d6000fd5b60116020526000908152604090205460ff1681565b612655612a55565b6005546001600160a01b039081169116146126a5576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152601160205260409020805460ff1916911515919091179055565b6126d8612a55565b6005546001600160a01b03908116911614612728576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b6019805482919060ff1916600183600281111561274157fe5b021790555050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60155460165460175483565b600e5481565b60125460135460145483565b6000600b60019054906101000a90046001600160a01b03166001600160a01b031663e7841ec06040518163ffffffff1660e01b815260040160206040518083038186803b1580156111db57600080fd5b6127ea612a55565b6005546001600160a01b0390811691161461283a576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b600b60019054906101000a90046001600160a01b03166001600160a01b031663e98030c7826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156112cd57600080fd5b600080600080600080600080600b60019054906101000a90046001600160a01b03166001600160a01b0316635183d6fd8a6040518263ffffffff1660e01b8152600401808281526020019150506101006040518083038186803b1580156123a757600080fd5b612903612a55565b6005546001600160a01b03908116911614612953576040805162461bcd60e51b81526020600482018190526024820152600080516020613ff4833981519152604482015290519081900360640190fd5b6001600160a01b0381166129985760405162461bcd60e51b8152600401808060200182810382526026815260200180613de56026913960400191505060405180910390fd5b6005546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0319166001600160a01b0392909216919091179055565b600082820183811015612a4e576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b038316612a9e5760405162461bcd60e51b815260040180806020018281038252602481526020018061406d6024913960400191505060405180910390fd5b6001600160a01b038216612ae35760405162461bcd60e51b8152600401808060200182810382526022815260200180613e0b6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316612b8a5760405162461bcd60e51b81526004018080602001828103825260258152602001806140486025913960400191505060405180910390fd5b6001600160a01b038216612bcf5760405162461bcd60e51b8152600401808060200182810382526023815260200180613d536023913960400191505060405180910390fd5b6001600160a01b03831660009081526010602052604090205460ff16158015612c1157506001600160a01b03821660009081526010602052604090205460ff16155b612c58576040805162461bcd60e51b8152602060048201526013602482015272426c61636b6c6973746564206164647265737360681b604482015290519081900360640190fd5b600b5460ff16612ca5576040805162461bcd60e51b8152602060048201526013602482015272151c98591a5b99c81a5cc8191a5cd8589b1959606a1b604482015290519081900360640190fd5b600854158015612ccd5750612cb8612086565b6001600160a01b0316836001600160a01b0316145b8015612cf157506001600160a01b0382166000908152601d602052604090205460ff165b15612cfb57436008555b80612d1157612d0c83836000613469565b613264565b600160195460ff166002811115612d2457fe5b148015612d4a57506001600160a01b0382166000908152601d602052604090205460ff16155b8015612d6f57506001600160a01b03821660009081526011602052604090205460ff16155b15612dc757600f54612d8a82612d8485611b09565b906129f4565b1115612dc75760405162461bcd60e51b815260040180806020018281038252604d815260200180613ef3604d913960600191505060405180910390fd5b6000612dd230611b09565b600e5490915081108015908190612df35750600754600160a01b900460ff16155b8015612e1857506001600160a01b0385166000908152601d602052604090205460ff16155b8015612e3d5750612e27612086565b6001600160a01b0316856001600160a01b031614155b8015612e625750612e4c612086565b6001600160a01b0316846001600160a01b031614155b15612e91576007805460ff60a01b1916600160a01b179055612e83826135c4565b6007805460ff60a01b191690555b600754600090600160a01b900460ff16158015612ec757506001600160a01b0386166000908152601c602052604090205460ff16155b8015612eec57506001600160a01b0385166000908152601c602052604090205460ff16155b9050801561306d576001600160a01b0385166000908152601d602052604081205460ff16612f2157612f1c611bc6565b612f29565b612f2961150a565b9050600260195460ff166002811115612f3e57fe5b148015612f6457506001600160a01b0386166000908152601d602052604090205460ff16155b8015612f8957506001600160a01b03861660009081526011602052604090205460ff16155b15612fa957600f54612f9e86612d8489611b09565b1115612fa957601854015b801561306b57600a54600854014311158015612fdd57506001600160a01b0387166000908152601d602052604090205460ff165b8015612ff757506006546001600160a01b03878116911614155b801561300c57506001600160a01b0386163014155b8015613031575061301b612086565b6001600160a01b0316866001600160a01b031614155b1561303b57506009545b6000613052606461304c88856136a4565b906136fd565b905061305e868261373f565b955061306981613781565b505b505b613078868686613469565b600b5461010090046001600160a01b031663e30443bc8761309881611b09565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156130de57600080fd5b505af19250505080156130ef575060015b50600b5461010090046001600160a01b031663e30443bc8661311081611b09565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561315657600080fd5b505af1925050508015613167575060015b50600754600160a01b900460ff1661326057601a54600b54604080516001624d3b8760e01b031981526004810184905290516101009092046001600160a01b03169163ffb2c479916024808201926060929091908290030181600087803b1580156131d157600080fd5b505af192505050801561320557506040513d60608110156131f157600080fd5b508051602082015160409092015190919060015b61320e5761325e565b604080518481526020810184905280820183905260608101869052905132916001917fc864333d6121033635ab41b29ae52f10a22cf4438c3e4f1c4c68518feb2f8a989181900360800190a35050505b505b5050505b505050565b600081848411156132f85760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156132bd5781810151838201526020016132a5565b50505050905090810190601f1680156132ea5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000610f1b8260400151612d84846020015185600001516129f490919063ffffffff16565b6001600160a01b0382166000908152601d602052604090205460ff16151581151514156133835760405162461bcd60e51b8152600401808060200182810382526040815260200180613e536040913960400191505060405180910390fd5b6001600160a01b0382166000908152601d60205260409020805460ff1916821580159190911790915561342d57600b60019054906101000a90046001600160a01b03166001600160a01b03166331e79db0836040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561341457600080fd5b505af1158015613428573d6000803e3d6000fd5b505050505b604051811515906001600160a01b038416907fffa9187bf1f18bf477bd0ea1bcbb64e93b6a98132473929edfce215cd9b16fab90600090a35050565b6001600160a01b0383166134ae5760405162461bcd60e51b81526004018080602001828103825260258152602001806140486025913960400191505060405180910390fd5b6001600160a01b0382166134f35760405162461bcd60e51b8152600401808060200182810382526023815260200180613d536023913960400191505060405180910390fd5b6134fe838383613264565b61353b81604051806060016040528060268152602001613e2d602691396001600160a01b0386166000908152602081905260409020549190613269565b6001600160a01b03808516600090815260208190526040808220939093559084168152205461356a90826129f4565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60006135ce611bc6565b9050806135db5750611696565b60006135e683613815565b905060006136068361304c601260000154856136a490919063ffffffff16565b905060006136268461304c601260010154866136a490919063ffffffff16565b9050600061363e82613638868661373f565b9061373f565b9050821561364f5761364f836139e5565b8115613695576019546040516101009091046001600160a01b0316906108fc8415029084906000818181858888f19350505050158015613693573d6000803e3d6000fd5b505b80156132605761326081613b88565b6000826136b357506000610f1b565b828202828482816136c057fe5b0414612a4e5760405162461bcd60e51b8152600401808060200182810382526021815260200180613f406021913960400191505060405180910390fd5b6000612a4e83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613c66565b6000612a4e83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250613269565b600061378c82613815565b905060006137aa606461304c601b54856136a490919063ffffffff16565b905060006137b8838361373f565b90508115613800576019546040516101009091046001600160a01b0316906108fc8415029084906000818181858888f193505050501580156137fe573d6000803e3d6000fd5b505b801561380f5761380f81613b88565b50505050565b6040805160028082526060808301845260009390929190602083019080368337019050509050308160008151811061384957fe5b6001600160a01b03928316602091820292909201810191909152600654604080516315ab88c960e31b81529051919093169263ad5c4648926004808301939192829003018186803b15801561389d57600080fd5b505afa1580156138b1573d6000803e3d6000fd5b505050506040513d60208110156138c757600080fd5b50518151829060019081106138d857fe5b6001600160a01b0392831660209182029290920101526006546138fe9130911685612a59565b60065460405163791ac94760e01b8152600481018581526000602483018190523060648401819052426084850181905260a060448601908152875160a4870152875147976001600160a01b03169663791ac947968c96958b95909490939192909160c490910190602080880191028083838b5b83811015613989578181015183820152602001613971565b505050509050019650505050505050600060405180830381600087803b1580156139b257600080fd5b505af11580156139c6573d6000803e3d6000fd5b505050506139dd814761373f90919063ffffffff16565b949350505050565b6000613a11827f0000000000000000000000000000000000000000000000000000000000000000613ccb565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb600b60019054906101000a90046001600160a01b0316846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015613aa157600080fd5b505af1158015613ab5573d6000803e3d6000fd5b505050506040513d6020811015613acb57600080fd5b50519050801561326457600b60019054906101000a90046001600160a01b03166001600160a01b031663ba72a955836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015613b3057600080fd5b505af1158015613b44573d6000803e3d6000fd5b5050604080518681526020810186905281517f80195cc573b02cc48460cbca6e6e4cc85ddb91959d946e1c3025ea3d87942dc39450908190039091019150a1505050565b6000613b958260026136fd565b90506000613ba3838361373f565b90506000613bb18230613ccb565b600654909150613bcc9030906001600160a01b031683612a59565b6006546040805163f305d71960e01b8152306004820152602481018490526000604482018190526064820181905260848201524260a482015290516001600160a01b039092169163f305d71991869160c480830192606092919082900301818588803b158015613c3b57600080fd5b505af1158015613c4f573d6000803e3d6000fd5b50505050506040513d606081101561326057600080fd5b60008183613cb55760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156132bd5781810151838201526020016132a5565b506000838581613cc157fe5b0495945050505050565b600c546040805163f088d54760e01b81526001600160a01b0384811660048301529151600093929092169163f088d547918691602480830192602092919082900301818588803b158015613d1e57600080fd5b505af1158015613d32573d6000803e3d6000fd5b50505050506040513d6020811015613d4957600080fd5b5051939250505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734e5943414b453a20546865206e6577206469766964656e6420747261636b6572206d757374206265206f776e656420627920746865204e5943414b4520746f6b656e20636f6e74726163744d61726b6574696e672077616c6c65742063616e6e6f7420626520746865206f776e65724f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654e5943414b453a204175746f6d61746564206d61726b6574206d616b6572207061697220697320616c72656164792073657420746f20746861742076616c75654e5943414b453a2054686520726f7574657220616c726561647920686173207468617420616464726573734e5943414b453a20546865206469766964656e6420747261636b657220616c72656164792068617320746861742061646472657373596f7520617265207472616e7366657272696e6720746f6f206d616e7920746f6b656e732c20706c656173652074727920746f207472616e73666572206120736d616c6c657220616d6f756e74536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774e5943414b453a20676173466f7250726f63657373696e67206d757374206265206265747765656e203230302c30303020616e64203530302c3030304e5943414b453a20416d6f756e742063616e6e6f74206265206f7665722074686520746f74616c20737570706c792e45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65724e5943414b453a2043616e6e6f742075706461746520676173466f7250726f63657373696e6720746f2073616d652076616c756545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573734e5943414b453a205468652050616e63616b655377617020706169722063616e6e6f742062652072656d6f7665642066726f6d206175746f6d617465644d61726b65744d616b657250616972734e5943414b453a204163636f756e7420697320616c7265616479207468652076616c7565206f6620276578636c756465642745524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220604f3712b1e9a64b742ee5a65163666e8a56547ff54035010422e38e83d894dd64736f6c634300060c003360c06040527f0e09fabb73bd3ade0a17ecc321fd13a19e81ce82000000000000000000000000608052610e10601155692a5a058fc295ed00000060a0523480156200004957600080fd5b5060408051808201825260178082527f4e5943414b455f4469766964656e645f547261636b657200000000000000000060208084018281528551808701909652928552840152815191929183918391620000a6916003916200012b565b508051620000bc9060049060208401906200012b565b5050506000620000d16200012760201b60201c565b600580546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3505050620001c7565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200016e57805160ff19168380011785556200019e565b828001600101855582156200019e579182015b828111156200019e57825182559160200191906001019062000181565b50620001ac929150620001b0565b5090565b5b80821115620001ac5760008155600101620001b1565b60805160601c60a051612140620001f86000398061102552806110f2525080610a965280611abe52506121406000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c806385a6b3ae11610125578063bc4c4b37116100ad578063e7841ec01161007c578063e7841ec01461067b578063e98030c714610683578063f2fde38b146106a0578063fbcbc0f1146106c6578063ffb2c479146106ec5761021c565b8063bc4c4b37146105eb578063be10b61414610619578063dd62ed3e14610621578063e30443bc1461064f5761021c565b8063a457c2d7116100f4578063a457c2d71461052a578063a8b9d24014610556578063a9059cbb1461057c578063aafd847a146105a8578063ba72a955146105ce5761021c565b806385a6b3ae146104ec5780638da5cb5b146104f457806391b89fba146104fc57806395d89b41146105225761021c565b806331e79db0116101a85780635183d6fd116101775780635183d6fd146104465780636a474002146104ae5780636f2789ec146104b657806370a08231146104be578063715018a6146104e45761021c565b806331e79db0146103a857806339509351146103d05780634ca6ef28146103fc5780634e7b827f146104205761021c565b8063226cfa3d116101ef578063226cfa3d1461030057806323b872dd1461032657806327ce01471461035c5780633009a60914610382578063313ce5671461038a5761021c565b806306fdde0314610221578063095ea7b31461029e57806309bbedde146102de57806318160ddd146102f8575b600080fd5b610229610727565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026357818101518382015260200161024b565b50505050905090810190601f1680156102905780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102ca600480360360408110156102b457600080fd5b506001600160a01b0381351690602001356107bd565b604080519115158252519081900360200190f35b6102e66107db565b60408051918252519081900360200190f35b6102e66107e1565b6102e66004803603602081101561031657600080fd5b50356001600160a01b03166107e7565b6102ca6004803603606081101561033c57600080fd5b506001600160a01b038135811691602081013590911690604001356107f9565b6102e66004803603602081101561037257600080fd5b50356001600160a01b0316610880565b6102e66108df565b6103926108e5565b6040805160ff9092168252519081900360200190f35b6103ce600480360360208110156103be57600080fd5b50356001600160a01b03166108ea565b005b6102ca600480360360408110156103e657600080fd5b506001600160a01b038135169060200135610a46565b610404610a94565b604080516001600160a01b039092168252519081900360200190f35b6102ca6004803603602081101561043657600080fd5b50356001600160a01b0316610ab8565b6104636004803603602081101561045c57600080fd5b5035610acd565b604080516001600160a01b0390991689526020890197909752878701959095526060870193909352608086019190915260a085015260c084015260e083015251908190036101000190f35b6103ce610c26565b6102e6610c5d565b6102e6600480360360208110156104d457600080fd5b50356001600160a01b0316610c63565b6103ce610c7e565b6102e6610d20565b610404610d26565b6102e66004803603602081101561051257600080fd5b50356001600160a01b0316610d35565b610229610d40565b6102ca6004803603604081101561054057600080fd5b506001600160a01b038135169060200135610da1565b6102e66004803603602081101561056c57600080fd5b50356001600160a01b0316610e09565b6102ca6004803603604081101561059257600080fd5b506001600160a01b038135169060200135610e35565b6102e6600480360360208110156105be57600080fd5b50356001600160a01b0316610e49565b6103ce600480360360208110156105e457600080fd5b5035610e64565b6102ca6004803603604081101561060157600080fd5b506001600160a01b0381351690602001351515610f4e565b6102e6611023565b6102e66004803603604081101561063757600080fd5b506001600160a01b0381358116916020013516611047565b6103ce6004803603604081101561066557600080fd5b506001600160a01b038135169060200135611072565b6102e661123c565b6103ce6004803603602081101561069957600080fd5b5035611242565b6103ce600480360360208110156106b657600080fd5b50356001600160a01b031661135e565b610463600480360360208110156106dc57600080fd5b50356001600160a01b0316611457565b6107096004803603602081101561070257600080fd5b50356115ca565b60408051938452602084019290925282820152519081900360600190f35b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b35780601f10610788576101008083540402835291602001916107b3565b820191906000526020600020905b81548152906001019060200180831161079657829003601f168201915b5050505050905090565b60006107d16107ca6116c8565b84846116cc565b5060015b92915050565b600a5490565b60025490565b60106020526000908152604090205481565b60006108068484846117b8565b610876846108126116c8565b61087185604051806060016040528060288152602001612059602891396001600160a01b038a166000908152600160205260408120906108506116c8565b6001600160a01b0316815260208101919091526040016000205491906117ef565b6116cc565b5060019392505050565b6001600160a01b038116600090815260076020526040812054600160801b906108cf906108ca906108c46108bf6108b688610c63565b60065490611886565b6118e6565b906118f6565b611929565b816108d657fe5b0490505b919050565b600e5481565b601290565b6108f26116c8565b6005546001600160a01b03908116911614610942576040805162461bcd60e51b81526020600482018190526024820152600080516020612081833981519152604482015290519081900360640190fd5b6001600160a01b0381166000908152600f602052604090205460ff161561096857600080fd5b6001600160a01b0381166000908152600f60205260408120805460ff1916600117905561099690829061193c565b6040805163131836e760e21b8152600a60048201526001600160a01b0383166024820152905173__$ce39e7eba0e8c210ce522c13d692fbaca1$__91634c60db9c916044808301926000929190829003018186803b1580156109f757600080fd5b505af4158015610a0b573d6000803e3d6000fd5b50506040516001600160a01b03841692507fa878b31040b2e6d0a9a3d3361209db3908ba62014b0dca52adbaee451d128b259150600090a250565b60006107d1610a536116c8565b846108718560016000610a646116c8565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611995565b7f000000000000000000000000000000000000000000000000000000000000000081565b600f6020526000908152604090205460ff1681565b600080600080600080600080600a73__$ce39e7eba0e8c210ce522c13d692fbaca1$__63deb3d89690916040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610b2b57600080fd5b505af4158015610b3f573d6000803e3d6000fd5b505050506040513d6020811015610b5557600080fd5b50518910610b7c575060009650600019955085945086935083925082915081905080610c1b565b610c0a600a73__$ce39e7eba0e8c210ce522c13d692fbaca1$__63d1aa9e7e90918c6040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b158015610bd957600080fd5b505af4158015610bed573d6000803e3d6000fd5b505050506040513d6020811015610c0357600080fd5b5051611457565b975097509750975097509750975097505b919395975091939597565b60405162461bcd60e51b8152600401808060200182810382526069815260200180611f836069913960800191505060405180910390fd5b60115481565b6001600160a01b031660009081526020819052604090205490565b610c866116c8565b6005546001600160a01b03908116911614610cd6576040805162461bcd60e51b81526020600482018190526024820152600080516020612081833981519152604482015290519081900360640190fd5b6005546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600580546001600160a01b0319169055565b60095481565b6005546001600160a01b031690565b60006107d582610e09565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b35780601f10610788576101008083540402835291602001916107b3565b60006107d1610dae6116c8565b84610871856040518060600160405280602581526020016120e66025913960016000610dd86116c8565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906117ef565b6001600160a01b0381166000908152600860205260408120546107d590610e2f84610880565b906119ef565b60006107d1610e426116c8565b84846117b8565b6001600160a01b031660009081526008602052604090205490565b610e6c6116c8565b6005546001600160a01b03908116911614610ebc576040805162461bcd60e51b81526020600482018190526024820152600080516020612081833981519152604482015290519081900360640190fd5b6000610ec66107e1565b11610ed057600080fd5b8015610f4b57610f01610ee16107e1565b610eef83600160801b611886565b81610ef657fe5b600654919004611995565b60065560408051828152905133917fa493a9229478c3fcd73f66d2cdeb7f94fd0f341da924d1054236d78454116511919081900360200190a2600954610f479082611995565b6009555b50565b6000610f586116c8565b6005546001600160a01b03908116911614610fa8576040805162461bcd60e51b81526020600482018190526024820152600080516020612081833981519152604482015290519081900360640190fd5b6000610fb384611a31565b90508015611019576001600160a01b0384166000818152601060209081526040918290204290558151848152915186151593927fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf09292908290030190a360019150506107d5565b5060009392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61107a6116c8565b6005546001600160a01b039081169116146110ca576040805162461bcd60e51b81526020600482018190526024820152600080516020612081833981519152604482015290519081900360640190fd5b6001600160a01b0382166000908152600f602052604090205460ff16156110f057611238565b7f000000000000000000000000000000000000000000000000000000000000000081106111a657611121828261193c565b60408051632f0ad01760e21b8152600a60048201526001600160a01b038416602482015260448101839052905173__$ce39e7eba0e8c210ce522c13d692fbaca1$__9163bc2b405c916064808301926000929190829003018186803b15801561118957600080fd5b505af415801561119d573d6000803e3d6000fd5b5050505061122b565b6111b182600061193c565b6040805163131836e760e21b8152600a60048201526001600160a01b0384166024820152905173__$ce39e7eba0e8c210ce522c13d692fbaca1$__91634c60db9c916044808301926000929190829003018186803b15801561121257600080fd5b505af4158015611226573d6000803e3d6000fd5b505050505b611236826001610f4e565b505b5050565b600e5490565b61124a6116c8565b6005546001600160a01b0390811691161461129a576040805162461bcd60e51b81526020600482018190526024820152600080516020612081833981519152604482015290519081900360640190fd5b610e1081101580156112af5750620151808111155b6112ea5760405162461bcd60e51b815260040180806020018281038252604c81526020018061200d604c913960600191505060405180910390fd5b60115481141561132b5760405162461bcd60e51b815260040180806020018281038252603e815260200180611eae603e913960400191505060405180910390fd5b60115460405182907f474ea64804364a1e29a4487ddb63c3342a2dd826ccd8acf48825e680a0e6f20f90600090a3601155565b6113666116c8565b6005546001600160a01b039081169116146113b6576040805162461bcd60e51b81526020600482018190526024820152600080516020612081833981519152604482015290519081900360640190fd5b6001600160a01b0381166113fb5760405162461bcd60e51b8152600401808060200182810382526026815260200180611f3b6026913960400191505060405180910390fd5b6005546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0319166001600160a01b0392909216919091179055565b600080600080600080600080889750600a73__$ce39e7eba0e8c210ce522c13d692fbaca1$__6317e142d190918a6040518363ffffffff1660e01b815260040180838152602001826001600160a01b031681526020019250505060206040518083038186803b1580156114c957600080fd5b505af41580156114dd573d6000803e3d6000fd5b505050506040513d60208110156114f357600080fd5b5051965060001995506000871261155757600e5487111561152357600e5461151c908890611bc0565b9550611557565b600e54600a5460009110611538576000611547565b600e54600a54611547916119ef565b905061155388826118f6565b9650505b61156088610e09565b945061156b88610880565b6001600160a01b0389166000908152601060205260409020549094509250826115955760006115a3565b6011546115a3908490611995565b91504282116115b35760006115bd565b6115bd82426119ef565b9050919395975091939597565b600a5460009081908190806115ea575050600e54600092508291506116c1565b600e546000805a90506000805b898410801561160557508582105b156116b057600a54600190950194851061161e57600094505b6000600a600001868154811061163057fe5b60009182526020808320909101546001600160a01b0316808352601090915260409091205490915061166190611bf2565b1561167d57611671816001610f4e565b1561167d576001909101905b60019092019160005a9050808511156116a7576116a461169d86836119ef565b8790611995565b95505b93506115f79050565b600e85905590975095509193505050505b9193909250565b3390565b6001600160a01b0383166117115760405162461bcd60e51b81526004018080602001828103825260248152602001806120c26024913960400191505060405180910390fd5b6001600160a01b0382166117565760405162461bcd60e51b8152600401808060200182810382526022815260200180611f616022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60405162461bcd60e51b815260040180806020018281038252602d815260200180611f0e602d913960400191505060405180910390fd5b6000818484111561187e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561184357818101518382015260200161182b565b50505050905090810190601f1680156118705780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082611895575060006107d5565b828202828482816118a257fe5b04146118df5760405162461bcd60e51b8152600401808060200182810382526021815260200180611fec6021913960400191505060405180910390fd5b9392505050565b600081818112156107d557600080fd5b600082820181831280159061190b5750838112155b80611920575060008312801561192057508381125b6118df57600080fd5b60008082121561193857600080fd5b5090565b600061194783610c63565b90508082111561196f57600061195d83836119ef565b90506119698482611c19565b50611236565b8082101561123657600061198382846119ef565b905061198f8482611c7d565b50505050565b6000828201838110156118df576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60006118df83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506117ef565b600080611a3d83610e09565b90508015611bb7576001600160a01b038316600090815260086020526040902054611a689082611995565b6001600160a01b038416600081815260086020908152604091829020939093558051848152905191927fee503bee2bb6a87e57bc57db795f98137327401a0e7b7ce42e37926cc1a9ca4d92918290030190a260007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb85846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015611b3357600080fd5b505af1158015611b47573d6000803e3d6000fd5b505050506040513d6020811015611b5d57600080fd5b5051905080611baf576001600160a01b038416600090815260086020526040902054611b8990836119ef565b6001600160a01b03851660009081526008602052604081209190915592506108da915050565b5090506108da565b50600092915050565b6000818303818312801590611bd55750838113155b80611920575060008312801561192057508381136118df57600080fd5b600042821115611c04575060006108da565b601154611c1142846119ef565b101592915050565b611c238282611cc1565b611c5d611c3e6108bf8360065461188690919063ffffffff16565b6001600160a01b03841660009081526007602052604090205490611bc0565b6001600160a01b0390921660009081526007602052604090209190915550565b611c878282611db1565b611c5d611ca26108bf8360065461188690919063ffffffff16565b6001600160a01b038416600090815260076020526040902054906118f6565b6001600160a01b038216611d1c576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611d2860008383611236565b600254611d359082611995565b6002556001600160a01b038216600090815260208190526040902054611d5b9082611995565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038216611df65760405162461bcd60e51b81526004018080602001828103825260218152602001806120a16021913960400191505060405180910390fd5b611e0282600083611236565b611e3f81604051806060016040528060228152602001611eec602291396001600160a01b03851660009081526020819052604090205491906117ef565b6001600160a01b038316600090815260208190526040902055600254611e6590826119ef565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3505056fe4e5943414b455f4469766964656e645f547261636b65723a2043616e6e6f742075706461746520636c61696d5761697420746f2073616d652076616c756545524332303a206275726e20616d6f756e7420657863656564732062616c616e63654e5943414b455f4469766964656e645f547261636b65723a204e6f207472616e736665727320616c6c6f7765644f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f20616464726573734e5943414b455f4469766964656e645f547261636b65723a2077697468647261774469766964656e642064697361626c65642e20557365207468652027636c61696d272066756e6374696f6e206f6e20746865206d61696e204e5943414b4520636f6e74726163742e536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774e5943414b455f4469766964656e645f547261636b65723a20636c61696d57616974206d757374206265207570646174656420746f206265747765656e203120616e6420323420686f75727345524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220a9b130919cd433fbd94cfac07f88bc8325b0a1afe2615553db4e524e01aea81864736f6c634300060c0033608060405234801561001057600080fd5b506040516108e63803806108e68339818101604052602081101561003357600080fd5b5051600061003f6100ae565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b0319166001600160a01b03929092169190911790556100b2565b3390565b610825806100c16000396000f3fe60806040526004361061003f5760003560e01c8063715018a6146100445780638da5cb5b1461005b578063f088d5471461008c578063f2fde38b146100c4575b600080fd5b34801561005057600080fd5b506100596100f7565b005b34801561006757600080fd5b506100706101ab565b604080516001600160a01b039092168252519081900360200190f35b6100b2600480360360208110156100a257600080fd5b50356001600160a01b03166101ba565b60408051918252519081900360200190f35b3480156100d057600080fd5b50610059600480360360208110156100e757600080fd5b50356001600160a01b03166106bb565b6100ff6107c5565b6000546001600160a01b03908116911614610161576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b60006101c46107c5565b6000546001600160a01b03908116911614610226576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60408051600280825260608083018452309386939192906020830190803683375050600154604080516315ab88c960e31b815290519394506001600160a01b039091169263ad5c464892506004808301926020929190829003018186803b15801561029057600080fd5b505afa1580156102a4573d6000803e3d6000fd5b505050506040513d60208110156102ba57600080fd5b5051815182906000906102c957fe5b60200260200101906001600160a01b031690816001600160a01b03168152505084816001815181106102f757fe5b60200260200101906001600160a01b031690816001600160a01b0316815250506000826001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561036657600080fd5b505afa15801561037a573d6000803e3d6000fd5b505050506040513d602081101561039057600080fd5b505160015460405163b6f9de9560e01b81526000600482018181526001600160a01b0389811660448501524260648501819052608060248601908152895160848701528951979850919095169563b6f9de959534958a948d94929390929160a40190602087810191028083838b5b838110156104165781810151838201526020016103fe565b50505050905001955050505050506000604051808303818588803b15801561043d57600080fd5b505af1158015610451573d6000803e3d6000fd5b5050505050600081846001600160a01b03166370a08231876040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156104a657600080fd5b505afa1580156104ba573d6000803e3d6000fd5b505050506040513d60208110156104d057600080fd5b505103905060006001600160a01b0385166370a082316104ee6101ab565b6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561052b57600080fd5b505afa15801561053f573d6000803e3d6000fd5b505050506040513d602081101561055557600080fd5b505190506001600160a01b03851663a9059cbb6105706101ab565b846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156105b757600080fd5b505af11580156105cb573d6000803e3d6000fd5b505050506040513d60208110156105e157600080fd5b505161062d576040805162461bcd60e51b81526020600482015260166024820152752a37b5b2b7103a3930b739b332b9103330b4b632b21760511b604482015290519081900360640190fd5b80856001600160a01b03166370a082316106456101ab565b6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561068257600080fd5b505afa158015610696573d6000803e3d6000fd5b505050506040513d60208110156106ac57600080fd5b50510398975050505050505050565b6106c36107c5565b6000546001600160a01b03908116911614610725576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b03811661076a5760405162461bcd60e51b81526004018080602001828103825260268152602001806107ca6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220075a8c0b81bb7752fcdbc2b31f4d7b10522dfbb47b344a7ad5c7736942d74d4664736f6c634300060c00334d61726b6574696e672077616c6c65742063616e6e6f7420626520746865206f776e65724e5943414b453a204175746f6d61746564206d61726b6574206d616b6572207061697220697320616c72656164792073657420746f20746861742076616c75654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65724e5943414b453a204163636f756e7420697320616c7265616479207468652076616c7565206f6620276578636c7564656427";
//# sourceMappingURL=NYCAKE__factory.js.map